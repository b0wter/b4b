module Main exposing (..)

import Bootstrap.Button as Button exposing (Option)
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Navbar as Navbar
import Bootstrap.Table exposing (RowOption, rowLight)
import Bootstrap.Text as Text
import Bootstrap.Utilities.Border as Border
import Bootstrap.Utilities.Display as Display
import Bootstrap.Utilities.Flex as Flex
import Bootstrap.Utilities.Size as Size
import Bootstrap.Utilities.Spacing as Spacing
import Browser
import Cards exposing (Card, CardId, Kind(..), cards)
import Html exposing (Attribute, Html, div, img, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import List.Extra as List
import List.Extras as List
import List.FlatMap as List
import Bootstrap.Text exposing (Color)


main : Program Flags Model Msg
main =
    Browser.document
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }



-- Model -------------------------------------------------------------------------------------


type alias Flags =
    {}


type alias Model =
    { navbarState : Navbar.State

    --------------
    , cardPool : List Card
    , selectedCards : List Card
    }


init : Flags -> ( Model, Cmd Msg )
init flags =
    let
        ( navbarState, navbarCmd ) =
            Navbar.initialState NavbarMsg
    in
    ( { cardPool = cards, selectedCards = [], navbarState = navbarState }, navbarCmd )


type Msg
    = NavbarMsg Navbar.State
    | SelectCard CardId
    | DeselectCard CardId
    | ResetCards
    | MoveCardUp CardId
    | MoveCardDown CardId



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

        SelectCard id ->
            let
                card =
                    model.cardPool |> List.find (\c -> c.id == id)
            in
            case card of
                Just c ->
                    ( { model
                        | selectedCards = c :: model.selectedCards
                        , cardPool = model.cardPool |> List.filter (\cc -> cc.id /= id)
                      }
                    , Cmd.none
                    )

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
                    ( { model
                        | selectedCards = model.selectedCards |> List.filter (\cc -> cc.id /= id)
                        , cardPool = c :: model.cardPool
                      }
                    , Cmd.none
                    )

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
            ( { model | selectedCards = [], cardPool = cards }, Cmd.none )



-- View -------------------------------------------------------------------------------------


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
        |> Navbar.items
            [ Navbar.itemLink [ href "#", onClick ResetCards ] [ text "Reset" ]
            , Navbar.itemLink [ href "#" ] [ text "Share" ]
            ]
        |> Navbar.view model.navbarState


mainContent : Model -> List (Html Msg)
mainContent model =
    [ header model
    , Grid.row [] [ cardPoolView model, inventoryView model ]
    ]


cardPoolView : Model -> Grid.Column Msg
cardPoolView model =
    Grid.col [ Col.xs8, Col.attrs [ class "overflow-scroll content-column" ] ]
        [ Grid.row []
            (model.cardPool |> List.map fullCardView)
        ]


inventoryView : Model -> Grid.Column Msg
inventoryView model =
    let numberOfSelectedCards = model.selectedCards |> List.length
        selectionCountString = "(" ++ (numberOfSelectedCards |> String.fromInt) ++ "/15)"
        border = if numberOfSelectedCards <= 15 then Border.light else Border.warning
        textColor = if numberOfSelectedCards <= 15 then class "" else class "text-warning"
    in
    Grid.col [ Col.xs4, Col.attrs [ class "overflow-scroll content-column" ] ]
        [ div [ class "bg-light m-2 shadow rounded border", border]
            [ Grid.row [ ]
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
        [ Card.config [ cardBackground, Card.attrs [ style "width" "20rem", style "height" "605px", Spacing.m2 ] ]
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
            card |> cardBackgroundColor
    in
    Grid.col [ Col.xs12 ]
        [ Card.config [ background, Card.attrs [ Spacing.m2 ] ]
            |> Card.block [ Block.attrs [ Spacing.pt1, Spacing.pb1 ] ]
                [ Block.text [ Flex.block, Flex.justifyBetween ]
                    [ div [] [ text card.title ]
                    , div []
                        [ Html.a [ onClick (MoveCardUp card.id), pointerClass, class "pl-2 pr-2" ] [ text "↑" ]
                        , Html.a [ onClick (MoveCardDown card.id), pointerClass, class "pl-2 pr-2 ml-2" ] [ text "↓" ]
                        , Html.a [ onClick (DeselectCard card.id), pointerClass, class "pl-2 pr-2 ml-2" ] [ text "✕" ]
                        ]
                    ]
                ]
            |> Card.footer [ Spacing.pt1, Spacing.pb1 ]
                [ Html.ul [ Spacing.pl3, Spacing.pr0 ]
                    (card.properties |> List.map (\property -> div [] [ Html.li [] [ Html.small [] [ text property.description ] ] ]))
                ]
            |> Card.view
        ]
