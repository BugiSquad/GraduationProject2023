import React from 'react';
import {Grid} from '@mui/material';
import {styled} from '@mui/system';
import FoodCard from "./FoodCard";
import {MenuItem} from "../types/MenuItem";

export const CustomGrid = styled(Grid)({
    position: 'relative',
    display: 'flex',
    overflowX: 'scroll',
    scrollSnapType: 'x'
});

interface FoodCardSliderItems {
    foods: MenuItem[];
}

const FoodCardSlider: React.FC<FoodCardSliderItems> = ({foods}) => {
    return (
        <>
            <CustomGrid>
                {foods.map((food, idx) =>
                    (<FoodCard id={food.id} name={food.name} price={food.price} imageUrl={food.imageUrl}
                               description={food.description}
                               key={idx}/>)
                )};
            </CustomGrid>
        </>
    );
}

export default FoodCardSlider;
