module String.Extras exposing (..)

import List exposing (length)


chunks : Int -> String -> List String
chunks size string =
    let
        run accumulator remaining =
            case remaining of
                "" ->
                    accumulator

                text ->
                    run ((text |> String.slice 0 size) :: accumulator) (text |> String.dropLeft size)
    in
    run [] string
        |> List.reverse
