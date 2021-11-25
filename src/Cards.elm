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
    | Unknown


type alias CardId =
    Int


type alias RawCard =
    { id : Int
    , title : String
    , properties : List String
    , kind : String
    , effects : List Effect
    , filename : String
    }


type alias Card =
    { id : CardId
    , title : String
    , properties : List Property
    , kind : Kind
    , effects : List Effect
    , filename : String
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

