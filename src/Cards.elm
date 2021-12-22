module Cards exposing (..)

import Dict
import List.Extra as List
import List.Extras as List
import Maybe.Extra as Maybe
import String.Extra as String
import Tags exposing (..)
import Regex


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
    , effects : List Effect
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
    , effects = raw.effects
    , supplyLine = line
    , kind = raw.kind |> parseKind
    , affinity = raw.affinity |> parseAffinity
    }


type alias Card =
    { id : CardId
    , title : String
    , cost : Int
    , totalCost : Int
    , filename : String
    , properties : List Property
    , effects: List Effect
    , supplyLine : SupplyLine
    , kind : Kind
    , affinity : Affinity
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


effectsAsSummary : List Effect -> List String
effectsAsSummary effects =
    effects |> List.map effectToString
    

type Operation
    = Addition
    | Subtraction
 
type AbsOrRel
    = Absolute
    | Relative
    
parseAbsOrRel : String -> Maybe AbsOrRel
parseAbsOrRel s =
    case s of
        "%" -> Just Relative
        ""  -> Just Absolute
        _   -> Nothing

absOrRelToString : AbsOrRel -> String
absOrRelToString a =
    case a of
        Absolute -> "absolute"
        Relative -> "relative"
 
type alias MergeElement =
    { operation: Operation
    , absOrRel: AbsOrRel
    , value: Int
    , key: String
    }
 
parseOperation : String -> Maybe Operation
parseOperation s =
    case s of
        "+" -> Just Addition
        "-" -> Just Subtraction
        _   -> Nothing
        
type alias GroupedProperties =
    { passives: List String
    , team: List String
    , disables: List String
    , remaining: List String
    }
        
groupProperties : List Property -> GroupedProperties
groupProperties properties =
    {- The following properties should be grouped:
        * Team effects
        * Disables
        * Passive effects of the same stat (e.g. all health bonuses)
    -}
    let
        descriptions = properties |> List.map (\p -> p.description)
        
        disableString = "DISABLES: "
        disables = 
            descriptions 
            |> List.filter (\d -> d |> String.startsWith disableString)
            |> List.map (\d -> d |> String.dropLeft (disableString |> String.length))
            
        _ = Debug.log "disables" disables

        teamString = "TEAM EFFECTS "
        teams =
            descriptions
            |> List.filter (\d -> d |> String.startsWith teamString)
            |> List.map (\d -> d |> String.dropLeft (teamString |> String.length))
            
        regexResultToMergeElement : List String -> Maybe MergeElement
        regexResultToMergeElement strings =
            case strings of
                [ first, second, third] -> 
                    case (first |> parseOperation, second |> String.toInt, third) of
                        (Just op, Just value, key) ->
                            Just { operation = op, absOrRel = Absolute, value = value, key = key }
                        _ ->
                            Nothing
                [ first, second, third, fourth] -> 
                    let 
                        op = first |> parseOperation
                        value = second |> String.toInt
                        absOrRel = third |> parseAbsOrRel
                    in
                    case (op, value, absOrRel) of
                        (Just o, Just v, Just a) ->
                            Just { operation = o, absOrRel = a, value = v, key = fourth }
                        _ ->
                            Nothing
                _ -> Nothing

        mergeMergeElements : List MergeElement -> List String
        mergeMergeElements elements =
            let
                grouped = 
                    elements 
                    |> List.groupBy (\e -> (e.key, e.absOrRel |> absOrRelToString))
                    
                merger : List MergeElement -> Maybe MergeElement
                merger mergeElements =
                    let
                        first = mergeElements |> List.head
                        
                        folder next acc = 
                            case next.operation of
                                Addition -> acc + next.value
                                Subtraction -> acc - next.value
                                           
                        totalValue = mergeElements |> List.foldl folder 0
                    in
                    first 
                    |> Maybe.map (\f -> { f | value = totalValue })
            in
            grouped 
            |> Dict.map (\_ value -> value |> merger)
            |> Dict.values
            |> Maybe.values
            |> List.filter (\value -> value.value /= 0)
            |> List.map (\element -> 
                let 
                    val = if element.value > 0 then 
                            "+" ++ (element.value |> String.fromInt) 
                          else 
                            element.value |> String.fromInt
                in
                val
                ++ (if element.absOrRel == Absolute then " " else "% ")
                ++ (element.key |> String.toTitleCase)
                )
            
        passiveRegex = 
            Regex.fromStringWith { caseInsensitive = True, multiline = False } "([+,-])(\\d+)(\\%?)\\s(.+)"
            |> Maybe.withDefault Regex.never
            
        rawPassives =
            descriptions
            |> List.map (Regex.find passiveRegex)
            |> List.map (\matches -> matches |> List.map (\m -> m.submatches |> Maybe.values) |> List.concat)
            
        remaining =
            descriptions
            |> List.filter (not << Regex.contains passiveRegex) 
            |> List.filter (\d -> 
                (d |> (not << Regex.contains passiveRegex))
                && (d |> (not << String.startsWith teamString))
                && (d |> (not << String.startsWith disableString))
            )
            
        passives =
            rawPassives
            |> List.map regexResultToMergeElement
            |> Maybe.values
            |> mergeMergeElements

    in
    { passives = passives
    , team = teams
    , disables = disables
    , remaining = remaining
    }