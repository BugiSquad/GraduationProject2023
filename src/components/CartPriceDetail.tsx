import {Card, Typography} from "@mui/material";
import React from "react";
import {MenuItem} from "../types/MenuItem";
import {useAppSelector} from "../store/hooks";

export const CartPriceDetail: React.FC = () => {
    const cart = useAppSelector((state) => state.cart)
    return (
        <div>
            <Card>
                <Typography variant={"h6"}>총 결제 금액</Typography>
                <Typography variant={"h5"}>{cart.item.length > 0 ? getTotalPriceOf(cart.item) : 0}</Typography>
            </Card>
        </div>)
}

function getTotalPriceOf(cartItem: MenuItem[]) {
    const price = cartItem.map((item) => {
        return item.price
    })
    return price.reduce((acc, value) => {
        return acc + value
    })
}
