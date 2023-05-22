import React from 'react';
import { getFoodsWith, StorageType } from '../store/LocalStorage';
import { CartItem as Item } from '../types/CartItem';
import { CartItemMenu } from './Cart';
import { Typography } from '@mui/material';
import { normalTypography } from './styled/Text';

export const LikedMenuContents: React.FC = () => {
    const likedFoods: Item[] = getFoodsWith(StorageType.FAVORITE);
    return (

        <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
            {likedFoods.length > 0 ? <> {likedFoods.map((food: Item, index: number) => (
                <CartItemMenu key={index} food={food} />
            ))} </> : <Typography sx={normalTypography} color={"lightgrey"}>찜한 메뉴가 없습니다.</Typography>}
        </div>
    );
};

export default LikedMenuContents;
