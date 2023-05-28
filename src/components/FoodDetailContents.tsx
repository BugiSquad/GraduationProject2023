import {Box, Button, FormControlLabel, Link, Modal, Paper, Radio, RadioGroup, Typography} from "@mui/material"
import {FaStar} from "react-icons/fa"
import React, {useState} from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {MdAddCircleOutline, MdRemoveCircleOutline} from 'react-icons/md';
import {useAppDispatch} from "../store/hooks";
import {add} from "../store/cart";
import {CartItem, ReviewItem} from "../types/CartItem";
import {useNavigate} from "react-router-dom";
import {ReviewBar} from "./ReviewBar";
import {ReviewList} from "./ReviwList";
import {getFoodsWith, removeFoodFromStorage, saveFoodToStorage, StorageType} from "../store/LocalStorage";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";
import {getMyToken} from "../api/Common";
import {ReviewContent} from "./ReviewContent";
import {WhiteButton} from "./styled/Buttons";


interface FoodDetailContentsProps {
    food: CartItem;
    reviews: ReviewItem[]
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export const FoodDetailContents: React.FC<FoodDetailContentsProps> = ({food, reviews}) => {
    const [count, setCount] = useState<number>(1);
    const [liked, setLiked] = useState<boolean>(
        getFoodsWith(StorageType.FAVORITE).filter((item: CartItem) => item.id === food.id).length !== 0
    );
    const [reviewText, setReviewText] = useState<string>("");
    const navigate = useNavigate();

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };
    const dispatch = useAppDispatch()

    const handleClick = () => {
        if (liked) {
            removeFoodFromStorage(StorageType.FAVORITE, food);
        } else {
            saveFoodToStorage(StorageType.FAVORITE, food);
        }
        setLiked(!liked);
    };
    const rateArray = [
        {rate: 1, ratio: 0, counts: 0},
        {rate: 2, ratio: 0, counts: 0},
        {rate: 3, ratio: 0, counts: 0},
        {rate: 4, ratio: 0, counts: 0},
        {rate: 5, ratio: 0, counts: 0}
    ]
    let totalCount = 0;
    reviews.forEach((item, idx) => {
        totalCount += 1;
        rateArray[Math.floor(item.rating) - 1].counts += 1;
    })

    axios.defaults.withCredentials = true
    const [open, setOpen] = React.useState(false);

    const handleOpen = async () => {
        setOpen(true);

    }
    const handleClose = () => {
        setOpen(false);
    }


    return (<>

            <div style={{display: 'flex', justifyContent: 'center', flexDirection: "column", paddingTop: '10px'}}>
                <Paper sx={{borderRadius: '1rem'}} elevation={3}>
                    <img src={food.imageUrl} alt="Food"
                         style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem'}}/>
                    <Box sx={{position: 'absolute', top: '10px', right: '10px'}}>
                        <Button
                            disableElevation
                            disableRipple
                            sx={{
                                translate: "0 0.5vh 0",
                                color: liked ? 'pink' : 'black',
                            }}
                            onClick={(event) => {
                                event.stopPropagation();
                                handleClick();
                            }}
                        >
                            {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                        </Button>
                    </Box>
                </Paper>
                <div style={{display: "flex", alignContent: "flex-start"}}>
                    <Typography fontSize={'28px'}
                                sx={{paddingTop: "10px", fontWeight: "bold"}}> {food.name}</Typography>
                </div>
                <div style={{display: "flex", alignContent: "flex-start"}}>
                    <Typography fontSize={'12px'} color={'#3EA1FC'}> 평균 소요시간 8분</Typography>
                </div>
                <div style={{display: "flex", alignContent: "flex-start", fontSize: '14px'}}>
                    <FaStar
                        style={{color: "orange"}}/> {food.totalRating === 0 ? 5.0 : food.totalRating.toFixed(2)} {`(${reviews.length})`}
                    <Link color={'#FE724C'} sx={{fontSize: '14px', paddingLeft: '10px'}}> 리뷰 보기</Link>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    paddingTop: '10px'
                }}>
                    <Typography fontSize={'24px'} fontWeight={'bold'} color={'#FE724C'}>{food.price}</Typography>
                    <Box display="flex">
                        <Button disableElevation
                                style={{minWidth: 'unset', borderRadius: '50%', color: '#FE724C'}}
                                onClick={handleDecrement}
                                startIcon={<MdRemoveCircleOutline/>}
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
                                style={{minWidth: 'unset', borderRadius: '50%', color: '#FE724C'}}
                                onClick={handleIncrement}
                                startIcon={<MdAddCircleOutline/>}
                        />
                    </Box>
                </div>
                <div style={{display: "flex", alignContent: "flex-start", paddingTop: '10px'}}>
                    <Typography fontSize={'18px'} fontWeight={'bold'}>설명</Typography>
                </div>
                <div style={{display: "flex", alignContent: "flex-start"}}>
                    <Typography align={'left'} fontSize={'15px'} fontWeight={'bold'}
                                color={'#858992'}>{food.description}</Typography>
                </div>
                <div style={{display: "flex", alignContent: "flex-start", paddingTop: '10px'}}>
                    <Typography fontSize={'18px'} fontWeight={'bold'}>포장여부</Typography>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", paddingTop: '10px'}}>
                    <div style={{alignContent: "flex-start", flexDirection: 'column', paddingTop: "13px"}}>
                        <Typography fontSize={'15px'}>포장</Typography>
                        <Typography sx={{paddingTop: "13px"}} fontSize={'15px'}>매장</Typography>
                    </div>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="togo" control={<Radio size='small'/>} label="-1000 ₩"
                                          labelPlacement="start"/>
                        <FormControlLabel value="here" control={<Radio size='small'/>} label="0 ₩"
                                          labelPlacement="start"/>
                    </RadioGroup>
                </div>
                <Button disableElevation disableRipple sx={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    margin: "5px",
                    flex: "1",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: 280,
                    backgroundColor: '#FE724C',
                    color: "",
                    fontWeight: "bold",
                    borderRadius: "2rem",
                    padding: "0.5rem",
                    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)"
                }} onClick={() => {
                    dispatch(add({...food, quantity: count}))
                    handleOpen()
                }}>
                    <Typography color={'white'}><ShoppingBagIcon/> 장바구니 담기</Typography>
                </Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{
                            ...style,

                            backgroundColor: '#FE724C',
                            borderRadius: '1rem',
                            padding: '1rem',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            maxWidth: '80%',
                            maxHeight: '80%',
                            overflow: 'auto',
                            borderColor: "#FE724C",
                            boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.3)"
                        }}
                    >
                        <Typography
                            id="modal-modal-title"
                            component="h1"
                            fontWeight="bold"
                            color="white"
                            fontSize="22px"
                            mb={2}
                        >
                            메뉴가 장바구니에 담겼습니다. </Typography>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingLeft: '30px',
                                paddingRight: '30px',
                            }}
                        >
                            <Typography fontSize={14} fontWeight="bold" color="white">
                                - {food.name}
                            </Typography>
                            <Typography fontSize={14} fontWeight="bold" color="white">
                                {count} 개
                            </Typography>

                        </div>
                        <Typography sx={{mt: 2}} fontSize={17} fontWeight="bold" color="white">
                            장바구니로 이동할까요?
                        </Typography>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <Button sx={{...WhiteButton, width: "50%"}} onClick={() => {
                                navigate('/cart')
                            }}>네!</Button>
                            <Button sx={{...WhiteButton, width: "50%"}} onClick={handleClose}>더 담을래요.</Button>
                        </div>
                    </Box>
                </Modal>

                <div className="ReviewBar"
                     style={{display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: "20px"}}>
                    <Typography fontWeight={'bold'} fontSize={18}> 리뷰</Typography>
                    {rateArray.reverse().map((item, idx) => {
                        return (
                            <ReviewBar rate={`${item.rate}점`} ratio={item.counts / totalCount * 100}
                                       counts={item.counts}/>)
                    })}
                </div>

                <div className="ReviewList"
                     style={{display: 'flex', flexDirection: "column", alignItems: "flex-start", paddingTop: "20px"}}>
                    {reviews.map((item, idx) => {
                        return (<ReviewList userId={item.memberCompactDto.name} dayBefore={"18일 전"} rating={item.rating}
                                            contents={item.text}/>)
                    })}
                </div>
                <div
                    style={{display: 'flex', flexDirection: "column", alignItems: "flex-start", paddingTop: "20px"}}>
                    <Typography fontWeight={'bold'} fontSize={18}> 리뷰 작성하기</Typography>
                    {getMyToken() == null || getMyToken() === "" ?
                        <Typography variant={"body2"}>로그인이 필요합니다.</Typography> :
                        <ReviewContent menuItem={food}></ReviewContent>}
                </div>
            </div>
        </>
    )
}