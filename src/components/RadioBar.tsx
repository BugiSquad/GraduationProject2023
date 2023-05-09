import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";


type Props<T extends Item> = {
    items: T[];
};

export const bgColor: string = '#00000047'

interface Item {
    name: string;
    bgColor: string;
}

export const RadioBarItem = <T extends Item>({ items }: Props<T>) => {

    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [selectedItemName, setSelectedItemName] = useState<string | null>(null);

    const handleClick = (idx: number, ItemName: string) => {
        if (idx === selectedIdx) {
            setSelectedIdx(null); 
            setSelectedItemName(null);
        } else {
            setSelectedIdx(idx);
            setSelectedItemName(ItemName);
        }
    };
    return (<>
        {items.map((item, idx) => (
            <Button key={idx} disableElevation disableRipple onClick={() => handleClick(idx, item.name)}>
                <Card
                    sx={{
                        minWidth: 70,
                        minHeight: 40,
                        padding: "10px 1",
                        marginTop: "10px",
                        borderRadius: "25px",
                        backgroundColor: selectedIdx === idx ? item.bgColor : "#FE724C",
                    }}
                >
                    <div style={{ alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                        <Typography variant={"body2"} fontWeight={"bold"}>
                            {item.name}
                        </Typography>
                    </div>
                </Card>
            </Button>

        ))}            {selectedItemName && <div>Selected value: {selectedItemName}</div>}

    </>)
}