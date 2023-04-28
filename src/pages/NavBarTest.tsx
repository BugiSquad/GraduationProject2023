import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";

export const NavBarTest: React.FC = () => {
    return (<>
        <BottomNavigation
            showLabels
            // sx = {{position: 'fixed', bottom: 0, left: 0, right: 0}}
            value={1}
            onChange={() => {
            }}
        >
            <BottomNavigationAction label="Recents" icon={<PersonIcon/>}/>
            <BottomNavigationAction label="Nearby" icon={<PersonIcon/>}/>
        </BottomNavigation>

    </>)
}