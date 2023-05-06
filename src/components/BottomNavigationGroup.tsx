import React from "react";
import {Tab, Tabs} from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../store/hooks";
import {toAPP, toCart, toCommunity, toMenu, toMyPage} from "../store/navgroup";

interface BottomNavigationGroupProps {
    idx: number;
}

export const BottomNavigationGroup: React.FC<BottomNavigationGroupProps> = ({idx}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    return (
        <Tabs sx={{position: 'fixed', bottom: 0, left: 0, right: 0, background: "white"}}
              variant="fullWidth"
              value={idx}                        //전역 상태관리를 이용해서 관리해야함
              onChange={(event, newValue) => {
                  switch (newValue) {
                      case 0:
                          dispatch(toAPP())
                          navigate("/app");
                          break;
                      case 1:
                          dispatch(toCommunity())
                          navigate("/community");
                          break;
                case 2:
                    dispatch(toCart())
                    navigate("/cart")
                    break;
                case 3:
                    dispatch(toMenu())
                    navigate("/menu")
                    break;
                      case 4:
                          dispatch(toMyPage())
                          navigate("/mypage")
                          break;
                  }
              }}
        >
            <Tab label="주문하기" icon={<LocalDiningIcon/>}/>
            <Tab label="매칭" icon={<PeopleIcon/>}/>
            <Tab label="장바구니" icon={<ShoppingCartIcon/>}/>
            <Tab label="커뮤니티" icon={<DashboardIcon/>}/>
            <Tab label="마이페이지" icon={<PersonIcon/>}/>
        </Tabs>)
}
