import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import FoodCard from "./FoodCard";
import { MenuItem } from "../types/MenuItem";
import { CartItem } from '../types/CartItem';

interface FoodCardSliderItems {
    foods: MenuItem[];
}

export const CustomGrid = styled(Grid)({
    position: 'relative',
    // display: 'flex',
    overflowY: 'scroll',
    scrollSnapType: 'y'
});

const MenuCardSlider: React.FC<FoodCardSliderItems> = ({ foods }) => {
    return (
        <>
            <CustomGrid>
                {foods.map((food, idx) => {
                    const cartItem = food as CartItem;
                    return (
                        <FoodCard
                            id={food.id}
                            name={food.name}
                            price={food.price}
                            imageUrl={food.imageUrl}
                            description={food.description}
                            avgStarRatio={cartItem.avgStarRatio}
                            rateCounts={cartItem.rateCounts}
                            quantity={cartItem.quantity}
                            key={idx} starRatio={cartItem.starRatio} />
                    );
                })}
            </CustomGrid>
        </>
    );
}

export default MenuCardSlider;