import { Button, Typography } from "@mui/material";
import React from "react";
import { BottomNavigationGroup } from "../components/BottomNavigationGroup";
import { handleGoBack } from "./Detail/MyMessageDetail";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export const MakeAppointment: React.FC = () => {
    return (
        <div className="App container">
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop:"15px"}}>
                <Typography variant={"h6"} fontWeight={'bold'}>
                    <Button onClick={handleGoBack} disableElevation>
                        <ArrowBackIosNewIcon /></Button> 약속잡기</Typography>
            </div>
            <BottomNavigationGroup />
        </div>
    )
}
