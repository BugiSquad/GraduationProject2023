import {CartItemList} from "../components/Cart";
import React from "react";
import {MenuItem} from "../types/MenuItem";
import data from "../data/SampleFood.json";
import {SimpleTemplate} from "./PageTemplate";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const foods: MenuItem[] = data

export const Cart: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "장바구니"}}>
            <div>
                <CartItemList foods={foods}></CartItemList>
                <Link to={""}><Typography variant={"subtitle2"}/></Link>
            </div>
        </SimpleTemplate>
    )
}
