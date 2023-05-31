import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BottomNavigationTab } from "../types/PageHeaderParam";
import { SimpleTemplate } from "./PageTemplate";
import { OrderList } from "../types/Order";
import { Typography } from "@mui/material";
import { getOrderList } from "../api/Order";
import { PageCards } from "../components/PageCards";
import { normalTypography } from "../components/styled/Text";


export const MenuHistory: React.FC = () => {
  const history = useLoaderData() as OrderList
  return (


    <div className="App container" style={{ display: "flex" }}>
      <SimpleTemplate param={{ pageHeaderName: "메뉴 히스토리", tab: BottomNavigationTab.MYPAGE }}>
        <MenuHistoryContent list={history} />
      </SimpleTemplate>
    </div>
  );
};

export const MenuHistoryContent: React.FC<{ list: OrderList }> = (props) => {

  const paymentTime = new Date(props.list.paymentDto.paymentTime);
  const formattedDate = paymentTime.toLocaleDateString('ko-KR',  { year: 'numeric', month: 'long', day: 'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit' });

  return (
    <div style={{ width: "100%" }}>
      <PageCards title={"주문 번호"} content={<Typography sx={{...normalTypography}} fontSize={20}>{props.list.ordersId}</Typography>} />
      <PageCards title={"주문 메뉴"} content={<Typography sx={{...normalTypography}} fontSize={20}>{props.list.paymentDto.detail}</Typography>} />
      <PageCards title={"결제수단"} content={<Typography sx={{...normalTypography}} fontSize={20}>{props.list.paymentDto.paymentType}</Typography>} />
      <PageCards title={"합계 금액"} content={<Typography sx={{...normalTypography}} fontSize={20}>{props.list.totalPrice.toLocaleString()}원</Typography>} />
      <PageCards title={"주문 일시"} content={<Typography sx={{...normalTypography}} fontSize={20}>{formattedDate}</Typography>} />
    </div>
  );
};

// @ts-ignore
export async function menuHistoryLoader({ params }) {
  let id = Number(params.ordersId)
  const history = await getOrderList();
  const data = history.data.data as OrderList[]
  return { ...data.filter((item: OrderList) => item.ordersId === id)[0] }
}