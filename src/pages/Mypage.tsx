import { CartItemList } from "../components/Cart";
import React from "react";
import data from "../data/SampleFood.json";
import { PageTemplate } from "./PageTemplate";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";


export const Mypage: React.FC = () => {
    return (
        <PageTemplate>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                <Typography variant={"h6"} fontWeight={"bold"}>
                    <ArrowBackIosNewIcon fontSize="small" /> 마이페이지</Typography>
                <div style={{ display: "inherit", alignItems: "center", color: "grey" }}>
                    <a href = "">내 정보 수정</a>
                </div>

            </div>
        </PageTemplate>
    )
}
