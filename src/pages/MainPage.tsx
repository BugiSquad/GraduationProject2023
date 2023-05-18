import React from 'react';
import FoodCardSlider from "../components/FoodCardSlider";
import { MenuItem } from "../types/MenuItem";
import '../App.css'
import { Card, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import data from '../data/SampleFood.json'
import noodleImage from '../images/foodCategory/noodles.png';
import soupImage from '../images/foodCategory/soup.png';
import bowlRiceImage from '../images/foodCategory/bowl-rice.png';
import mixedRiceImage from '../images/foodCategory/mixed-rice.png';
import { MainCategory } from '../components/MainCategory';
import Carousel from 'react-material-ui-carousel';
import Banner1 from '../images/banner1.png';
import Banner2 from '../images/banner2.png';
import Banner3 from '../images/banner3.png';

const foods: MenuItem[] = data

export const MainPage: React.FC = () => {
    return (
        <>
            <Carousel navButtonsAlwaysInvisible>
                <Paper elevation={0}><img src={Banner1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Paper>
                <Paper elevation={0}><img src={Banner2} style={{ width: '100%', height: '100%', objectFit: 'cover'}} /></Paper>
                <Paper elevation={0}><img src={Banner3} style={{ width: '100%', height: '100%', objectFit: 'cover'}} /></Paper>
            </Carousel>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Typography style={{ float: 'left', paddingLeft: '1rem' }}
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

                <MainCategory category={"면류"} img={noodleImage} />
                <MainCategory category={"찌개류"} img={soupImage} />
                <MainCategory category={"덮밥류"} img={bowlRiceImage} />
                <MainCategory category={"비빔밥류"} img={mixedRiceImage} />

            </div>
            <br />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: "1rem"
            }}>
                <Typography style={{ float: 'left', paddingLeft: '1rem' }}
                    fontWeight={"bold"} align={"left"}
                    variant={"h5"}
                    color={"text.secondary"}
                    gutterBottom>이번 주 인기메뉴</Typography>
                <Link to={"/thisweekpopular"}><Typography style={{ color: 'orange', float: 'right', paddingRight: '1rem' }}
                    fontWeight={"bold"} align={"left"}
                    variant={"subtitle2"}
                    color={"text.secondary"}
                    gutterBottom>더 보기</Typography></Link>
            </div>
            <div style={{ flexWrap: "nowrap" }}>
                <FoodCardSlider foods={foods} />
            </div>
            <br /> <br />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: "1rem"
            }}>
                <Typography style={{ float: 'left', paddingLeft: '1rem' }}
                    fontWeight={"bold"} align={"left"}
                    variant={"h5"}
                    color={"text.secondary"}
                    gutterBottom>최근에 선택한 메뉴</Typography>
                <Link to={"/recentmenu"}><Typography style={{ color: 'orange', float: 'right', paddingRight: '1rem' }}
                    fontWeight={"bold"} align={"left"}
                    variant={"subtitle2"}
                    color={"text.secondary"}
                    gutterBottom>더 보기</Typography></Link>
            </div>
            <div style={{ flexWrap: "nowrap" }}>
                <FoodCardSlider foods={foods} />
            </div>
            <br />

        </>
    )

}