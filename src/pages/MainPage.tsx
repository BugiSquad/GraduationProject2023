import React from 'react';
import FoodCardSlider from "../components/FoodCardSlider";
import {MenuItem} from "../types/MenuItem";
import '../App.css'
import {Avatar, Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import data from '../data/SampleFood.json'

const foods: MenuItem[] = data

export const MainPage:React.FC = ()=>{
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: "1rem",
                paddingLeft: '1rem',
                paddingRight: '1rem', height: '100px'
            }}>
                <Card style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    background: 'orange'
                }}>
                    <Typography style={{textAlign: 'center'}} variant={"subtitle2"}>
                        혼밥 방지!
                    </Typography>
                </Card>
            </div>
            <br/>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Typography style={{float: 'left', paddingLeft: '1rem'}}
                            fontWeight={"bold"} align={"left"}
                            variant={"h5"}
                            color={"text.secondary"}
                            gutterBottom>어떤 메뉴가 땡겨요?</Typography>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingBottom: "1rem"
            }}>
                <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png"/>
                <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png"/>
                <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png"/>
                <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png"/>
                <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png"/>
            </div>
            <br/>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: "1rem"
            }}>
                <Typography style={{float: 'left', paddingLeft: '1rem'}}
                            fontWeight={"bold"} align={"left"}
                            variant={"h5"}
                            color={"text.secondary"}
                            gutterBottom>이번 주 인기메뉴</Typography>
                <Link to={""}><Typography style={{color: 'orange', float: 'right', paddingRight: '1rem'}}
                                          fontWeight={"bold"} align={"left"}
                                          variant={"subtitle2"}
                                          color={"text.secondary"}
                                          gutterBottom>더 보기</Typography></Link>
            </div>
            <div style={{flexWrap: "nowrap"}}>
                <FoodCardSlider foods={foods}/>
            </div>
            <br/> <br/>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: "1rem"
            }}>
                <Typography style={{float: 'left', paddingLeft: '1rem'}}
                            fontWeight={"bold"} align={"left"}
                            variant={"h5"}
                            color={"text.secondary"}
                            gutterBottom>추천메뉴</Typography>
                <Link to={""}><Typography style={{color: 'orange', float: 'right', paddingRight: '1rem'}}
                                          fontWeight={"bold"} align={"left"}
                                          variant={"subtitle2"}
                                          color={"text.secondary"}
                                          gutterBottom>더 보기</Typography></Link>
            </div>
            <div style={{flexWrap: "nowrap"}}>
                <FoodCardSlider foods={foods}/>
            </div>
            <br/>

    </>
    )

}