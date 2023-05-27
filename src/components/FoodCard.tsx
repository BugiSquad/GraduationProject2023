import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {FaStar} from "react-icons/fa";
import {MenuItem} from "../types/MenuItem";
import 'react-swipeable-list/dist/styles.css';
import {useNavigate} from "react-router-dom";
import { resetScrollPosition } from "../pages/MainPage";
import {CartItem} from "../types/CartItem";
import shadows from "@mui/material/styles/shadows";




const FoodCard: React.FC<MenuItem & CartItem> = (props, key: number) => {
    //처음에는 하드코딩된 에셋 사용 추후에 객체를 받아서 동적으로 렌더링
    const navigate = useNavigate()

    return <>
        <Card onClick={() => {navigate(`/fooddetail/${props.id}`); resetScrollPosition();}} sx={{
            display: 'inline-block',
            position: "relative",
            flex: "0 0 auto",
            width: 345,
            borderRadius: "14px",
            marginLeft: '0.5rem',
            marginRight: '0.5rem',
            marginBottom:"0.5rem",
            boxShadow:"0px 5px 5px rgba(0, 0,0, 0.3)"
        }} key={key}>
            <CardMedia component={"img"} height={140} image={props.imageUrl} title={props.name}/>
            <CardContent>
                <Typography gutterBottom variant="h6" fontWeight={"bold"} component="div">
                    {props.name}
                </Typography>
                <Typography gutterBottom variant="body1" fontWeight={"bold"} component="div">
                    {props.price}원
                </Typography>
                <Typography style={{paddingTop: "0.5rem", paddingBottom: "0.5rem"}} gutterBottom variant="body2"
                            color="text.secondary">
                    {props.description}
                </Typography>
                <Typography gutterBottom variant="body2" fontWeight={"bold"} color="text.secondary">
                    <FaStar style={{color: "orange"}}/> {props.avgStarRatio} ({props.rateCounts})
                </Typography>
            </CardContent>
        </Card>

    </>;
}
export default FoodCard;