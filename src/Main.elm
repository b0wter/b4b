module Main exposing (..)

import Bootstrap.Button as Button exposing (Option)
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Navbar as Navbar
import Bootstrap.Table exposing (RowOption, rowLight)
import Bootstrap.Utilities.Border as Border
import Bootstrap.Utilities.Display as Display
import Bootstrap.Utilities.Flex as Flex
import Bootstrap.Utilities.Size as Size
import Bootstrap.Utilities.Spacing as Spacing
import Browser
import Cards exposing (Card, Kind(..), cards)
import Html exposing (Attribute, Html, div, img, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import List.Extra as List
import List.FlatMap as FlatMap


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
    | SelectCard Int
    | DeselectCard Int
    | ResetCards



-- Update -------------------------------------------------------------------------------------


subscriptions : Model -> Sub Msg
subscriptions model =
    Navbar.subscriptions model.navbarState NavbarMsg


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
                    ( model, Cmd.none )

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
    Grid.col [ Col.xs4, Col.attrs [ class "overflow-scroll content-column" ] ]
        [ div []
            [ Grid.row []
                (model.selectedCards |> List.map summaryCardView)
            ]
        ]


cardBackgroundColor : Card -> Card.Option msg
cardBackgroundColor card =
    case card.kind of
        Unknown ->
            Card.dark

        Reflex ->
            Card.primary

        Discipline ->
            Card.danger

        Brawn ->
            Card.success

        Fortune ->
            Card.warning


buttonBackgroundColor : Card -> Option msg
buttonBackgroundColor card =
    case card.kind of
        Unknown ->
            Button.dark

        Reflex ->
            Button.primary

        Discipline ->
            Button.danger

        Brawn ->
            Button.success

        Fortune ->
            Button.warning


cardOutlineColor : Card -> Card.Option msg
cardOutlineColor card =
    case card.kind of
        Unknown ->
            Card.outlineDark

        Reflex ->
            Card.outlinePrimary

        Discipline ->
            Card.outlineDanger

        Brawn ->
            Card.outlineSuccess

        Fortune ->
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

        Reflex ->
            Html.Attributes.class "bg-primary"

        Discipline ->
            Html.Attributes.class "bg-danger"

        Brawn ->
            Html.Attributes.class "bg-success"

        Fortune ->
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
                [ img [ src "img/sample_card.jpg", style "max-width" "200px" ] []
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
                    , Html.a [ onClick (DeselectCard card.id), pointerClass ] [ text "✕" ]
                    ]
                ]
            |> Card.footer [ Spacing.pt1, Spacing.pb1 ]
                [ Html.ul [ Spacing.pl3, Spacing.pr0 ]
                    (card.properties |> List.map (\property -> div [] [ Html.li [] [ Html.small [] [ text property.description ] ] ]))
                ]
            |> Card.view
        ]
