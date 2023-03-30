import React from 'react';
import {Grid} from '@mui/material';
import {styled} from '@mui/system';
import FoodCard from "./FoodCard";
import {Food} from "./Food";

export const CustomGrid = styled(Grid)({
    position: 'relative',
    display: 'flex',
    overflowX: 'scroll',
    scrollSnapType: 'x'
});

interface FoodCardSliderItems {
    foods: Food[];
}

const FoodCardSlider: React.FC<FoodCardSliderItems> = ({foods}) => {
    return (
        <>
            <CustomGrid>
                {foods.map((food) =>
                    (<FoodCard name={food.name} price={food.price} image={food.image} description={food.description}/>)
                )};
            </CustomGrid>
        </>
    );
}

export default FoodCardSlider;
