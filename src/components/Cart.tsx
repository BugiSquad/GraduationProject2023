import React, {useState} from "react";
import {SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from "react-swipeable-list";
import {Avatar, Button, Typography} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {FaStar} from "react-icons/fa";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from "../store/hooks";
import {remove} from "../store/cart";
import {CartItem as Item} from "../types/CartItem";


interface Food {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}

export const CartItem: React.FC<Food> = ({id, name, price, imageUrl, description}, key: number) => {
    const [liked, setLiked] = useState(false);
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const removeFromCart = () => {
        dispatch(remove({id}))
        navigate("/cart")
    };
    const handleClick = () => {
        setLiked(!liked);
    };


    return (
        <SwipeableListItem trailingActions={trailingActions(() => dispatch(remove({id})))} key={key}>
            <Button disableRipple style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                margin: "5px",
                flex: "1",
                justifyContent: "space-between",
                alignItems: "center",
                minWidth: 280,
                backgroundColor: '#F4F4F4',
                color: "",
                fontWeight: "bold",
                borderRadius: "2rem",
                padding: "0.5rem",
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)"
            }} onClick={() => navigate('/fooddetail')}>
                <Avatar sx={{width: 70, height: 70}}
                        src={imageUrl}/>
                <div style={{flexDirection: 'column'}}>
                    <Typography color={'black'} fontSize={17} fontWeight={'bold'}>{name}</Typography>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Typography sx={{paddingRight: '5px'}} color={'black'} fontSize={15}
                                    fontWeight={'bold'}>{price}원</Typography>
                        <Typography gutterBottom variant="body2" fontWeight={"bold"} color="text.secondary">
                            <FaStar style={{color: "orange"}}/> 5.0 (10)
                        </Typography>
                    </div>
                </div>
                <Typography gutterBottom variant="body2" fontWeight={"bold"} color="text.secondary">
                    <Button
                        disableElevation disableRipple
                        sx={{
                            color: liked ? 'pink' : 'black'
                        }}
                        onClick={(event) => {
                            event.stopPropagation(); // 이벤트 전파 중지
                            handleClick(); // 내부 버튼 이벤트 핸들러 실행
                        }}
                    >
                        {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                    </Button>
                </Typography>
                <Button
                    onClick={(event) => {
                        removeFromCart()
                        event.stopPropagation(); // 이벤트 전파 중지
                    }}>
                    <DeleteIcon/>
                </Button>
            </Button>
        </SwipeableListItem>
    )
        ;
}

interface CartItems {
    items: Item[]
}

export const CartItemList: React.FC<CartItems> = (cart) => {
    return (<SwipeableList>
        {cart.items.map((item, idx) => CartItem(item, idx))}
    </SwipeableList>);
}

const trailingActions = (callback: () => void) => {
    return (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => {
                    console.info('swipe action triggered')
                    //callback()
                }}>
                <div style={{
                    background: "red",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column"
                }}><DeleteForeverIcon sx={{color: "white"}}/></div>
            </SwipeAction>
        </TrailingActions>
    );
}
