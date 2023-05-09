import React, {useState} from "react";
import {Tab, Tabs} from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../store/hooks";
import {toAPP, toCart, toCommunity, toMenu, toMyPage} from "../store/navgroup";
import '../components/BottomNavigationGroup.css'
import AddIcon from "@mui/icons-material/Add";

interface BottomNavigationGroupProps {
    tab: BottomNavigationTab;
}

export enum BottomNavigationTab {
    APP, COMMUNITY, MENU, CART, MYPAGE,
}

export const BottomNavigationGroup: React.FC<BottomNavigationGroupProps> = ({tab}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const onChange = (event: React.SyntheticEvent<Element, Event>, newValue: BottomNavigationTab) => {
        switch (newValue) {
            case BottomNavigationTab.APP:
                dispatch(toAPP())
                navigate("/app");
                break;
            case BottomNavigationTab.COMMUNITY:
                dispatch(toCommunity())
                navigate("/community");
                break;
            case BottomNavigationTab.CART:
                dispatch(toCart())
                navigate("/cart")
                break;
            case BottomNavigationTab.MENU:
                dispatch(toMenu())
                navigate("/menu")
                break;
            case BottomNavigationTab.MYPAGE:
                dispatch(toMyPage())
                navigate("/mypage")
                break;
        }
    }
    return (<>
        {/*<NavigationImpl1 onChange={onChange}/>*/}
        <NavigationImpl2 onChange={onChange}/>
    </>)
}

interface tmp {
    onChange: (event: React.SyntheticEvent<Element, Event>, newValue: BottomNavigationTab) => void;
}

export const NavigationImpl1: React.FC<tmp> = ({onChange}) => {
    return (
        <Tabs
            sx={{position: 'fixed', bottom: 0, left: 0, right: 0, background: "white"}}
            variant="fullWidth"
            onChange={onChange}
        >
            <Tab label="주문하기" icon={<LocalDiningIcon/>}/>
            <Tab label="매칭" icon={<PeopleIcon/>}/>
            <Tab label="장바구니" icon={<ShoppingCartIcon/>}/>
            <Tab label="커뮤니티" icon={<DashboardIcon/>}/>
            <Tab label="마이페이지" icon={<PersonIcon/>}/>
        </Tabs>)
}

export const NavigationImpl2: React.FC<tmp> = ({onChange}) => {
    const [lastClicked, setLastClick] = useState<number>(0)
    const ary = [
        {
            text: "App", icon: AddIcon
        },
        {
            text: "Matching", icon: AddIcon
        },
        {
            text: "Menu", icon: AddIcon
        },
        {
            text: "Community", icon: AddIcon
        },
        {
            text: "MyPage", icon: AddIcon
        },
    ]
    return (
        <div style={{background: "black", minHeight: "100px"}}>
            <div className={"navigation"}>
                <ul>
                    {ary.map((item, idx) => {
                        return (
                            <TabContent key={idx}
                                        className={lastClicked === idx ? "list active" : "list"}
                                        onClick={(event) => {
                                            setLastClick(idx)
                                        }}
                                        text={item.text} icon={item.icon}/>)
                    })}
                    <div className={"indicator"}></div>
                </ul>
            </div>
        </div>
    )
}

interface TabContentProps {
    className: string;
    onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    text: string;
    icon: any;
}

export const TabContent: React.FC<TabContentProps> = ({className, onClick, text, icon}) => {
    return (
        <li className={className} onClick={onClick}>
            <a>
                <span className={"icon"}><AddIcon></AddIcon></span>
                <span className={"text"}>{text}</span>
            </a>
        </li>
    )
}
