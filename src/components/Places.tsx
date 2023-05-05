import React from "react";
import {PlaceItem} from "../types/PlaceItem";
import {Place} from "./Place";

const bgColor: string = '#00000047'
const places: PlaceItem[] = [
    {placeName: "상상관 앞", bgColor: bgColor, selectValue: false},
    {placeName: "학식당 앞", bgColor: bgColor, selectValue: false},
    {placeName: "잔디광장", bgColor: bgColor, selectValue: false},
];

type Props = {
    selectedIdx: number | null;
    setSelectedIdx: React.Dispatch<React.SetStateAction<number | null>>
    selectedPlaceName: string | null;
    setSelectedPlaceName: React.Dispatch<React.SetStateAction<string | null>>
}
export const Places: React.FC<Props> = ({selectedPlaceName, setSelectedPlaceName, setSelectedIdx, selectedIdx}) => {
    return (<>
            <div>
                <Place places={places} selectedPlaceName={selectedPlaceName} selectedIdx={selectedIdx}
                       setSelectedPlaceName={setSelectedPlaceName} setSelectedIdx={setSelectedIdx}/>
            </div>
        </>
    )
}
