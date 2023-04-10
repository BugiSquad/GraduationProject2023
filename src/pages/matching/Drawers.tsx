import React from "react";
import {DrawerContainer, DrawerType} from "../../components/DrawerContainer";
import {Filter} from "./Filter";
import {closeDrawer, closeFilter, openDrawer, openFilter} from "./states";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Write} from "./Write";

export const FilterDrawer: React.FC = () => {
    const isFilterOpen = useAppSelector(state => state.matchOptions.filter)
    const dispatch = useAppDispatch()
    const toggleDrawer = (open: boolean, name: String) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')) {
                return;
            }
            if (name === 'filter') {
                if (open) dispatch(openFilter());
                else dispatch(closeFilter());
            }
            return;
        };
    return (<>
        <DrawerContainer
            param={{
                name: "filter",
                type: DrawerType.BOTTOM,
                setState: toggleDrawer,
                state: isFilterOpen
            }}>
            <Filter/>
        </DrawerContainer>
    </>)
}
export const AddDrawer: React.FC = () => {
    const isAddOpen = useAppSelector(state => state.matchOptions.add)
    const dispatch = useAppDispatch()
    const toggleDrawer = (open: boolean, name: String) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')) {
                return;
            }
            if (name === 'add') {
                if (open) dispatch(openDrawer());
                else dispatch(closeDrawer());
            }
            return;
        };
    return (<>
        <DrawerContainer
            param={{
                name: "add",
                type: DrawerType.BOTTOM,
                setState: toggleDrawer,
                state: isAddOpen
            }}>
            <Write/>
        </DrawerContainer>
    </>)
}
