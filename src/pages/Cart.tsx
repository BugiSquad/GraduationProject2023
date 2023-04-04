import {CartItemList} from "../components/Cart";
import React from "react";
import {Food} from "../components/Food";
import data from "../data/SampleFood.json";
import {PageTemplate} from "./PageTemplate";
import {Card} from "@mui/material";

const foods: Food[] = data

export const Cart: React.FC = () => {
    return (
        <PageTemplate param={{variant: "WithName", pageHeaderName: "장바구니", showBackButton: true}}>
            <div>
                <Card>
                    <CartItemList foods={foods}></CartItemList>
                </Card>
            </div>
        </PageTemplate>
    )
}
