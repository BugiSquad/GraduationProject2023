import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BottomNavigationTab } from "../types/PageHeaderParam";
import { SimpleTemplate } from "./PageTemplate";
import { OrderList } from "../types/Order";
import { Typography } from "@mui/material";


export const MenuHistory: React.FC = () => {
    const [list, setList] = useState<OrderList[]>([]);
    return (


        <div className="App container" style={{ display: "flex" }}>
            <SimpleTemplate param={{ pageHeaderName: "메뉴 히스토리", tab: BottomNavigationTab.MYPAGE }}>
                <MenuHistoryContent list={list} />
            </SimpleTemplate>
        </div>
    );
};

export const MenuHistoryContent: React.FC<{ list: OrderList[] }> = (props) => {

  const { ordersId } = useParams();
  const filteredList = props.list.filter((item) => item.ordersId === Number(ordersId));

  return (
    <div style={{ width: "100%" }}>
      {filteredList.length > 0 ? (
        filteredList.map((item) => (
          <React.Fragment key={item.ordersId}>
            <Typography>{item.paymentDto.detail}</Typography>
            <Typography>{item.ordersType}</Typography>
          </React.Fragment>
        ))
      ) : (
        <Typography>no item</Typography>

      )}
    </div>
  );
};