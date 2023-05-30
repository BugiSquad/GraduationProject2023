import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BottomNavigationTab } from "../types/PageHeaderParam";
import { SimpleTemplate } from "./PageTemplate";
import { OrderList } from "../types/Order";
import { Typography } from "@mui/material";
import { getOrderList } from "../api/Order";


export const MenuHistory: React.FC = () => {
  const history = useLoaderData() as OrderList
  console.log(history)
  return (


    <div className="App container" style={{ display: "flex" }}>
      <SimpleTemplate param={{ pageHeaderName: "메뉴 히스토리", tab: BottomNavigationTab.MYPAGE }}>
        <MenuHistoryContent list={history} />
      </SimpleTemplate>
    </div>
  );
};

export const MenuHistoryContent: React.FC<{ list: OrderList }> = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <Typography>{props.list.ordersId}</Typography>
      <Typography>{props.list.paymentDto.detail}</Typography>
      <Typography>{props.list.ordersType}</Typography>
    </div>
  );
};

// @ts-ignore
export async function menuHistoryLoader({ params }) {
  let id = Number(params.ordersId)
  const history = await getOrderList();
  const data = history.data.data as OrderList[]
  console.log(data)
  return { ...data.filter((item: OrderList) => item.ordersId === id)[0] }
}