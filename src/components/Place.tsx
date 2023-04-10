import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { PlaceItem } from "../types/PlaceItem";

type Props = {
    places: PlaceItem[];
};

export const Place: React.FC<Props> = ({ places }) => {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [selectedPlaceName, setSelectedPlaceName] = useState<string | null>(null);

    const handleClick = (idx: number, placeName: string) => {
        if (idx === selectedIdx) {
            setSelectedIdx(null);
            setSelectedPlaceName(null);
        } else {
            setSelectedIdx(idx);
            setSelectedPlaceName(placeName);
        }
    };
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
                    <div style={{ alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                        <Typography variant={"body2"} fontWeight={"bold"}>
                            {place.placeName}
                        </Typography>
                    </div>
                </Card>
            </Button>

        ))}            {selectedPlaceName && <div>Selected place: {selectedPlaceName}</div>}

    </>)
}

