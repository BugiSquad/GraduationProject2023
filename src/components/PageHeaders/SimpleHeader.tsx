import React from "react";
import {SimpleHeaderParam} from "../../types/PageHeaderParam";
import {Button, Typography} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {handleGoBack} from "../../pages/Detail/MyMessageDetail";

export const SimpleHeader: React.FC<SimpleHeaderParam>
    = (param: SimpleHeaderParam) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "15px"
        }}>
            <Typography variant={"h6"} fontWeight={'bold'}>
                <Button onClick={handleGoBack} disableElevation sx={{justifyContent: "flex-start"}}>
                    <ArrowBackIosNewIcon sx={{color: '#FE724C'}}/></Button> {param.pageHeaderName}</Typography>

            </div>
        )
    }
