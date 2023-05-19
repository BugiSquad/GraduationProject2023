import React from "react";
import {Typography} from "@mui/material";
import {FilterAlt} from "@mui/icons-material";
import {SimpleTemplate} from "./PageTemplate";
import {Posts} from "../components/Posts";
import {useAppDispatch} from "../store/hooks";
import {closeDrawer, closeFilter, openDrawer, openFilter} from "../store/matching/drawer";
import {AddDrawer, FilterDrawer} from "../components/Drawers";
import AddIcon from '@mui/icons-material/Add';
import {OrangeCircleButton} from "../components/styled/Buttons";
import {BottomNavigationTab} from "../types/PageHeaderParam";


export const Matching: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "매칭", tab: BottomNavigationTab.MATCHING}}>
            <Content/>
        </SimpleTemplate>)
}

const Content: React.FC = () => {
    const dispatch = useAppDispatch()
    const toggleDrawer = (open: boolean, name: String) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')) {
                return;
            }
            switch (name) {
                case 'add':
                    if (open) dispatch(openDrawer());
                    else dispatch(closeDrawer());
                    break;
                case 'filter':
                    if (open) dispatch(openFilter());
                    else dispatch(closeFilter());
                    break;
            }
            return;
        };
    return (<>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{display: "inherit", alignItems: "center"}}>
                    <Typography variant={"body1"} fontWeight={"bold"}>같이 먹어요!</Typography>
                </div>
                <div style={{display: "inherit", alignItems: "center"}}>
                    <OrangeCircleButton sx={{background: "#FE724C"}} onClick={toggleDrawer(true, 'add')}>
                        <AddIcon style={{color: "white"}}/>
                    </OrangeCircleButton>
                    <OrangeCircleButton sx={{background: "#FE724C"}} onClick={toggleDrawer(true, 'filter')}>
                        <FilterAlt style={{color: "white"}}/>
                    </OrangeCircleButton>
                    <AddDrawer/>
                    <FilterDrawer/>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Posts/>
            </div>
        </div>
    </>)
}
