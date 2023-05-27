import {FC, useState} from "react";
import {SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from "react-swipeable-list";
import {Avatar, Box, Button, Typography} from "@mui/material";
import {FaStar} from "react-icons/fa";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from "../store/hooks";
import {remove} from "../store/cart";
import {CartItem as Item} from "../types/CartItem";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {getFoodsWith, removeFoodFromStorage, saveFoodToStorage, StorageType} from "../store/LocalStorage";
import { menuCard } from "./styled/Cards";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { count } from "console";


export const CartItemList: FC<CartItems> = (cart) => {
    const dispatch = useAppDispatch()
    return (<SwipeableList>
        {cart.items.map((item, idx) => {
            return (
                <SwipeableListItem
                    trailingActions={
                        trailingActions(() => dispatch(remove(item.id)))
                    } key={idx}>
                    <CartItemCart key={idx} food={item}/>
                </SwipeableListItem>)
        })}
    </SwipeableList>);
}

interface CartItems {
    items: Item[]
}



export const CartItemCart: FC<{ food: Item, key: number }> = (props) => {
    
    const [count, setCount] = useState<number>(props.food.quantity);

    const navigate = useNavigate();
    
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            props.food.quantity--;
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
        props.food.quantity++;
    };
    return (
        <Button disableRipple style={menuCard} onClick={() => {
            navigate(`/fooddetail/${props.food.id}`)
        }}>
            <Avatar sx={{width: 70, height: 70}}
                    src={props.food.imageUrl}/>
            <div style={{flexDirection: 'column'}}>
                <Typography color={'black'} fontSize={17} fontWeight={'bold'}>{props.food.name}</Typography>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Typography sx={{paddingRight: '5px'}} color={'black'} fontSize={15}
                                fontWeight={'bold'}>{props.food.price}원</Typography>
                    <Typography gutterBottom variant="body2" fontWeight={"bold"} color="text.secondary">
                        <FaStar style={{color: "orange"}}/> {props.food.avgStarRatio} ({props.food.rateCounts})
                    </Typography>
                </div>
            </div>
            <Box display="flex">
                    <Button disableElevation
                        style={{ minWidth: 'unset', borderRadius: '50%', color: '#FE724C' }}
                        onClick={(event) => {
                            event.stopPropagation(); // 이벤트 전파 중지
                            handleDecrement(); // 내부 버튼 이벤트 핸들러 실행
                        }}
                        startIcon={<MdRemoveCircleOutline />}
                    />
                    <Box
                        component="span"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                        }}
                    >
                        {count}
                    </Box>
                    <Button disableElevation
                        style={{ minWidth: 'unset', borderRadius: '50%', color: '#FE724C' }}
                        onClick={(event) => {
                            event.stopPropagation(); // 이벤트 전파 중지
                            handleIncrement(); // 내부 버튼 이벤트 핸들러 실행
                        }}
                        startIcon={<MdAddCircleOutline />}
                    />
                </Box>
            
        </Button>
    )
}

export const CartItemMenu: FC<{ food: Item, key: number }> = (props) => {
    const [liked, setLiked] = useState(
        getFoodsWith(StorageType.FAVORITE).filter((item: Item) => item.id === props.food.id).length !== 0
    );

    const navigate = useNavigate();
    const handleClick = () => {
        if (liked) {
            removeFoodFromStorage(StorageType.FAVORITE, props.food)
        } else {
            saveFoodToStorage(StorageType.FAVORITE, props.food)
        }
        console.log(localStorage.getItem("favorite"))
        setLiked(!liked);
    };
    
    return (
        <Button disableRipple style={menuCard} onClick={() => {
            navigate(`/fooddetail/${props.food.id}`)
        }}>
            <Avatar sx={{width: 70, height: 70}}
                    src={props.food.imageUrl}/>
            <div style={{flexDirection: 'column'}}>
                <Typography color={'black'} fontSize={17} fontWeight={'bold'}>{props.food.name}</Typography>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Typography sx={{paddingRight: '5px'}} color={'black'} fontSize={15}
                                fontWeight={'bold'}>{props.food.price}원</Typography>
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
        </Button>
    )
}

const trailingActions = (callback: () => void) => {
    return (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => callback()}>
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