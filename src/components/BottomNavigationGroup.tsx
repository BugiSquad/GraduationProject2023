import React from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {toAPP, toCart, toCommunity, toMyPage} from "../store/navgroup";

export const BottomNavigationGroup: React.FC = () => {
    const navigate = useNavigate();

    const idx = useAppSelector((state) => state.navIdx)
    const dispatch = useAppDispatch()

    return <BottomNavigation
        sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
        value={idx.cur}                        //전역 상태관리를 이용해서 관리해야함
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
                    break;

                case 4:
                    dispatch(toMyPage())
                    navigate("/mypage")
                    break;
            }
        }}
    >
        <BottomNavigationAction label="주문하기" icon={<LocalDiningIcon/>}/>
        <BottomNavigationAction label="매칭" icon={<PeopleIcon/>}/>
        <BottomNavigationAction label="장바구니" icon={<ShoppingCartIcon/>}/>
        <BottomNavigationAction label="커뮤니티" icon={<DashboardIcon/>}/>
        <BottomNavigationAction label="마이페이지" icon={<PersonIcon/>}/>
    </BottomNavigation>;
}
