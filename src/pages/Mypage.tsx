import React, {useEffect, useState} from "react";
import {SimpleTemplate} from "./PageTemplate";
import {Button, Typography} from "@mui/material";
import {RecentOrders} from "../components/RecentOrders";
import {MypageCards} from "../components/MypageCards";
import {RecentMeets} from "../components/RecentMeets";
import {MyMessagebox} from "../components/MyMessagebox";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import {OrangeButton} from "../components/styled/Buttons";
import {getMemberInfo, removeMyInfo} from "../api/Member";
import {getMyToken} from "../api/Common";
import {useNavigate} from "react-router-dom";
import {LikedMenuContents} from "../components/LikedMenuContents";
import {OrderList, toOrderStatus} from "../types/Order";
import {getOrderList} from "../api/Order";
import {normalTypography} from "../components/styled/Text";


export const Mypage: React.FC = () => {
    const navigate = useNavigate();

    const [list, setList] = useState<OrderList[]>([]);
    const [name, setName] = useState<String>('');



    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await getOrderList();
            const data = res.data.data.map((item: OrderList) => ({
              ...item,
              ordersType: toOrderStatus(item.ordersType),
            }));
            setList(data);
          } catch (error) {
            console.warn(error);
          }
        };
    
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const memberInfo = await getMemberInfo();
            console.log(memberInfo)
              setName(memberInfo.data.name);
          } catch (error) {
            console.warn(error);
          }
        };
    
        fetchData();
      }, []);


    const len = list.length
    const handleLogout = () => {
        removeMyInfo();
        navigate("/app")
    };

 
    if (getMyToken() === "")
        return (
            <SimpleTemplate param={{ pageHeaderName: "마이페이지", tab: BottomNavigationTab.MYPAGE }}>
                <div style={{
                    display: "flex",
                    height: "60vh",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        alignContent: "center",
                        marginRight: "10px",
                    }}>
                        <Typography variant={"caption"} fontWeight="bold" color={'grey'}> 로그인하여 더 많은 기능과 옵션을
                            이용해보세요.</Typography>
                        <Button sx={OrangeButton} style={{ width: "100%", borderRadius: "0.3rem" }}
                            onClick={() => navigate('/login')}>로그인하기</Button>
                    </div>
                </div>
            </SimpleTemplate>)
    else
        return (
            <SimpleTemplate param={{ pageHeaderName: "마이페이지", tab: BottomNavigationTab.MYPAGE }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginRight: "10px",
                    alignItems:"center"
                }}>
                <Typography sx={{...normalTypography, padding:"0px"}} color="#FE724C" fontSize={20} >{name}님, 반갑습니다.</Typography>
                <a href="/mypage/viewmyinfo" style={{ color: 'black' }}>내 정보 보기</a>
                </div>
                <MypageCards title="최근 주문 내역"
                    content={<RecentOrders list={len > 5 ? list.slice(len - 5, len) : list} />}
                    link="/mypage/recentorderdetail" />
                <MypageCards title="최근 만남" content={<RecentMeets />} link="/mypage/recentmeetdetail" />
                <MypageCards title="나의 쪽지함" content={<MyMessagebox />} link="/mypage/mymessagedetail" />
                <MypageCards title="내가 찜한 메뉴" content={<LikedMenuContents flag={true} />} link="/likedmenu" />
                <Button sx={{ ...OrangeButton, width: "100%", borderRadius: "0.3rem", margin: "0px" }}
                    onClick={handleLogout}>로그아웃하기 </Button>
            </SimpleTemplate>
        )
}