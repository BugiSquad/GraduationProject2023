import {FC, useState} from "react";
import {SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from "react-swipeable-list";
import {Avatar, Button, Typography} from "@mui/material";
import {FaStar} from "react-icons/fa";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from "../store/hooks";
import {remove} from "../store/cart";
import {CartItem as Item} from "../types/CartItem";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {getFoodsWith, removeFoodFromStorage, saveFoodToStorage, StorageType} from "../store/LocalStorage";


export const CartItemList: FC<CartItems> = (cart) => {
    const dispatch = useAppDispatch()
    return (<SwipeableList>
        {cart.items.map((item, idx) => {
            return (
                <SwipeableListItem
                    trailingActions={
                        trailingActions(() => dispatch(remove(item.id)))
                    } key={idx}>
                    <CartItem key={idx} food={item}/>
                </SwipeableListItem>)
        })}
    </SwipeableList>);
}

interface CartItems {
    items: Item[]
}


export const CartItem: FC<{ food: Item, key: number }> = (props) => {
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
        }} onClick={() => {
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
