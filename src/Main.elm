module Main exposing (..)

import Bootstrap.Button as Button exposing (Option)
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
import Html exposing (Attribute, Html, div, img, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import List.Extra as List
import List.Extras as List
import List.FlatMap as List
import Bootstrap.Text exposing (Color)
import Bootstrap.Grid.Row
import Browser.Navigation as Nav exposing (Key)
import Maybe.Extra as Maybe
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


-- Model -------------------------------------------------------------------------------------


type alias Flags =
    {}


type alias Model =
    { navbarState : Navbar.State
    , viewCardImages: Bool
    , viewCardText: Bool
    , shareModalVisibility: Modal.Visibility
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
    |> List.map String.toInt |> Maybe.combine


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
    let _ = Debug.log "tryDeckQueryArgument - url" url
    in
    case (Url.Parser.parse (Url.Parser.query (Query.string "deck")) url) of
        Just v -> 
            let _ = Debug.log "tryDeckQueryArgument - url - Just v" url
            in
            case v of
                Just vv ->
                    let
                        lengthMismatchMessage =
                            "The given value for the \"deck\" query parameter is invalid. Needs to be multiple of "
                    in
                    if vv |> String.isEmpty then Nothing
                    else if (vv |> String.length |> modBy cardIdLength) /= 0 then
                        let _ = Debug.log lengthMismatchMessage (cardIdLength |> String.fromInt)
                        in
                        Nothing
                    else Just vv
                Nothing ->
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
      , viewCardImages = True
      , viewCardText = True
      , selectedCards = selected
      , notSelectedCards = notSelected
      , filter = Nothing
      , shareModalVisibility = Modal.hidden
      , hostUrl = hostUrl
      , navKey = key
      , navbarState = navbarState }
    , navbarCmd )


type Msg
    = NavbarMsg Navbar.State
    | UrlChanged Url
    | LinkClicked UrlRequest
    | ShowShareModal
    | HideShareModal
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
    Navbar.subscriptions model.navbarState NavbarMsg


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

        ShowShareModal ->
            ( { model | shareModalVisibility = Modal.shown }, Cmd.none )

        HideShareModal ->
            ( { model | shareModalVisibility = Modal.hidden }, Cmd.none )

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


header : Model -> Html Msg
header model =
    Navbar.config NavbarMsg
        |> Navbar.withAnimation
        |> Navbar.brand [ href "#" ] [ text "Deck Builder" ]
        |> Navbar.dark
        |> Navbar.items
            [ Navbar.itemLink [ href "#", onClick ResetCards ] [ text "Reset" ]
            , Navbar.itemLink [ href "#", onClick ShowShareModal ] [ text "Share" ]
            ]
        |> Navbar.view model.navbarState


shareModal : Model -> Html Msg
shareModal model =
    let
        modalShareUrl = model |> shareUrl |> Url.toString
    in
    Modal.config HideShareModal
    |> Modal.small
    |> Modal.hideOnBackdropClick True
    |> Modal.h3 [] [ text "Share build" ]
    |> Modal.body [] [ Html.p [] [ Html.a [] [ text modalShareUrl ] ] ]
    |> Modal.footer []
        [ Button.button
            [ Button.outlinePrimary
            , Button.attrs [ onClick HideShareModal ]
            ]
            [ text "Close" ]
        ]
    |> Modal.view model.shareModalVisibility

mainContent : Model -> List (Html Msg)
mainContent model =
    [ shareModal model
    , header model
    , Grid.row [] [ cardPoolView model, inventoryView model ]
    ]


filterWithClearButton : String -> Html Msg
filterWithClearButton currentFilter =
    InputGroup.config
        ( InputGroup.text [ Input.attrs [ placeholder "Filter", onInput FilterChanged, value currentFilter ] ] )
        |> InputGroup.successors
            [ InputGroup.button [ Button.secondary, Button.attrs [ onClick ClearFilter ] ] [ text "Clear" ] ]
        |> InputGroup.view


cardPoolView : Model -> Grid.Column Msg
cardPoolView model =
    Grid.col [ Col.xs8, Col.attrs [ class "overflow-scroll content-column" ] ]
        [ Grid.row []
            [ Grid.col [ Col.xs12 ] 
                [ div [ Border.rounded, Spacing.mt2, class "d-flex pr-1 pl-1 pt-1 pb-1 bg-dark shadow "]
                    [ filterWithClearButton (model.filter |> Maybe.withDefault "")
                    ]
                ]
            ]
        , Grid.row []
            (model.notSelectedCards |> (filteredCards model.filter) |> List.map fullCardView)
        ]


inventoryView : Model -> Grid.Column Msg
inventoryView model =
    let numberOfSelectedCards = model.selectedCards |> List.length
        selectionCountString = "(" ++ (numberOfSelectedCards |> String.fromInt) ++ "/" ++ (maxDeckSize |> String.fromInt) ++ ")"
        border = if numberOfSelectedCards <= maxDeckSize then Border.dark else Border.warning
        textColor = if numberOfSelectedCards <= maxDeckSize then class "" else class "text-warning"
    in
    Grid.col [ Col.xs4, Col.attrs [ class "overflow-scroll content-column" ] ]
        [ div [ class "bg-dark m-2 shadow rounded border", border]
            [ Grid.row [ Bootstrap.Grid.Row.attrs [ class "pr-1 pt-1 pb-1" ] ]
                [ Grid.col [ Col.xs12, Col.attrs [ class "d-flex justify-content-between" ] ] 
                    [ Html.h5 [ Spacing.m2, textColor ] [ text "Selection" ] 
                    , div [ Spacing.m2, textColor ] [ text selectionCountString ]
                    ] ]
            , Grid.row []
                (model.selectedCards |> List.map summaryCardView)
            ]
        ]


cardBackgroundColor : Card -> Card.Option msg
cardBackgroundColor card =
    case card.kind of
        Unknown ->
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
        Unknown ->
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
        Unknown ->
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
        Unknown ->
            Html.Attributes.class "bg-dark"

        Mobility ->
            Html.Attributes.class "bg-primary"

        Utility ->
            Html.Attributes.class "bg-danger"

        Defense ->
            Html.Attributes.class "bg-success"

        Offense ->
            Html.Attributes.class "bg-warning"


fullCardView : Card -> Grid.Column Msg
fullCardView card =
    let
        cardBackground =
            card |> cardOutlineColor

        buttonBackground =
            card |> buttonBackgroundColor
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
