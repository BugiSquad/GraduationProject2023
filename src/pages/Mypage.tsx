import {CartItemList} from "../components/Cart";
import React from "react";
import data from "../data/SampleFood.json";
import {PageTemplate} from "./PageTemplate";
import {Typography} from "@mui/material";


export const Mypage: React.FC = () => {
    return (
        <PageTemplate>
           <div>
           <Typography variant={"h6"}>마이페이지</Typography>

           </div>
        </PageTemplate>
    )
}
