import React, {useState} from "react";
import {Button, Card, Input, Typography} from "@mui/material";
import {PlaceItem} from "../types/PlaceItem";

type Props = {
    places: PlaceItem[];
    selectedIdx: number | null;
    setSelectedIdx: React.Dispatch<React.SetStateAction<number | null>>
    selectedPlaceName: string | null;
    setSelectedPlaceName: React.Dispatch<React.SetStateAction<string | null>>
};

export const Place: React.FC<Props> = ({
                                           places,
                                           setSelectedPlaceName,
                                           setSelectedIdx,
                                           selectedIdx,
                                           selectedPlaceName
                                       }) => {
    const [textField, setTextField] = useState("")
    const handleClick = (idx: number, placeName: string) => {
        if (idx === selectedIdx) {
            setSelectedIdx(null);
            setSelectedPlaceName(null);
        } else {
            setSelectedIdx(idx);
            setSelectedPlaceName(placeName);
            setTextField("")
        }
    };
    const handleInput = (placeName: string) => {
        setSelectedIdx(null);
        setSelectedPlaceName(placeName);
        setTextField(placeName)
    }
    return (<>
        {places.map((place, idx) => (
            <Button key={idx} disableElevation disableRipple onClick={() => handleClick(idx, place.placeName)}>
                <Card
                    sx={{
                        minWidth: 100,
                        minHeight: 40,
                        padding: "10px 5",
                        marginTop: "10px",
                        borderRadius: "25px",
                        backgroundColor: selectedIdx === idx ? place.bgColor : "#F4F4F4",
                    }}
                >
                    <div style={{alignItems: "center", justifyContent: "space-between", marginTop: "10px"}}>
                        <Typography variant={"body2"} fontWeight={"bold"}>
                            {place.placeName}
                        </Typography>
                    </div>
                </Card>
            </Button>
        ))}
        <Input placeholder={"직접입력"} value={textField} onChange={(event) => handleInput(event.target.value)}></Input>
        {/*{selectedPlaceName && <div>Selected place: {selectedPlaceName}</div>}*/}
    </>)
}

