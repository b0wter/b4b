module List.Extras exposing (..)

import List.Extra exposing (..)
import Dict exposing (Dict, empty, get, member)

limit : Int -> List a -> List a
limit max list =
    if (list |> List.length) >= max then
        list |> List.take (max - 1)

    else
        list


addAndDrop : Int -> a -> List a -> List a
addAndDrop max element list =
    element :: (list |> limit max)


removeIndex : Int -> List a -> List a
removeIndex i list =
    let
        run aggregator current remaining =
            case remaining of
                [] ->
                    aggregator

                head :: tail ->
                    if current == i then
                        run aggregator (current + 1) tail

                    else
                        run (head :: aggregator) (current + 1) tail
    in
    run [] 0 list |> List.reverse

elemIndexBy : (a -> Bool) -> List a -> Maybe Int
elemIndexBy predicate list =
    let
        run index remaining =
            case remaining of
                [] ->
                    Nothing

                head :: tail ->
                    if head |> predicate then
                        Just index

                    else
                        run (index + 1) tail
    in
    run 0 list


replaceBy : (a -> Bool) -> a -> List a -> List a
replaceBy predicate new items =
    items
        |> List.foldl
            (\current acc ->
                (if current |> predicate then
                    new

                 else
                    current
                )
                    :: acc
            )
            []
        |> List.reverse


{-| Takes a predicate and a list of items.
Splits the list into two parts:
 left: items that don't match the predicate
 right: items that match the predicate

    splitBy ((>) 3) [ 1, 9, 2, 8 ] = ([1, 2], [9, 8])
-}
splitBy : (a -> Bool) -> List a -> (List a, List a)
splitBy predicate items =
    let
        run nonMatches matches remaining =
            case remaining of
                [] ->
                    (nonMatches |> List.reverse, matches |> List.reverse)
                head :: tail ->
                    if head |> predicate then
                        run nonMatches (head :: matches) tail
                    else
                        run (head :: nonMatches) matches tail
    in
    run [] [] items

groupBy : (a -> comparable) -> List a -> Dict comparable (List a)
groupBy selector items =
    let
        run accumulator remaining =
            case remaining of
                [] ->
                    accumulator
                head :: tail ->
                    let 
                        mapped = head |> selector
                        previousValues = Dict.get mapped accumulator |> Maybe.withDefault []
                        newValues = head :: previousValues
                        updatedDict = 
                            accumulator
                            |> Dict.remove mapped
                            |> Dict.insert mapped newValues
                    in
                    run updatedDict tail
    in
    run Dict.empty items
    