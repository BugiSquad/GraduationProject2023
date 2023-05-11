import React from "react";
import {Button, Card, Typography} from "@mui/material";


export interface RadioBarItemProps {
    names: string[];
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const RadioBarItem: React.FC<RadioBarItemProps> = (items) => {

    const handleClick = (idx: number) => {
        items.setIndex(idx)
    };
    return (<>
        {items.names.map((item, idx) => (
            <Button key={idx} disableElevation disableRipple onClick={() => handleClick(idx)}>
                <Card
                    sx={{
                        minWidth: 70,
                        minHeight: 40,
                        padding: "10px 1",
                        marginTop: "10px",
                        borderRadius: "25px",
                        backgroundColor: items.index === idx ? '#00000047' : '#FE724C',
                    }}
                >
                    <div style={{alignItems: "center", justifyContent: "space-between", marginTop: "10px"}}>
                        <Typography variant={"body2"} fontWeight={"bold"} >
                            {item}
                        </Typography>
                    </div>
                </Card>
            </Button>

        ))}

    </>)
}