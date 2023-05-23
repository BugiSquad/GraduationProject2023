import React from 'react';
import {getFoodsWith, StorageType} from '../store/LocalStorage';
import {CartItem as Item} from '../types/CartItem';
import {Typography} from "@mui/material";
import {normalTypography} from "./styled/Text";
import {CartItemMenu} from "./Cart";


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
                <CartItemMenu key={index} food={food}/>
            ))}
        </div>
    );
};

export default LikedMenuContents;
