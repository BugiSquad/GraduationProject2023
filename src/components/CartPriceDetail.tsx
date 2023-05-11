import { Button, Card, Typography } from "@mui/material";
import React from "react";
import { MenuItem } from "../types/MenuItem";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { OrangeButton } from "./styled/Buttons";

export const CartPriceDetail: React.FC = () => {
    const cart = useAppSelector((state) => state.cart)
    const navigate = useNavigate()
    return (
        <div>
            {cart.item.length > 0 ? <Card sx={{ padding: "10px", margin: "10px" }}>
                <Button sx={OrangeButton} style={{ borderRadius: "0.3rem", padding: "10px", width: "300px" }} onClick={() => {
                    navigate("/order")
                }}
                >
                    <Typography
                        fontSize={"18px"}
                        fontWeight={'bold'}
                        color={"lightgray"}
                        sx={{ paddingRight: "10px" }}>총 {cart.item.length}개 | </Typography>
                    {getTotalPriceOf(cart.item)}원 주문하기</Button>

            </Card> : <div style={{ paddingTop: "200px" }}><Typography color={'lightgray'} fontWeight={'bold'}>장바구니에 메뉴가 없습니다.<br />메뉴를 추가해보세요.</Typography>
                <Button sx={OrangeButton} style={{ borderRadius: "0.3rem", padding: "10px", margin: "10px", width: "220px" }} onClick={() => {
                    navigate("/menu")
                }}>메뉴 보러가기</Button></div>}

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
