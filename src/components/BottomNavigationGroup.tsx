import React, {useState} from "react";
import PersonIcon from "@mui/icons-material/Person";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../store/hooks";
import {toAPP, toCart, toCommunity, toMenu, toMyPage} from "../store/navgroup";
import '../components/BottomNavigationGroup.css'
import GroupsIcon from '@mui/icons-material/Groups';
import {RestaurantMenu} from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';


interface BottomNavigationGroupProps {
    tab: BottomNavigationTab;
}

export enum BottomNavigationTab {
    APP, COMMUNITY, MENU, CART, MYPAGE,
}

export const BottomNavigationGroup: React.FC<BottomNavigationGroupProps> = ({tab}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const changeTab = (value: BottomNavigationTab) => {
        switch (value) {
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
    const onChange = (event: React.SyntheticEvent<Element, Event>, newValue: BottomNavigationTab) => changeTab(newValue)


    return (<NavigationImpl2 idx={tab} onChange={changeTab}/>)
}

interface tmp {
    idx: number;
    onChange: (newValue: BottomNavigationTab) => void;
}


export const NavigationImpl2: React.FC<tmp> = ({idx, onChange}) => {
    const [lastClicked, setLastClick] = useState<number>(idx)
    const ary = [
        {text: "홈", icon: HomeIcon},
        {text: "같이 먹기", icon: GroupsIcon},
        {text: "메뉴", icon: RestaurantMenu},
        {text: "장바구니", icon: ShoppingCartIcon},
        {text: "마이페이지", icon: PersonIcon},
    ]

    return (
        <div className={'body'} style={{position: "fixed", bottom: "1vh", left: 0, right: '0'}}>
            <div className={"navigation"}>
                <ul>
                    {ary.map((item, idx) => {
                        return (
                            <li
                                key={idx}
                                className={lastClicked === idx ? "list active" : "list"}
                                onClick={(event) => {
                                    onChange(idx)
                                    setLastClick(idx)
                                }}>
                                <a>
                                    <span className={"icon"}><item.icon
                                        sx={{color: lastClicked === idx ? "#FE724C" : "black"}}/></span>
                                    {/*<span className={"text"}>{item.text}</span>*/}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

