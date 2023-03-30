import {CartItemList} from "../components/Cart";
import React from "react";
import {Food} from "../components/Food";
import data from "../data/SampleFood.json";
import {PageTemplate} from "./PageTemplate";
import {Typography} from "@mui/material";

const foods: Food[] = data

export const Cart: React.FC = () => {
    return (
        <PageTemplate>
            <div>
                <Typography variant={"h6"}>장바구니</Typography>
                <CartItemList foods={foods}></CartItemList>
            </div>
        </PageTemplate>
    )
}
