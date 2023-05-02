import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {FaStar} from "react-icons/fa";
import {MenuItem} from "../types/MenuItem";
import 'react-swipeable-list/dist/styles.css';

const FoodCard: React.FC<MenuItem> = ({name, price, imageUrl, description}, key: number) => {
    //처음에는 하드코딩된 에셋 사용 추후에 객체를 받아서 동적으로 렌더링

    return <>
        <Card sx={{
            display: 'inline-block',
            position: "relative",
            flex: "0 0 auto",
            width: 345,
            borderRadius: "14px",
            marginLeft: '0.5rem',
            marginRight: '0.5rem',
        }} key={key}>
            <CardMedia component={"img"} height={140} image={imageUrl} title={name}/>
            <CardContent>
                <Typography gutterBottom variant="h6" fontWeight={"bold"} component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="body1" fontWeight={"bold"} component="div">
                    {price}원
                </Typography>
                <Typography style={{paddingTop: "0.5rem", paddingBottom: "0.5rem"}} gutterBottom variant="body2"
                            color="text.secondary">
                    {description}
                </Typography>
                <Typography gutterBottom variant="body2" fontWeight={"bold"} color="text.secondary">
                    <FaStar style={{color: "orange"}}/> 5.0 (10)
                </Typography>
            </CardContent>
        </Card>

    </>;
}
export default FoodCard;