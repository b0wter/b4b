module Cards exposing (..)

import List.Extra as List
import Tags exposing (..)


type alias Property =
    { description : String
    }


type Kind
    = Utility
    | Offense
    | Defense
    | Mobility
    | UnknownKind

parseKind: String -> Kind
parseKind str =
    case str |> String.toLower of
        "utility" -> Utility
        "offense" -> Offense
        "defense" -> Defense
        "mobility" -> Mobility
        _ -> UnknownKind


type Affinity
    = Discipline
    | Reflex
    | Brawn
    | Fortune
    | UnknownAffinity


parseAffinity: String -> Affinity
parseAffinity str =
    case str |> String.toLower of
        "discipline" -> Discipline
        "reflex" -> Reflex
        "brawn" -> Brawn
        "fortune" -> Fortune
        _ -> UnknownAffinity

type SupplyTrack
    = Nest NestLines
    | Alley AlleyLines
    | Clinic ClinicLines
    | Strip StripLines
    | Starter StarterLines
    | UnknownTrack String String

type StarterLines
    = StarterDeck

type NestLines
    = BridgeTown
    | TheCrowsNest
    | KnuckleHouse


type AlleyLines
    = TheStilts
    | PaulsAlley
    | FortHope


type ClinicLines
    = TheFurnace
    | GrantsBrewHouse
    | TheClinic


type StripLines
    = TheStrip


type alias CardId =
    Int


type alias RawSupplyLine =
    { track : String
    , name : String
    , tier : Int
    , index : Int
    }


type alias RawCard =
    { id : Int
    , name : String
    , cost : Int
    , totalCost : Int
    , filename : String
    , properties : List String
    , supplyLine : RawSupplyLine
    , kind : String
    , affinity : String
    }


type alias SupplyLine =
    { name : SupplyTrack
    , tier : Int
    , index : Int
    }


parseSupplyTrack: String -> String -> SupplyTrack
parseSupplyTrack track name =
    case track of
        "Alley" ->
            case name of
                "Paul's Alley" ->
                    Alley PaulsAlley
                "The Stilts" ->
                    Alley TheStilts
                "Fort Hope" ->
                    Alley FortHope
                _ ->
                    UnknownTrack track name
        "Clinic" ->
            case name of
                "The Clinic" ->
                    Clinic TheClinic
                "The Furnace" ->
                    Clinic TheFurnace
                "Grant's Brew House" ->
                    Clinic GrantsBrewHouse
                _ ->
                    UnknownTrack track name
        "Nest" ->
            case name of
                "The Crow's Nest" ->
                    Nest TheCrowsNest
                "Bridge Town" ->
                    Nest BridgeTown
                "Knuckle House" ->
                    Nest KnuckleHouse
                _ ->
                    UnknownTrack track name
        "Starter" ->
            case name of
                "Starter Deck" ->
                    Starter StarterDeck
                _ ->
                    UnknownTrack track name
        "Strip" ->
            case name of
                "The Strip" ->
                    Strip TheStrip
                _ ->
                    UnknownTrack track name
        _ ->
            UnknownTrack track name


parseSupplyLine: RawSupplyLine -> SupplyLine
parseSupplyLine raw =
    let
        track = parseSupplyTrack raw.track raw.name
    in
    { name = track
    , index = raw.index
    , tier = raw.tier
    }


parseRawCard: RawCard -> Card
parseRawCard raw =
    let
        line = parseSupplyLine raw.supplyLine
    in
    { id = raw.id
    , title = raw.name
    , cost = raw.cost
    , totalCost = raw.totalCost
    , filename = raw.filename
    , properties = raw.properties |> List.map (\p -> { description = p })
    , supplyLine = line
    , kind = raw.kind |> parseKind
    , affinity = raw.affinity |> parseAffinity
    , effects = []
    }


type alias Card =
    { id : CardId
    , title : String
    , cost : Int
    , totalCost : Int
    , filename : String
    , properties : List Property
    , supplyLine : SupplyLine
    , kind : Kind
    , affinity : Affinity
    , effects : List Effect
    }


containsWord : String -> Card -> Bool
containsWord word card =
    let
        descriptions = card.properties
                       |> List.map (\p -> p.description |> String.toLower)
        textAndProperties = (card.title |> String.toLower) :: descriptions
    in
    textAndProperties
    |> String.join " "
    |> String.contains word


containsWords : List String -> Card -> Bool
containsWords words card =
    let
        contains w =
            containsWord w card
    in
    words |> List.all contains


{-| Takes a list of ids and tries to map them to the given cards. If the id does not match any card it is dropped
silently.
-}
byIds : List Card -> List Int -> (List Card)
byIds cards ids =
    let
        isSearchedFor i = ids |> List.any (\ii -> ii == i)
    in
    cards |> List.filter (\c -> c.id |> isSearchedFor)

