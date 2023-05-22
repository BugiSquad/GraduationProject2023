import React from 'react';
import { getFoodsWith, StorageType } from '../store/LocalStorage';
import { CartItem as Item } from '../types/CartItem';
import { CartItemMenu } from './Cart';

export const LikedMenuContents: React.FC = () => {
    const likedFoods: Item[] = getFoodsWith(StorageType.FAVORITE);
    return (
        <div style={{display:"flex", width:"100%", flexDirection:"column" }}>
            {likedFoods.map((food: Item, index: number) => (
                <CartItemMenu key={index} food={food} />
            ))}
        </div>
    );
};

export default LikedMenuContents;
