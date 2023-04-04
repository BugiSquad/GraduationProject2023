import {Drawer} from "@mui/material";
import React, {FC, ReactNode} from "react";

export enum DrawerType {
    TOP = "top", LEFT = "left", BOTTOM = "bottom", RIGHT = "right"
}

export interface DrawerContainerParam {
    state: boolean;
    type: DrawerType;
    setState: (b: boolean) => (event: (React.KeyboardEvent | React.MouseEvent)) => void;
}

export const DrawerContainer: FC<{ children: ReactNode, param: DrawerContainerParam }> = ({children, param}) => {
    return (
        <Drawer anchor={param.type}
                open={param.state}
                onClose={param.setState(false)}>
            {children}
        </Drawer>
    )
}