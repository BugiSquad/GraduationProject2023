import {Button, Rating, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {styled} from '@mui/system';
import React from "react";
import {OrangeButton, WhiteButton} from "./styled/Buttons";
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography_joy from '@mui/joy/Typography';

import {MenuItem} from "../types/MenuItem";
import {ReviewDto} from "../types/CartItem";
import {getApiURL, getHeader} from "../api/Common";
import axios from "axios";

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const StyledTextarea = styled(TextareaAutosize)(
    ({theme}) => `
        width: 320px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
);

export const ReviewContent: React.FC<{ menuItem: MenuItem }> = (props) => {
    const {ordersInfo} = useParams();

    const [value, setValue] = React.useState<number | null>(5);
    const [text, setText] = React.useState('');

    const onSubmit = () => {
        let review = {
            menuId: props.menuItem.id,
            rating: foodRating[props.menuItem.id],
            text: text,
            title: "EmptyTitle"
        } as ReviewDto
        axios.post(`${getApiURL()}/review`, review, getHeader());
    }

    return (
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
                <Typography sx={{marginTop: "5%"}} fontWeight={'bold'} fontSize={'20px'}>{ordersInfo}</Typography>
                <ReviewStars foodRating={foodRating} setFoodRating={setFoodRating} menuId={props.menuItem.id}/>
                <ReviewTextArea text={text} setText={setText} onSubmit={onSubmit}/>
            </div>
        </>
    )
}
export const ReviewStars: React.FC<{
    foodRating: { [p: string]: number },
    setFoodRating: React.Dispatch<React.SetStateAction<{ [p: string]: number }>>,
    menuId: number
}> = (props) => {
    return (


        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
            fontSize: "20px",
            width: "100%"
        }}>
            <Typography>별점을 매겨주세요.</Typography>
            <Rating
                name="simple-controlled"
                value={props.foodRating[props.menuId] || null}
                onChange={(event, newValue) => {
                    if (newValue !== null) {
                        props.setFoodRating((prevFoodRating) => ({
                            ...prevFoodRating,
                            [props.menuId]: newValue,
                        }));
                    }
                }}
            />
        </div>)
}

export const ReviewTextArea: React.FC<{
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
    onSubmit: () => void
}> = (props) => {
    const addEmoji = (emoji: string) => () => props.setText(`${props.text}${emoji}`);
    return (<div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
        <Textarea
            placeholder="리뷰를 작성해주세요."
            value={props.text}
            onChange={(event) => props.setText(event.target.value)}
            minRows={15}

            startDecorator={
                <Box sx={{display: 'flex', gap: 0.5}}>
                    <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                        👍
                    </IconButton>
                    <IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
                        🏖
                    </IconButton>
                    <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
                        😍
                    </IconButton>
                </Box>
            }
            endDecorator={
                <Typography_joy level="body3" sx={{ml: 'auto'}}>
                    {props.text.length} 글자
                </Typography_joy>
            }
            sx={{width: "100%"}}
        />
        <div style={{display: "contents"}}>
            <Button sx={OrangeButton} onClick={props.onSubmit}
                    style={{width: "100%", borderRadius: "0.3rem"}}>등록</Button>
            <Button sx={WhiteButton} style={{width: "100%", borderRadius: "0.3rem"}}>취소</Button>
        </div>
    </div>)
}