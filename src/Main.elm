port module Main exposing (..)

import AchievementData
import Bootstrap.Alert as Alert
import Bootstrap.Button as Button exposing (Option)
import Bootstrap.ButtonGroup as ButtonGroup
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Dropdown as Dropdown
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Modal as Modal
import Bootstrap.Navbar as Navbar
import Bootstrap.Progress as Progress
import Bootstrap.Text as Text
import Bootstrap.Utilities.Border as Border
import Bootstrap.Utilities.Display as Display
import Bootstrap.Form.Input as Input
import Bootstrap.Utilities.Flex as Flex
import Bootstrap.Utilities.Size as Size
import Bootstrap.Utilities.Spacing as Spacing
import Bootstrap.Form.InputGroup as InputGroup
import Browser
import Cards exposing (cards, Card, CardId, Kind(..))
import Dict
import FontAwesome.Icon
import FontAwesome.Solid
import FontAwesome.Transforms
import Html exposing (Attribute, Html, div, img, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import List.Extra as List
import List.Extras as List
import List.FlatMap as List
import Bootstrap.Text exposing (Color)
import Bootstrap.Grid.Row as Row
import Browser.Navigation as Nav exposing (Key)
import Maybe.Extra as Maybe
import QS as QS
import Url exposing (Url)
import Browser exposing (UrlRequest)
import String.Extra as String
import String.Extras as String
import Platform exposing (Router)

maxDeckSize : Int
maxDeckSize = 15

cardIdLength : Int
cardIdLength = 3

main : Program Flags Model Msg
main =
    Browser.application
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }


port copy : String -> Cmd msg
port receiveCopyResult : (Bool -> msg) -> Sub msg

-- Model -------------------------------------------------------------------------------------


type alias Flags =
    { windowWidth : Int }


type CardDisplay
    = Text
    | Image


type InventoryDisplay
    = InventoryAsCards
    | InventoryAsSummary


type alias Model =
    { cardDisplay : CardDisplay
    , cardDisplayDropdownState : Dropdown.State
    , inventoryDisplay : InventoryDisplay
    , showCardPoolDetails : Bool
    , shareModalVisibility: Modal.Visibility
    , yesNoModalVisibility: Modal.Visibility
    , yesNoModalContent: Maybe YesNoModalContent
    , helpModalVisibility : Modal.Visibility
    , hostUrl: Url
    , navKey: Key
    , summarizeViewHintVisibility: Alert.Visibility
    , returnViewHintVisibility: Alert.Visibility
    --------------
    , cardPool : List Card -- All known cards, should never be modified
    , selectedCards : List Card -- All currently selected cards
    , notSelectedCards : List Card -- All currently not selected cards
    , filter : Maybe String
    }

{-| Takes a string and splits it into chunks of size `cardIdSize` and parses them as Ints.
    Returns `Nothing` if any of the chunks cannot be parsed.
    Expects the string length to be a multiple of `cardIdSize`.

        parseCardIds "001002003004" == Just [ 1, 2, 4, 5 ]
-}
parseCardIds : String -> Maybe (List Int)
parseCardIds query =
    query
    |> String.chunks cardIdLength
    |> List.map String.toInt
    |> Maybe.combine


filteredCards: Maybe String -> List Card -> List Card
filteredCards filter cards =
    case filter of
        Just f ->
            let 
                lowerCaseFilter = f |> String.toLower
                parts = lowerCaseFilter |> String.split " "
            in
            cards |> List.filter (Cards.containsWords parts)
        Nothing ->
            cards


tryDeckQueryArgument : Url -> Maybe String
tryDeckQueryArgument url =
    let
        dict = url.query |> Maybe.map (QS.parse (QS.config))
        val = dict |> Maybe.andThen (Dict.get "deck")
    in
    case val of
        Just (QS.One o) ->
            Just o
        Just (QS.Many (head :: _)) ->
            Just head
        Just (QS.Many []) ->
            Nothing
        Nothing ->
            Nothing


init : Flags -> Url -> Key -> ( Model, Cmd Msg )
init flags url key =
    let
        cardIdsFromQuery =
            url
            |> tryDeckQueryArgument
            |> Maybe.andThen parseCardIds
            |> Maybe.map List.unique
            |> Maybe.withDefault []

        {- This way of mapping cards is inferior to checking all cards once if their id
           was previously selected but this step is only done once and it makes sure to
           keep the order of the deck intact. Filtering `cards` would automaticaly sort them
           by id.
        -}
        selected =
            cardIdsFromQuery
            |> List.map (\c -> cards |> List.find (\cc -> cc.id == c))
            |> Maybe.values

        notSelected =
            cards |> List.filter (\c -> selected |> List.all  ((/=) c)) 

        hostUrl =
            { url | query = Nothing, fragment = Nothing }
    in
    ( { cardPool = cards
      , cardDisplay = if flags.windowWidth < 769 then Text else Image
      , cardDisplayDropdownState = Dropdown.initialState
      , inventoryDisplay = InventoryAsCards
      , selectedCards = selected
      , notSelectedCards = notSelected
      , showCardPoolDetails = False
      , filter = Nothing
      , summarizeViewHintVisibility = Alert.shown
      , returnViewHintVisibility = Alert.closed
      , shareModalVisibility = Modal.hidden
      , yesNoModalVisibility = Modal.hidden
      , helpModalVisibility = Modal.hidden
      , yesNoModalContent = Nothing
      , hostUrl = hostUrl
      , navKey = key
      }
    , Cmd.none )


type alias YesNoModalContent =
    { header: String
    , text: String
    , yesMsg: Msg
    , noMsg: Msg
    }


type Msg
    = UrlChanged Url
    | LinkClicked UrlRequest
    | ShowShareModal
    | HideShareModal
    | ToggleInventory
    | CopyShareUrl String
    | CopyShareUrlResult Bool
    | ChangeCardDisplayType CardDisplay
    | CardDisplayDropdownStateChanged Dropdown.State
    | ChangeInventoryDisplayType Bool InventoryDisplay
    | ShowYesNoModal YesNoModalContent
    | ConfirmResetModal
    | RejectResetModal
    | ToggleCardDetails
    | ToggleHelpModal
    | ToggleSummarizeViewHint Alert.Visibility
    | ToggleReturnSummarizeViewHint Alert.Visibility
    ---------------------------
    | SelectCard CardId
    | DeselectCard CardId
    | ResetCards
    | MoveCardUp CardId
    | MoveCardDown CardId
    | FilterChanged String
    | ClearFilter


-- Update -------------------------------------------------------------------------------------

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
    [ Dropdown.subscriptions model.cardDisplayDropdownState CardDisplayDropdownStateChanged
    , receiveCopyResult CopyShareUrlResult
    ]


swapCardsBy : (Card -> Bool) -> Int -> List Card -> List Card
swapCardsBy predicate stepSize cards =
    let
        index =
            cards |> List.elemIndexBy predicate
    in
    case index of
        Just i ->
            cards |> List.swapAt i (i + stepSize)

        Nothing ->
            Debug.log "Tried to swap cards for a card not found in the set."
                cards


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UrlChanged _ ->
            ( model, Cmd.none)
        
        LinkClicked _ ->
            ( model, Cmd.none)

        ToggleInventory ->
            ( model, Cmd.none)

        ShowShareModal ->
            ( { model | shareModalVisibility = Modal.shown }, Cmd.none )

        HideShareModal ->
            ( { model | shareModalVisibility = Modal.hidden }, Cmd.none )


        ShowYesNoModal content ->
            ( { model | yesNoModalContent = Just content, yesNoModalVisibility = Modal.shown }, Cmd.none )


        ToggleHelpModal ->
            let 
                visibility =
                    if model.helpModalVisibility == Modal.shown then Modal.hidden
                    else Modal.shown
            in
            ( { model | helpModalVisibility = visibility }, Cmd.none )
            
            
        ToggleSummarizeViewHint visibility ->
            ( { model | summarizeViewHintVisibility = visibility }, Cmd.none )
            
            
        ToggleReturnSummarizeViewHint visibility ->
            ( { model | returnViewHintVisibility = visibility }, Cmd.none )


        ConfirmResetModal ->
            let
                updatedModel = { model | selectedCards = [], notSelectedCards = cards, yesNoModalContent = Nothing, yesNoModalVisibility = Modal.hidden }
                url = shareUrl updatedModel |> Url.toString
            in
            ( updatedModel, Nav.pushUrl model.navKey url )


        RejectResetModal ->
            ( { model | yesNoModalContent = Nothing, yesNoModalVisibility = Modal.hidden }, Cmd.none )
            
            
        ToggleCardDetails ->
            ( { model | showCardPoolDetails = not model.showCardPoolDetails }, Cmd.none )
                

        CopyShareUrl url ->
            ( model, copy url)

        CopyShareUrlResult result ->
            if result then
                ( { model | shareModalVisibility = Modal.hidden }, Cmd.none )
            else (model, Cmd.none)

        ChangeCardDisplayType display ->
            ( { model | cardDisplay = display }, Cmd.none )
            
        
        CardDisplayDropdownStateChanged state ->
            ( { model | cardDisplayDropdownState = state }, Cmd.none )
            

        ChangeInventoryDisplayType showReturnHint display ->
            let
                visibility = 
                    if showReturnHint then Alert.shown
                    else Alert.closed
            in                       
            ( { model | inventoryDisplay = display, returnViewHintVisibility = visibility, summarizeViewHintVisibility = Alert.closed }, Cmd.none )

        SelectCard id ->
            let
                card =
                    model.cardPool |> List.find (\c -> c.id == id)
            in
            case card of
                Just c ->
                    let
                        updatedModel =
                            { model
                            | selectedCards = c :: (model.selectedCards |> List.reverse) |> List.reverse
                            , notSelectedCards = model.notSelectedCards |> List.remove c
                            }

                        navUrl = updatedModel |> shareUrl |> Url.toString
                    in
                    (updatedModel, Nav.pushUrl model.navKey navUrl)

                Nothing ->
                    Debug.log "A message was sent for a card that could not be found."
                        ( model, Cmd.none )

        DeselectCard id ->
            let
                card =
                    model.selectedCards |> List.find (\c -> c.id == id)
            in
            case card of
                Just c ->
                    let
                        updatedModel =
                            { model
                            | selectedCards = model.selectedCards |> List.filter (\cc -> cc.id /= id)
                            , notSelectedCards = c :: model.notSelectedCards
                            }

                        navUrl = updatedModel |> shareUrl |> Url.toString
                    in
                    ( updatedModel, Nav.pushUrl model.navKey navUrl)

                Nothing ->
                    Debug.log "A message was sent for a card that could not be found."
                        ( model, Cmd.none )

        MoveCardDown id ->
            ( { model | selectedCards = model.selectedCards |> swapCardsBy (\c -> c.id == id) 1 }
            , Cmd.none
            )

        MoveCardUp id ->
            ( { model | selectedCards = model.selectedCards |> swapCardsBy (\c -> c.id == id) -1 }
            , Cmd.none
            )

        ResetCards ->
            let
                updatedModel = { model | selectedCards = [], notSelectedCards = cards }
                url = shareUrl updatedModel |> Url.toString
            in
            ( updatedModel, Nav.pushUrl model.navKey url )

        FilterChanged value ->
            if value |> String.isEmpty then
                ( { model | filter = Nothing }, Cmd.none )
            else
                ( { model | filter = Just value }, Cmd.none )

        ClearFilter ->
            ( { model | filter = Nothing }, Cmd.none )





-- View -------------------------------------------------------------------------------------


shareUrl : Model -> Url
shareUrl model =
    let
        hostUrl = model.hostUrl
        query = model.selectedCards
                |> List.map (\c -> c.id |> String.fromInt |> (String.padLeft 3 '0'))
                |> String.join ""
    in
    { hostUrl | query = Just ("deck=" ++ query) }


pointerClass : Attribute msg
pointerClass =
    Html.Attributes.class "pointer"


view : Model -> Browser.Document Msg
view model =
    { title = "Back 4 Blood Deck Builder"
    , body =
        [ Grid.containerFluid []
            (mainContent model)
        ]
    }


inventoryToggleButton : Int -> Html Msg
inventoryToggleButton numberOfSelectedCards =
    let 
        background =
            if numberOfSelectedCards <= 15 then
                "btn-light"
            else
                "btn-warning"
                
        content =
            div [ Flex.block, Flex.col ]
            [ FontAwesome.Solid.suitcase |> FontAwesome.Icon.present |> FontAwesome.Icon.styled [] |> FontAwesome.Icon.view
            , div [ class "small-text" ] [ text (numberOfSelectedCards |> String.fromInt) ]
            ]
    in
    Html.a [ id "inventory-toggle-button", class ("action-button-right action-button-1 btn d-flex d-md-none pointer " ++ background) ]
    [
        Html.h2 [ class "m-auto grey no-decoration fa-lg" ] [ content ] 
    ]

scrollToTopToggleButton : Html Msg
scrollToTopToggleButton =
    Html.a [ id "scroll-to-top-toggle-button", class "action-button-left action-button-1 btn btn-light d-none pointer" ]
    [
        Html.h2 [ class "m-auto grey no-decoration fa-lg" ] [ FontAwesome.Solid.arrowUp |> FontAwesome.Icon.viewIcon ]
    ]


shareModal : Model -> Html Msg
shareModal model =
    let
        modalShareUrl = model |> shareUrl |> Url.toString
    in
    Modal.config HideShareModal
    |> Modal.large
    |> Modal.hideOnBackdropClick True
    |> Modal.h3 [] [ text "Share build" ]
    |> Modal.body []
        [ Html.p []
            [ InputGroup.config
                ( InputGroup.text [ Input.attrs [ Html.Attributes.readonly True, value modalShareUrl ] ])
                |> InputGroup.successors
                    [ InputGroup.button [ Button.secondary, Button.small, Button.onClick (CopyShareUrl modalShareUrl) ] [ text "📋" ] ]
                |> InputGroup.view
            ]
        ]
    |> Modal.footer []
        [ Button.button
            [ Button.outlinePrimary
            , Button.attrs [ onClick HideShareModal ]
            ]
            [ text "Close" ]
        ]
    |> Modal.view model.shareModalVisibility


yesNoModal : Modal.Visibility -> YesNoModalContent -> Html Msg
yesNoModal visibility content =
    Modal.config content.noMsg
    |> Modal.small
    |> Modal.hideOnBackdropClick False
    |> Modal.h3 [] [ text content.header ]
    |> Modal.body []
        [ Html.p []
            [ text content.text
            ]
        ]
    |> Modal.footer []
        [ Button.button
            [ Button.outlineSuccess
            , Button.attrs [ onClick content.yesMsg ]
            ]
            [ text "Yes" ]
        , Button.button
            [ Button.outlineDanger
            , Button.attrs [ onClick content.noMsg ]
            ]
            [ text "No" ]
        ]
    |> Modal.view visibility
    
    
helpModal : Modal.Visibility -> Html Msg
helpModal visibility =
    Modal.config ToggleHelpModal
    |> Modal.large
    |> Modal.hideOnBackdropClick True
    |> Modal.h3 [] [ text "How to use" ]
    |> Modal.body [ style "overflow" "scroll", style "max-height" "calc(70vh)" ] 
       [ Html.h5 [] [ text "Card Pool" ]
       , div [] [ text "The card pool contains all cards except the ones you have currently selected."]
       , div [] [ text "You can use the filter to filter for arbitrary words. Only cards whose title or description contain all words (in any order) are displayed." ]
       , div [] [ text "To share your deck use the share dialog (see below) or copy the current url."]
       , div [] [ text "Use the x-button to clear the filter."]
       , div [] [ text "Next to the filter there are three buttons:" ]
       , div [ Flex.block, Flex.alignItemsCenter ] 
         [ div [ Spacing.mr2 ] [ FontAwesome.Solid.alignLeft |> FontAwesome.Icon.viewIcon ]
         , text "Displays cards in the pool as text."
         ]
       , div [ Flex.block, Flex.alignItemsCenter ] 
         [ div [ Spacing.mr2 ] [ FontAwesome.Solid.image |> FontAwesome.Icon.viewIcon ]
         , text "Displays cards in the pool as images."
         ]
       , div [ Flex.block, Flex.alignItemsCenter ] 
         [ div [ Spacing.mr2 ] [ FontAwesome.Solid.info |> FontAwesome.Icon.viewIcon ]
         , text "Displays card supply line details."
         ]
       , Html.h5 [ Spacing.mt3 ] [ text "Card Details"]
       , div [] [ text "The card details show you the name of the supply line in the top left."]
       , div [] [ text "Below that is the index of the card in the supply line. E.g. \"4/45\" means that this is the fourth card in a supply line with a total of 45 cards" ]
       , div [] [ text "The left hand side shows you the copper cost of the card in the top and the total cost to unlock the card (= buy all previous items in the supply line including cosmetics) in the bottom." ]
       , Html.h5 [ Spacing.mt3 ] [ text "Inventory" ]
       , div [] [ text "The inventory contains all cards you have selected. You may select more than 15 cards." ]
       , div [] [ text "You can arrange and remove cards by pressing the arrow up/down or x button." ]
       , div [] [ text "There are two ways to display the inventory:"]
       , div [ Flex.block, Flex.alignItemsStart, Spacing.mt1 ] 
         [ div [ Spacing.mr2 ] [ FontAwesome.Solid.layerGroup |> FontAwesome.Icon.viewIcon ]
         , text "Show each card individually."
         ]
       , div [ Flex.block, Flex.alignItemsStart, Spacing.mt1 ] 
         [ div [ Spacing.mr2 ] [ FontAwesome.Solid.list |> FontAwesome.Icon.viewIcon ]
         , text "Show a summarized view of the cards. All passive effects (like +X% health) are merged into single entries."
         , text "E.g. `+15% Health`, `-5% Health` and `+10% Health` only show as a single entry (`+20% Health)."
         , text "This view also summarizes the required supply line progress as well as required achievements." 
         ]
       , div [ Flex.block, Flex.alignItemsStart, Spacing.mt1 ] 
         [ div [ Spacing.mr2 ] [ FontAwesome.Solid.share |> FontAwesome.Icon.viewIcon ]
         , text "Opens the share dialog."
         ]
       , div [ Flex.block, Flex.alignItemsStart, Spacing.mt1 ] 
         [ div [ Spacing.mr2 ] [ FontAwesome.Solid.times |> FontAwesome.Icon.viewIcon ]
         , text "Clears the current inventory."
         ]
       ]
    |> Modal.footer []
        [ Button.button
            [ Button.outlinePrimary
            , Button.attrs [ onClick ToggleHelpModal ]
            ]
            [ text "Close" ]
        ]
    |> Modal.view visibility


mainContent : Model -> List (Html Msg)
mainContent model =
    let
        resetModal = model.yesNoModalContent
                     |> Maybe.map (\c -> yesNoModal model.yesNoModalVisibility c)
                     |> Maybe.withDefault (div [] [])
    in
    [ shareModal model
    , resetModal
    , helpModal model.helpModalVisibility
    , Grid.row [ ] [ cardPoolView model, inventoryView model ]
    , inventoryToggleButton (model.selectedCards |> List.length)
    , scrollToTopToggleButton
    ]


cardDisplayToggle : CardDisplay -> Html Msg
cardDisplayToggle cardDisplay =
    ButtonGroup.radioButtonGroup [ ButtonGroup.attrs [ class "d-none align-items-center d-md-flex", Spacing.ml3 ] ]
        [ ButtonGroup.radioButton
            (cardDisplay == Text)
            [ Button.secondary, Button.onClick <| (ChangeCardDisplayType Text) ]
            [ FontAwesome.Solid.alignLeft |> FontAwesome.Icon.viewIcon ]
        , ButtonGroup.radioButton
            (cardDisplay == Image)
            [ Button.secondary, Button.onClick <| (ChangeCardDisplayType Image) ]
            [ FontAwesome.Solid.image |> FontAwesome.Icon.viewIcon ]
        ]
        

dropDownCardDisplaySelector : Bool -> Dropdown.State -> CardDisplay -> Html Msg
dropDownCardDisplaySelector showDetails dropdownState cardDisplay =
    let
        icon = 
            case cardDisplay of
                Image -> FontAwesome.Solid.image |> FontAwesome.Icon.viewIcon
                Text  -> FontAwesome.Solid.alignLeft |> FontAwesome.Icon.viewIcon

        detailsButton =
            if showDetails then
                Dropdown.buttonItem [ onClick ToggleCardDetails ] [ text "Hide details" ]
            else
                Dropdown.buttonItem [ onClick ToggleCardDetails ] [ text "Show details" ]
    in
    div [ Spacing.mr3, Display.block, Display.noneMd ]
    [
      Dropdown.dropdown
        dropdownState
        { options = []
        , toggleMsg = CardDisplayDropdownStateChanged
        , toggleButton = 
              Dropdown.toggle [ Button.secondary ] [ icon ]
        , items =
          [ Dropdown.buttonItem [ onClick (ChangeCardDisplayType Image) ] [ text "Image" ]
          , Dropdown.buttonItem [ onClick (ChangeCardDisplayType Text) ] [ text "Text" ]
          , Dropdown.customItem (div [ class "dropdown-divider" ] [])
          , detailsButton
          ]
        }
    ]
      

inventoryStyleToggle : InventoryDisplay -> String -> Html Msg
inventoryStyleToggle inventoryDisplay extraClasses =
    ButtonGroup.radioButtonGroup [ ButtonGroup.small, ButtonGroup.attrs [ class ("d-flex align-items-center " ++ extraClasses), Spacing.ml3 ] ]
        [ ButtonGroup.radioButton
            (inventoryDisplay == InventoryAsCards)
            [ Button.secondary, Button.onClick <| (ChangeInventoryDisplayType False InventoryAsCards) ]
            [ FontAwesome.Solid.layerGroup |> FontAwesome.Icon.viewIcon ]
        , ButtonGroup.radioButton
            (inventoryDisplay == InventoryAsSummary)
            [ Button.secondary, Button.onClick <| (ChangeInventoryDisplayType False InventoryAsSummary) ]
            [ FontAwesome.Solid.list |> FontAwesome.Icon.viewIcon ]
        ]


filterWithClearButton : String -> Html Msg
filterWithClearButton currentFilter =
    div [ class "w-100" ]
    [ InputGroup.config
        ( InputGroup.text [ Input.attrs [ placeholder "Filter", onInput FilterChanged, value currentFilter ] ] )
        |> InputGroup.successors
            [ InputGroup.button [ Button.secondary, Button.attrs [ onClick ClearFilter ] ] [ FontAwesome.Solid.times |> FontAwesome.Icon.viewIcon] ]
        |> InputGroup.view
    ]


cardPoolView : Model -> Grid.Column Msg
cardPoolView model =
    let
        helpButton =
            Button.button [ Button.secondary, Button.attrs [ onClick ToggleHelpModal, Spacing.ml3 ] ] [ FontAwesome.Solid.question |> FontAwesome.Icon.viewIcon ]
            
        showCardDetailsToggle = 
            ButtonGroup.checkboxButtonGroup [ ButtonGroup.small, ButtonGroup.attrs [ Display.none, Flex.blockMd, Spacing.ml3, style "min-width" "2em" ] ]
            [ ButtonGroup.checkboxButton model.showCardPoolDetails [ Button.secondary, Button.small, Button.onClick ToggleCardDetails ] [ FontAwesome.Solid.info |> FontAwesome.Icon.viewIcon ]
            ]
            
        -- cardDisplay is used for large screens where every button can be displayed
        largeCardDisplaySelector =
            cardDisplayToggle model.cardDisplay
            
        -- dropDownDisplay is used for phone screens
        dropDownDisplaySelector =
            dropDownCardDisplaySelector model.showCardPoolDetails model.cardDisplayDropdownState model.cardDisplay
            
    in
    Grid.col [ Col.xs12, Col.md6, Col.lg8, Col.attrs [ id "left-column", class "overflow-scroll content-column" ] ]
        [ div [ class "top-bar" ]
            [ div [ class "top-bar-spoiler" ] [ ]
            , div [ Border.rounded, class "d-flex justify-content-between pr-1 pl-1 pt-1 pb-1 bg-dark shadow "]
                [ dropDownDisplaySelector
                , filterWithClearButton (model.filter |> Maybe.withDefault "")
                , largeCardDisplaySelector
                , showCardDetailsToggle
                , helpButton
                ]
            ]
        , Grid.row [ Row.attrs [ style "margin-top" "0.5em" ] ]
            (model.notSelectedCards |> (filteredCards model.filter) |> List.map (fullCardView model.showCardPoolDetails model.cardDisplay))
        ]


inventoryView : Model -> Grid.Column Msg
inventoryView model =
    let numberOfSelectedCards = model.selectedCards |> List.length
        border = if numberOfSelectedCards <= maxDeckSize then Border.dark else Border.warning
    in
    Grid.col [ Col.xs12, Col.md6, Col.lg4, Col.attrs [ id "right-column", class "overflow-scroll content-column" ] ]
        [ div [ class "bg-dark mt-2 mb-2 shadow rounded border", border]
            [ inventoryHeaderView numberOfSelectedCards model.inventoryDisplay
            , Grid.row []
                (inventoryContentView model)
            ]
        ]


inventoryHeaderView : Int -> InventoryDisplay -> Html Msg
inventoryHeaderView numberOfSelectedCards display =
    let
        selectionCountString = "(" ++ (numberOfSelectedCards |> String.fromInt) ++ "/" ++ (maxDeckSize |> String.fromInt) ++ ")"
        textColor = if numberOfSelectedCards <= maxDeckSize then class "" else class "text-warning"
        yesNoContent = { header = "Reset", text = "Clear the currently selected cards?", yesMsg = ConfirmResetModal, noMsg = RejectResetModal }
        styleSelector = inventoryStyleToggle display
        buttons = div [ class "d-flex"]
                    [ styleSelector "mr-3"
                    , Button.button [ Button.secondary, Button.small, Button.onClick ShowShareModal ] [FontAwesome.Solid.share |> FontAwesome.Icon.viewIcon]
                    , Button.button [ Button.warning, Button.small, Button.onClick (ShowYesNoModal yesNoContent), Button.attrs [ Spacing.ml3 ] ] [FontAwesome.Solid.times |> FontAwesome.Icon.viewIcon]
                    ]
        spacing =
            case display of
                InventoryAsCards -> Spacing.ml2
                InventoryAsSummary -> Spacing.ml4
    in
    Grid.row [ Row.attrs [ class "pr-1 pt-1 pb-1" ] ]
        [ Grid.col [ Col.xs12, Col.attrs [ class "d-flex justify-content-between align-items-center" ] ]
            [ Html.h5 [ spacing, Spacing.mb0, textColor ] [ text (selectionCountString) ]
            , div [ Spacing.m2, textColor ] [ buttons ]
        ] ]


inventoryContentView : Model -> List (Grid.Column Msg)
inventoryContentView model =
    let
        summaryAlertContent =
            [ text "Click the list icon above to switch to "
            , Html.a [ class "success-alert-link", href "#", onClick (ChangeInventoryDisplayType True InventoryAsSummary) ] [ text "summarized view" ]
            , text "."
            ]
            
        returnAlertContent =
            [ text "Return to "
            , Html.a [ class "success-alert-link", href "#", onClick (ChangeInventoryDisplayType False InventoryAsCards) ] [ text "previous view" ]
            , text "."
            ]
            
        alert toggle visibility children =
            if visibility == Alert.closed then
                Grid.col [ Col.attrs [ Display.none ] ] []
            else
                Grid.col []
                [ div [ Spacing.ml2, Spacing.mr2, Spacing.mt2 ]
                  [ Alert.config
                    |> Alert.success
                    |> Alert.dismissableWithAnimation toggle
                    |> Alert.children children
                    |> Alert.view visibility
                  ]
                ]
            
        emptyDeckHint =
            [ Grid.col [ Col.xs12 ] [ div [ Spacing.mb3, class "italic text-center"] [ text "no cards selected" ] ] ]
            
        asCardsView cards =
            if cards |> List.isEmpty then emptyDeckHint
            else cards |> List.indexedMap (\i c -> summaryCardView (Just (i + 1)) c)
            
        asSummaryView cards =
            if cards |> List.isEmpty then emptyDeckHint
            else [ inventorySummaryView model.selectedCards, inventoryProgressView model.selectedCards ]
    in
    case model.inventoryDisplay of
        InventoryAsCards ->
            (alert ToggleSummarizeViewHint model.summarizeViewHintVisibility summaryAlertContent)
            :: (model.selectedCards |> asCardsView)
        InventoryAsSummary ->
            (alert ToggleReturnSummarizeViewHint model.returnViewHintVisibility returnAlertContent)
            :: (model.selectedCards |> asSummaryView)


cardBackgroundColor : Card -> Card.Option msg
cardBackgroundColor card =
    case card.kind of
        UnknownKind ->
            Card.dark

        Mobility ->
            Card.primary

        Utility ->
            Card.danger

        Defense ->
            Card.success

        Offense ->
            Card.warning


buttonBackgroundColor : Card -> Option msg
buttonBackgroundColor card =
    case card.kind of
        UnknownKind ->
            Button.dark

        Mobility ->
            Button.primary

        Utility ->
            Button.danger

        Defense ->
            Button.success

        Offense ->
            Button.warning


cardOutlineColor : Card -> Card.Option msg
cardOutlineColor card =
    case card.kind of
        UnknownKind ->
            Card.outlineDark

        Mobility ->
            Card.outlinePrimary

        Utility ->
            Card.outlineDanger

        Defense ->
            Card.outlineSuccess

        Offense ->
            Card.outlineWarning


bgDark : Attribute msg
bgDark =
    Html.Attributes.class "bg-dark"


bgPrimary : Attribute msg
bgPrimary =
    Html.Attributes.class "bg-primary"


bgDanger : Attribute msg
bgDanger =
    Html.Attributes.class "bg-danger"


bgSuccess : Attribute msg
bgSuccess =
    Html.Attributes.class "bg-success"


bgWarning : Attribute msg
bgWarning =
    Html.Attributes.class "bg-warning"


htmlBackgroundColor : Card -> Attribute msg
htmlBackgroundColor card =
    case card.kind of
        UnknownKind ->
            Html.Attributes.class "bg-dark"

        Mobility ->
            Html.Attributes.class "bg-primary"

        Utility ->
            Html.Attributes.class "bg-danger"

        Defense ->
            Html.Attributes.class "bg-success"

        Offense ->
            Html.Attributes.class "bg-warning"


fullCardView :  Bool -> CardDisplay -> Card ->Grid.Column Msg
fullCardView showCardDetails cardDisplay card =
    case cardDisplay of
        Image ->
            fullCardViewWithImage showCardDetails card
        Text ->
            fullCardViewWithText showCardDetails card


fullCardViewDetailsBlock card =
    let
        singleCostText =
            card.cost |> String.fromInt
            
        totalCostText =
            "Σ " ++ (card.totalCost |> String.fromInt) 
        
        costDiv =
            if card |> Cards.isAccomplishmentLine then
                div [ style "font-size" "2em" ] [ text "🏆" ] 
            else if card |> Cards.isRovingMerchantLine then
                div [ style "font-size" "2em" ] [ text "🏬" ] 
            else if card |> Cards.isStripLine then
                div [ style "font-size" "2em" ] [ text "🎞" ] 
            else if card |> Cards.isStarterLine then
                div [ style "font-size" "2em" ] [ text "🏲" ] 
            else
                div [ Flex.block, Flex.col ]
                [ div [ Flex.block, Flex.alignItemsCenter ] 
                  [ Html.img [ src "img/cost.png", style "width" "1em", style "height" "1em" ] [] 
                  , div [ ] [ text singleCostText ]
                  ]
                , div [] [ text totalCostText ]
                ]
                
                
        numberOfCards =
            case card.supplyLine.name of
                Cards.Nest _ -> Cards.nestSupplyLineCount
                Cards.Alley _ -> Cards.alleySupplyLineCount
                Cards.Clinic _ -> Cards.clinicSupplyLineCount
                _ -> -1
        
        
        achievementRequirement =
            if card |> Cards.isAccomplishmentLine then
                AchievementData.achievements 
                |> List.find (\a -> a.card == card.title)
                |> Maybe.map (\a -> a.requirement)
                |> Maybe.withDefault ""
            else
                ""
                
        
        nameDiv =
            div [ Flex.block, Flex.col ]
            [ div [ class "font-weight-semi-bold card-details-achievement-field" ] [ text (card.supplyLine.name |> Cards.supplyTrackToString) ]
            , ( if (card |> Cards.isAccomplishmentLine) then
                    div [ class "card-details-achievement-field" ] [ text achievementRequirement ]
                  else if (card |> Cards.isStarterLine) || (card |> Cards.isStripLine) then
                    div [] [ Html.i [] [ text "always unlocked" ] ]
                  else if (card |> Cards.isRovingMerchantLine) then
                    div [] [ Html.i [] [ text "randomly available" ] ]
                  else
                    div [] [ text ((card.supplyLine.index |> String.fromInt) ++ " of " ++ (numberOfCards |> String.fromInt) ) ]
              )
            ]
                
    in
    Block.custom
      ( div [ Spacing.mt3, class "card-details-block" ]
        [ Html.node "hr" [] []
        , div [ Flex.block, Flex.justifyBetween, Spacing.mb2, Spacing.mb0Sm ]
          [ nameDiv
          , costDiv
          ]
        ]
      )


fullCardViewWithImage : Bool -> Card -> Grid.Column Msg
fullCardViewWithImage showDetails card =
    let
        buttonBackground =
            Button.secondary
        details = 
            if showDetails then
                fullCardViewDetailsBlock card
            else
                Block.custom (div [] [])
    in
    Grid.col []
        [ Card.config [ Card.attrs [  Spacing.mt3 ] ]
            |> Card.block [ Block.attrs [ ] ]
                [ Block.custom
                    ( div [ class "d-flex justify-content-center bg-black" ] 
                    [ Html.a [ href "#", class "img-shadow"] [ img [ src ("img/english/" ++ card.filename), style "width" "248px", style "height" "376px" ] [] ]
                    ]
                    )
                , details
                ]
            |> Card.footer []
                [ Button.button [ buttonBackground, Button.attrs [ Size.w100, onClick (SelectCard card.id) ] ] [ text "Select" ]
                ]
            |> Card.view
        ]


fullCardViewWithText : Bool -> Card -> Grid.Column Msg
fullCardViewWithText showDetails card =
    let
        buttonBackground =
            Button.secondary
        details = 
            if showDetails then
                fullCardViewDetailsBlock card
            else
                Block.custom (div [] [])
    in
    Grid.col [ ]
        [ Card.config [ Card.attrs [ class "full-size-card-text", Spacing.mt3 ] ]
            |> Card.header [ class "text-center" ]
                [ Html.h6 [ class "card-text-header mb-0" ] [ text card.title ]
                ]
            |> Card.block [  Block.attrs [ class "full-size-card-body" ] ]
                [ Block.custom
                    (Html.ul [ class "text-card-list", Spacing.pl3, Spacing.pr0 ]
                        (card.properties |> List.map (\property -> div [] [ Html.li [] [ Html.small [] [ text property.description ] ] ]))
                    )
                  , details
                ]
            |> Card.footer [ Spacing.mt2 ]
                [ Button.button [ buttonBackground, Button.small, Button.attrs [ Size.w100, onClick (SelectCard card.id) ] ] [ text "Select" ]
                ]
            |> Card.view
        ]


inventorySummaryView : List Card -> (Grid.Column Msg)
inventorySummaryView cards =
    let
        mergedProperties = 
            cards 
            |> List.map (\c -> c.properties) 
            |> List.concat
            |> Cards.groupProperties
        hasPassives = mergedProperties.passives |> (not << List.isEmpty)
        hasRemaining = mergedProperties.remaining |> (not << List.isEmpty)
        hasTeam = mergedProperties.team |> (not << List.isEmpty)
        hasDisables = mergedProperties.disables |> (not << List.isEmpty)
        orEmptyElement hasElement element = if hasElement then element else div [] []
        cardWithListContentAndHeader : String -> List String -> Html Msg
        cardWithListContentAndHeader header items =
            Card.config []
            |> Card.header [] [ text header ]
            |> Card.block []
                [ Block.custom (Html.ul [] (items |> List.map (\i -> Html.li [] [ text i ])))
                ]
            |> Card.view
    in
    Grid.col [ Col.xs12 ]
      [ (cardWithListContentAndHeader "Passive Effects" mergedProperties.passives) |> orEmptyElement hasPassives
      , (cardWithListContentAndHeader "Other Effects" mergedProperties.remaining) |> orEmptyElement hasRemaining
      , (cardWithListContentAndHeader "Team Effects" mergedProperties.team) |> orEmptyElement hasTeam
      , (cardWithListContentAndHeader "Disables" mergedProperties.disables) |> orEmptyElement hasDisables
      ]
    
    
inventoryProgressView : List Card -> (Grid.Column Msg)
inventoryProgressView cards =
    let
        requirements = 
            case cards of
                head :: tail -> Cards.supplyLineRequirements (head, tail)
                [] -> Cards.emptySupplyLineRequirements

        progressBar : Cards.SupplyLineRequirement -> Progress.Option Msg -> String -> Html Msg
        progressBar supplyLineRequirement color label =
            let 
                a = supplyLineRequirement.requiredProgress * 100 |> toFloat
                b = supplyLineRequirement.totalElements |> toFloat
                c = a / b
                completeLabel = 
                    label 
                    ++ " (" 
                    ++ (supplyLineRequirement.requiredProgress |> String.fromInt)
                    ++ "/"
                    ++ (supplyLineRequirement.totalElements |> String.fromInt)
                    ++ ")"
            in
            Html.p [ Spacing.ml4, Spacing.mr4, Flex.block, Flex.alignItemsStart, Flex.alignItemsCenter  ] 
            [ Html.small [] [ div [style "width" "7em" ] [ text completeLabel ] ]
            , Progress.progress [ color, Progress.value c, Progress.wrapperAttrs [ class "bg-secondary", style "flex-grow" "1" ] ]
            ]
            
        progressCard header progressBars =
            Card.config [ Card.attrs [ class "inventory-summary-sub-card col-12", style "padding-left" "0", style "padding-right" "0" ] ]
            |> Card.header [ class "inventory-summary-sub-card-header bg-transparent" ] [ Html.small [] [ text header ] ]
            |> Card.block [ Block.attrs [ class "inventory-summary-sub-card-body" ] ]
               [ Block.custom (div [ style "padding-top" "1rem" ] progressBars)
               ]
            |> Card.view
            

        achievementList =
            let
                createLi requirement =
                    Html.li [ ] 
                    [ div [ Flex.block, Flex.col ]
                      [ div [] [ text requirement.name ]
                      , Html.small [] [ text requirement.requirement ]
                      ]
                    ]
            in
            if requirements.achievementRequirement |> List.isEmpty then
                div [] []
            else
                div [ class "col-xs-12 col-xl-6 pl-0 pr-0 pr-xl-1"]
                [ Card.config [ Card.attrs [ class "inventory-summary-sub-card"] ]
                  |> Card.header [ class "inventory-summary-sub-card-header bg-transparent" ] [ Html.small [] [ text "Achievements" ] ]
                  |> Card.block [ Block.attrs [ class "inventory-summary-sub-card-body" ] ]
                     [ Block.custom (Html.ul [ class "inventory-summary-sub-card-list pl-xl-3" ] (requirements.achievementRequirement |> List.map createLi))
                     ]
                  |> Card.view
                ]
                
                
        rovingMerchantsList =
            if requirements.rovingMerchantsRequirement |> List.isEmpty then
                div [] []
            else
                div [ class "col-xs-12 col-xl-6 pl-0 pl-xl-1 pr-0"]
                [ Card.config [ Card.attrs [ class "inventory-summary-sub-card"] ]
                  |> Card.header [ class "inventory-summary-sub-card-header bg-transparent" ] [ Html.small [] [ text "Roving Merchants" ] ]
                  |> Card.block [ Block.attrs [ class "inventory-summary-sub-card-body" ] ]
                     [ Block.custom (Html.ul [ class "inventory-summary-sub-card-list pl-xl-3" ] (requirements.rovingMerchantsRequirement |> List.map (\a -> Html.li [] [ text a ])))
                     ]
                  |> Card.view
                ]


        regularLines = 
            progressCard 
                "Supply Lines"
                [ progressBar requirements.nestRequirement Progress.success "Nest"
                , progressBar requirements.alleyRequirement Progress.info "Alley"
                , progressBar requirements.clinicRequirement Progress.danger "Clinic" ]
    in
    Grid.col [ Col.xs12 ]
    [ Card.config []
      |> Card.header [] [ text "Deck Requirements" ]
      |> Card.block [ Block.attrs [ class "inventory-summary-requirements-card-body" ] ]
         [ Block.custom (div [ class "row", style "margin" "0" ] [ regularLines, achievementList, rovingMerchantsList ])
         ]
      |> Card.view
    ]


{-| Creates a simple card view with a summary of all properties.
-}
summaryCardView : Maybe Int -> Card -> Grid.Column Msg
summaryCardView optionalIndex card =
    let
        index =
            case optionalIndex of
                Just i -> (i |> String.fromInt) ++ ". "
                Nothing -> ""
    in
    Grid.col [ Col.xs12 ]
        [ Card.config [ Card.outlineSecondary, Card.attrs [ Spacing.m2 ] ]
            |> Card.block [ Block.attrs [ Spacing.pt1, Spacing.pb1 ] ]
                [ Block.text [ Flex.block, Flex.justifyBetween ]
                    [ div [] [ text (index ++ card.title) ]
                    , div [ class "unselectable" ]
                        [ Html.a [ onClick (MoveCardUp card.id), pointerClass, class "pl-2 pr-2" ] [ text "↑" ]
                        , Html.a [ onClick (MoveCardDown card.id), pointerClass, class "pl-2 pr-2 ml-2" ] [ text "↓" ]
                        , Html.a [ onClick (DeselectCard card.id), pointerClass, class "pl-2 pr-0 ml-2 mr-0" ] [ text "✕" ]
                        ]
                    ]
                ]
            |> Card.footer [ Spacing.pt1, Spacing.pb1 ]
                [ Html.ul [ Spacing.pl3, Spacing.pr0 ]
                    (card.properties |> List.map (\property -> div [] [ Html.li [] [ Html.small [] [ text property.description ] ] ]))
                ]
            |> Card.view
        ]
