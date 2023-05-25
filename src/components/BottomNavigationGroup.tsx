import React, {useState} from "react";
import PersonIcon from "@mui/icons-material/Person";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../store/hooks";
import {toAPP, toCommunity, toMatching, toMenu, toMyPage} from "../store/navgroup";
import '../components/BottomNavigationGroup.css'
import GroupsIcon from '@mui/icons-material/Groups';
import {RestaurantMenu} from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import {BottomNavigationTab} from "../types/PageHeaderParam";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { resetScrollPosition } from "../pages/MainPage";


interface BottomNavigationGroupProps {
    tab: BottomNavigationTab;
    scroll: number[];
}


export const BottomNavigationGroup: React.FC<BottomNavigationGroupProps> = ({tab, scroll}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const changeTab = (value: BottomNavigationTab) => {
        switch (value) {
            case BottomNavigationTab.APP:
                dispatch(toAPP())
                navigate("/app");
                resetScrollPosition();
                break;
            case BottomNavigationTab.COMMUNITY:
                dispatch(toCommunity())
                navigate("/community");
                resetScrollPosition();
                break;
            case BottomNavigationTab.MENU:
                dispatch(toMenu())
                navigate("/menu")
                resetScrollPosition();

                break;
            case BottomNavigationTab.MATCHING:
                dispatch(toMatching())
                navigate("/matching")
                resetScrollPosition();

                break;
            case BottomNavigationTab.MYPAGE:
                dispatch(toMyPage())
                navigate("/mypage")
                resetScrollPosition();

                break;
        }

    }
    const onChange = (event: React.SyntheticEvent<Element, Event>, newValue: BottomNavigationTab) => changeTab(newValue)


    return (<NavigationImpl2 scroll={scroll} idx={tab} onChange={changeTab}/>)
}

interface tmp {
    idx: number;
    onChange: (newValue: BottomNavigationTab) => void;
    scroll: number[];
}


export const NavigationImpl2: React.FC<tmp> = ({idx, onChange, scroll}) => {
    const [lastClicked, setLastClick] = useState<number>(idx)
    const ary = [
        {text: "홈", icon: HomeIcon},
        {text: "게시판", icon: AssignmentIcon},
        {text: "메뉴", icon: RestaurantMenu},
        {text: "같이 먹기", icon: GroupsIcon},
        {text: "마이페이지", icon: PersonIcon},
    ];

    let diff = 0;
    if (scroll[1] - scroll[0] > 0) diff = 1;
    else if (scroll[1] - scroll[0] <= 0) diff = -1;
    return (
        <div className={`navigation ${diff > 0 && scroll[1] > 100 ? "scroll_down" : ""}`}
             style={{position: "fixed", bottom: "0vh", left: 0, right: '0',}}>
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
                                </a>
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}

