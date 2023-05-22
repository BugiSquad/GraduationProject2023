import React from 'react';
import {getFoodsWith, StorageType} from '../store/LocalStorage';
import {CartItem as Item} from '../types/CartItem';
import {CartItem} from './Cart';
import {Typography} from "@mui/material";
import {normalTypography} from "./styled/Text";

export const LikedMenuContents: React.FC<{ flag: boolean }> = (props) => {
    let likedFoods: Item[] = getFoodsWith(StorageType.FAVORITE);
    if (props.flag && likedFoods.length > 3) likedFoods = likedFoods.slice(0, 3);
    if (likedFoods.length === 0) {
        return (<div style={{display: "flex", width: "100%", flexDirection: "column"}}>
            <Typography sx={normalTypography} color={"lightgrey"}>
                조회 내역이 없습니다.</Typography>
        </div>)
    }
    return (
        <div style={{display: "flex", width: "100%", flexDirection: "column"}}>
            {likedFoods.map((food: Item, index: number) => (
                <CartItem key={index} food={food}/>
            ))}
        </div>
    );
};

export default LikedMenuContents;
