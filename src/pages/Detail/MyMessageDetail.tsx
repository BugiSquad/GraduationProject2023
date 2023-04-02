import React from "react";
import { PageTemplate } from "../PageTemplate";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export const MyMessageDetail: React.FC = () => {
    return (
        <PageTemplate param={{ variant: "WithName", pageHeaderName: "쪽지함 목록", showBackButton: true }}>
            <div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingLeft:"10px" }}>
                    <Button variant="text">
                        <ArrowBackIosNewIcon /></Button>
                    <div style={{ display: "inherit", alignItems: "center", paddingRight:"10px" }}>
                        <DeleteOutlineIcon />

                    </div>
                </div>
            </div>
        </PageTemplate>
    )
}
