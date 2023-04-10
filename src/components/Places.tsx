import React from "react";
import { PlaceItem } from "../types/PlaceItem";
import { Place } from "./Place";

const placeName: string[] = ['상상관 앞', '학식당 앞', '잔디광장']
const bgColor: string = '#00000047'
const places: PlaceItem[] = [
    { placeName: "상상관 앞", bgColor: bgColor, selectValue: false },
    { placeName: "학식당 앞", bgColor: bgColor, selectValue: false },
    { placeName: "잔디광장", bgColor: bgColor, selectValue: false },
];

export const Places: React.FC = () => {
    return (<>
        <div>
            <Place places={places} />
        </div>
       </>
    )
}
