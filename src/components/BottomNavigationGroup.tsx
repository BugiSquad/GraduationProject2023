import React from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import {Link, useNavigate} from "react-router-dom";

export const BottomNavigationGroup:React.FC = () => {
    const navigate = useNavigate();
    return <BottomNavigation
        sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
        value={0}                        //전역 상태관리를 이용해서 관리해야함
        onChange={(event, newValue) => {
            switch(newValue){
                case 0:
                    navigate("/app");
                    break;
                case 1:
                    navigate("/community");
                    break;
                case 2:

                    break;
                case 3:

                    break;
            }
        }}
    >
        <BottomNavigationAction label="주문하기" icon={<LocalDiningIcon/>}/>
        <BottomNavigationAction label="같이 먹기" icon={<Diversity1Icon/>}/>
        <BottomNavigationAction label="커뮤니티" icon={<DashboardIcon/>}/>
        <BottomNavigationAction label="커뮤니티" icon={<DashboardIcon/>}/>
        <BottomNavigationAction label="마이페이지" icon={<PersonIcon/>}/>
    </BottomNavigation>;
}
