import {CartItemList} from "../components/Cart";
import React from "react";
import {Food} from "../components/Food";
import data from "../data/SampleFood.json";
import {PageTemplate} from "./PageTemplate";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const foods: Food[] = data

export const Cart: React.FC = () => {
    return (
        <PageTemplate param={{variant: "WithName", pageHeaderName: "장바구니", showBackButton: true}}>
            <div>
                <Typography variant={"h6"}>장바구니</Typography>
                <CartItemList foods={foods}></CartItemList>
                <Link to={""}><Typography variant={"subtitle2"}/></Link>
            </div>
        </PageTemplate>
    )
}
