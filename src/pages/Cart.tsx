import {CartItemList} from "../components/Cart";
import React from "react";
import {SimpleTemplate} from "./PageTemplate";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useAppSelector} from "../store/hooks";
import {CartPriceDetail} from "../components/CartPriceDetail";
import {BottomNavigationTab} from "../types/PageHeaderParam";

export const Cart: React.FC = () => {
    const cart = useAppSelector((state) => state.cart)
    return (
        <SimpleTemplate param={{pageHeaderName: "장바구니", tab: BottomNavigationTab.CART}}>
            <div>
                <CartItemList items={cart.item}></CartItemList>
                <Link to={""}><Typography variant={"subtitle2"}/></Link>
                <CartPriceDetail></CartPriceDetail>
            </div>
        </SimpleTemplate>
    )
}
