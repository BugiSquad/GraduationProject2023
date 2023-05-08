import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";

interface Item {
    name: string;
    bgColor: string;
}

type Props<T extends Item> = {
    items: T[];
};
interface CategoryItem extends Item {
    selectValue: boolean;
}
const bgColor: string = '#00000047'
const categories: CategoryItem[] = [
    { name: "전체", bgColor: bgColor, selectValue: false },
    { name: "찌개류", bgColor: bgColor, selectValue: false },
    {name: "면류", bgColor: bgColor, selectValue: false },
    { name: "분식", bgColor: bgColor, selectValue: false },
];

export const RadioBarItem = <T extends Item>({ items }: Props<T>) => {

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
        {items.map((item, idx) => (
            <Button key={idx} disableElevation disableRipple onClick={() => handleClick(idx, item.name)}>
                <Card
                    sx={{
                        minWidth: 70,
                        minHeight: 40,
                        padding: "10px 5",
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

        ))}            {selectedPlaceName && <div>Selected cg: {selectedPlaceName}</div>}

    </>)
}

export const RadioBar: React.FC = () => {
    return (<>
        <div>
            <RadioBarItem items={categories} />
        </div>
       </>
    )
}