import { Food } from "./Food";
import React, { useState } from "react";
import { SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import { Avatar, Button, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { FaStar } from "react-icons/fa";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';



interface FoodList {
    foods: Food[]
}


export const CartItem: React.FC<Food> = ({ name, price, image, description }, key: number) => {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    };

    const navigate = useNavigate();

    return (
        <SwipeableListItem trailingActions={trailingActions()} key={key}>

            <Button disableRipple style={{
                paddingLeft: '10px', paddingRight: '10px', margin: "5px", flex: "1", justifyContent: "space-between", alignItems: "center", minWidth: 280, backgroundColor: '#F4F4F4', color: "", fontWeight: "bold", borderRadius: "2rem", padding: "0.5rem", boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)"
            }} onClick={() => navigate('/fooddetail')}>
                <Avatar sx={{ width: 70, height: 70 }}
                    src={image} />
                <div style={{ flexDirection: 'column' }}>
                    <Typography color={'black'} fontSize={17} fontWeight={'bold'}>{name}</Typography>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography sx={{ paddingRight: '5px' }} color={'black'} fontSize={15} fontWeight={'bold'}>{price}원</Typography>
                        <Typography gutterBottom variant="body2" fontWeight={"bold"} color="text.secondary">
                            <FaStar style={{ color: "orange" }} /> 5.0 (10)
                        </Typography>
                    </div>
                </div>
                <Typography gutterBottom variant="body2" fontWeight={"bold"} color="text.secondary">
                    <Button
                        disableElevation disableRipple
                        sx={{
                            color: liked ? 'pink' : 'black'
                        }}
                        onClick={handleClick}
                    >
                        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                </Typography></Button>
        </SwipeableListItem>
    );
}

export const CartItemList: React.FC<FoodList> = (list) => {
    return (<SwipeableList>
        {list.foods.map((food, idx) =>
            CartItem(food, idx)
        )}
    </SwipeableList>);
}

const trailingActions = () => (
    <TrailingActions>
        <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
        >
            <div style={{
                background: "red",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column"
            }}><DeleteForeverIcon sx={{ color: "white" }} /></div>
        </SwipeAction>
    </TrailingActions>
);