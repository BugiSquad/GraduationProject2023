import { Rating, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { normalTypography } from "./styled/Text";
import React from "react";


export const ReviewContent: React.FC = () => {
    const { ordersInfo } = useParams();
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
        ({ theme }) => `
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

    const [value, setValue] = React.useState<number | null>(2);


    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Typography sx={{ marginTop: "20px" }} fontWeight={'bold'} fontSize={'20px'}>{ordersInfo}</Typography>
                <div style={{ display: "flex", flexDirection: "row", alignItems:"center", marginTop:"10px", fontSize:"20px", width:"100%" }}>
                    <Typography>별점을 매겨주세요.</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </div>

                <StyledTextarea sx={{ marginTop: "10px" }}
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="리뷰를 작성해주세요."
                />
            </div>

        </>
    )
}