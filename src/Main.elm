port module Main exposing (..)

import Bootstrap.Button as Button exposing (Option)
import Bootstrap.ButtonGroup as ButtonGroup
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Modal as Modal
import Bootstrap.Navbar as Navbar
import Bootstrap.Text as Text
import Bootstrap.Utilities.Border as Border
import Bootstrap.Utilities.Display as Display
import Bootstrap.Form.Input as Input
import Bootstrap.Utilities.Flex as Flex
import Bootstrap.Utilities.Size as Size
import Bootstrap.Utilities.Spacing as Spacing
import Bootstrap.Form.InputGroup as InputGroup
import Browser
import Cards exposing (Card, CardId, Kind(..))
import CardData exposing (cards)
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
import Task
import Url exposing (Url)
import Browser exposing (UrlRequest)
import Url.Parser.Query as Query
import String.Extra as String
import String.Extras as String
import Url.Parser exposing (Parser)
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
    {}


type CardDisplay
    = TextAndImage
    | Text
    | Image

type alias Model =
    { navbarState : Navbar.State
    , cardDisplay : CardDisplay
    , shareModalVisibility: Modal.Visibility
    , yesNoModalVisibility: Modal.Visibility
    , yesNoModalContent: Maybe YesNoModalContent
    , hostUrl: Url
    , navKey: Key
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
init _ url key =
    let
        ( navbarState, navbarCmd ) =
            Navbar.initialState NavbarMsg

        cardIdsFromQuery =
            url
            |> tryDeckQueryArgument
            |> Maybe.andThen parseCardIds
            |> Maybe.map List.unique
            |> Maybe.withDefault []

        (notSelected, selected) =
            List.splitBy (\c ->  cardIdsFromQuery |> List.any (\cardId -> c.id == cardId)) cards

        hostUrl =
            { url | query = Nothing, fragment = Nothing }
    in
    ( { cardPool = cards
      , cardDisplay = Image
      , selectedCards = selected
      , notSelectedCards = notSelected
      , filter = Nothing
      , shareModalVisibility = Modal.hidden
      , yesNoModalVisibility = Modal.hidden
      , yesNoModalContent = Nothing
      , hostUrl = hostUrl
      , navKey = key
      , navbarState = navbarState }
    , navbarCmd )


type alias YesNoModalContent =
    { header: String
    , text: String
    , yesMsg: Msg
    , noMsg: Msg
    }


type Msg
    = NavbarMsg Navbar.State
    | UrlChanged Url
    | LinkClicked UrlRequest
    | ShowShareModal
    | HideShareModal
    | ToggleInventory
    | CopyShareUrl String
    | CopyShareUrlResult Bool
    | ChangeCardDisplayType CardDisplay
    | ShowYesNoModal YesNoModalContent
    | ConfirmResetModal
    | RejectResetModal
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
    [ Navbar.subscriptions model.navbarState NavbarMsg
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
        NavbarMsg state ->
            ( { model | navbarState = state }, Cmd.none )

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


        ConfirmResetModal ->
            let
                updatedModel = { model | selectedCards = [], notSelectedCards = cards, yesNoModalContent = Nothing, yesNoModalVisibility = Modal.hidden }
                url = shareUrl updatedModel |> Url.toString
            in
            ( updatedModel, Nav.pushUrl model.navKey url )


        RejectResetModal ->
            ( { model | yesNoModalContent = Nothing, yesNoModalVisibility = Modal.hidden }, Cmd.none)

        CopyShareUrl url ->
            ( model, copy url)

        CopyShareUrlResult result ->
            if result then
                ( { model | shareModalVisibility = Modal.hidden }, Cmd.none)
            else (model, Cmd.none)

        ChangeCardDisplayType display ->
            ( { model | cardDisplay = display }, Cmd.none)

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
                            | selectedCards = c :: model.selectedCards
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


inventoryToggleButton : Html Msg
inventoryToggleButton =
    Html.a [ id "inventory-toggle-button", class "action-button btn btn-light d-flex d-md-none pointer" ]
    [
        Html.h2 [ class "m-auto grey no-decoration" ] [ text "🎒" ]
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


mainContent : Model -> List (Html Msg)
mainContent model =
    let
        resetModal = model.yesNoModalContent
                     |> Maybe.map (\c -> yesNoModal model.yesNoModalVisibility c)
                     |> Maybe.withDefault (div [] [])
    in
    [ shareModal model
    , resetModal
    , Grid.row [ ] [ cardPoolView model, inventoryView model ]
    , inventoryToggleButton
    ]


cardDisplayToggle : CardDisplay -> Html Msg
cardDisplayToggle cardDisplay =
    ButtonGroup.radioButtonGroup [ ButtonGroup.small, ButtonGroup.attrs [ class "d-flex align-items-center", Spacing.ml3 ] ]
        [ ButtonGroup.radioButton
            (cardDisplay == Text)
            [ Button.secondary, Button.onClick <| (ChangeCardDisplayType Text) ]
            [ FontAwesome.Solid.alignLeft |> FontAwesome.Icon.viewIcon ]
        , ButtonGroup.radioButton
            (cardDisplay == TextAndImage)
            [ Button.secondary, Button.onClick <| (ChangeCardDisplayType TextAndImage) ]
            [ FontAwesome.Solid.idCard |> FontAwesome.Icon.viewIcon ]
        , ButtonGroup.radioButton
            (cardDisplay == Image)
            [ Button.secondary, Button.onClick <| (ChangeCardDisplayType Image) ]
            [ FontAwesome.Solid.image |> FontAwesome.Icon.viewIcon ]
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
    Grid.col [ Col.xs12, Col.md8, Col.attrs [ id "left-column", class "overflow-scroll content-column" ] ]
        [ Grid.row []
            [ Grid.col [ Col.xs12 ]
                [ div [ Border.rounded, Spacing.mt2, class "d-flex justify-content-between pr-1 pl-1 pt-1 pb-1 bg-dark shadow "]
                    [ filterWithClearButton (model.filter |> Maybe.withDefault "")
                    , cardDisplayToggle model.cardDisplay
                    ]
                ]
            ]
        , Grid.row []
            (model.notSelectedCards |> (filteredCards model.filter) |> List.map (fullCardView model.cardDisplay))
        ]


inventoryView : Model -> Grid.Column Msg
inventoryView model =
    let numberOfSelectedCards = model.selectedCards |> List.length
        selectionCountString = "(" ++ (numberOfSelectedCards |> String.fromInt) ++ "/" ++ (maxDeckSize |> String.fromInt) ++ ")"
        border = if numberOfSelectedCards <= maxDeckSize then Border.dark else Border.warning
        textColor = if numberOfSelectedCards <= maxDeckSize then class "" else class "text-warning"
        yesNoContent = { header = "Reset", text = "Clear the currently selected cards?", yesMsg = ConfirmResetModal, noMsg = RejectResetModal }
        buttons = div []
                    [ Button.button [ Button.secondary, Button.onClick ShowShareModal ] [FontAwesome.Solid.share |> FontAwesome.Icon.viewIcon]
                    , Button.button [ Button.warning, Button.onClick (ShowYesNoModal yesNoContent), Button.attrs [ Spacing.ml3 ] ] [FontAwesome.Solid.times |> FontAwesome.Icon.viewIcon]
                    ]
    in
    Grid.col [ Col.xs12, Col.md4, Col.attrs [ id "right-column", class "overflow-scroll content-column" ] ]
        [ div [ class "bg-dark m-2 shadow rounded border", border]
            [ Grid.row [ Row.attrs [ class "pr-1 pt-1 pb-1" ] ]
                [ Grid.col [ Col.xs12, Col.attrs [ class "d-flex justify-content-between" ] ] 
                    [ Html.h5 [ Spacing.m2, textColor ] [ text ("Selection " ++ selectionCountString) ]
                    , div [ Spacing.m2, textColor ] [ buttons ]
                    ] ]
            , Grid.row []
                (model.selectedCards |> List.map summaryCardView)
            ]
        ]


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


fullCardView :  CardDisplay -> Card ->Grid.Column Msg
fullCardView cardDisplay card =
    case cardDisplay of
        TextAndImage ->
            fullCardViewWithTextAndImage card
        Image ->
            fullCardViewWithImage card
        Text ->
            fullCardViewWithText card


fullCardViewWithTextAndImage : Card -> Grid.Column Msg
fullCardViewWithTextAndImage card =
    let
        cardBackground =
            card |> cardOutlineColor

        buttonBackground =
            Button.secondary
    in
    Grid.col []
        [ Card.config [ cardBackground, Card.attrs [ style "width" "16rem", style "height" "605px", Spacing.m2 ] ]
            |> Card.header [ class "text-center" ]
                [ img [ src ("img/english/" ++ card.filename), style "max-width" "200px" ] []
                ]
            |> Card.block []
                [ Block.titleH5 [] [ text card.title ]
                , Block.custom
                    (Html.ul [ Spacing.pl3, Spacing.pr0 ]
                        (card.properties |> List.map (\property -> div [] [ Html.li [] [ Html.small [] [ text property.description ] ] ]))
                    )
                ]
            |> Card.footer []
                [ Button.button [ buttonBackground, Button.attrs [ Size.w100, onClick (SelectCard card.id) ] ] [ text "Select" ]
                ]
            |> Card.view
        ]


fullCardViewWithImage : Card -> Grid.Column Msg
fullCardViewWithImage card =
    let
        cardBackground =
            card |> cardOutlineColor

        buttonBackground =
            Button.secondary
    in
    Grid.col []
        [ Card.config [ cardBackground , Card.attrs [  Spacing.m2, style "max-width" "240px" ] ]
            |> Card.block [ Block.attrs [ class "d-flex justify-content-center" ] ]
                [ Block.custom
                    (img [ src ("img/english/" ++ card.filename), style "max-width" "200px" ] [])
                ]
            |> Card.footer []
                [ Button.button [ buttonBackground, Button.attrs [ Size.w100, onClick (SelectCard card.id) ] ] [ text "Select" ]
                ]
            |> Card.view
        ]


fullCardViewWithText : Card -> Grid.Column Msg
fullCardViewWithText card =
    let
        cardBackground =
            card |> cardOutlineColor

        buttonBackground =
            Button.secondary
    in
    Grid.col []
        [ Card.config [ cardBackground, Card.attrs [ Spacing.m2, style "width" "15em" ] ]
            |> Card.header [ class "text-center" ]
                [ Html.h6 [ class "card-text-header mb-0"] [ text card.title ]
                ]
            |> Card.block [ Block.attrs [ style "height" "12em" ] ]
                [ Block.custom
                    (Html.ul [ Spacing.pl3, Spacing.pr0 ]
                        (card.properties |> List.map (\property -> div [] [ Html.li [] [ Html.small [] [ text property.description ] ] ]))
                    )
                ]
            |> Card.footer []
                [ Button.button [ buttonBackground, Button.attrs [ Size.w100, onClick (SelectCard card.id) ] ] [ text "Select" ]
                ]
            |> Card.view
        ]



summaryCardView : Card -> Grid.Column Msg
summaryCardView card =
    let
        background =
            card |> cardOutlineColor
    in
    Grid.col [ Col.xs12 ]
        [ Card.config [ background, Card.attrs [ Spacing.m2 ] ]
            |> Card.block [ Block.attrs [ Spacing.pt1, Spacing.pb1 ] ]
                [ Block.text [ Flex.block, Flex.justifyBetween ]
                    [ div [] [ text card.title ]
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
