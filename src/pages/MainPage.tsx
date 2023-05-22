import React, {useEffect, useState} from 'react';
import FoodCardSlider from "../components/FoodCardSlider";
import {MenuItem} from "../types/MenuItem";
import '../App.css'

import {Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";


import data from '../data/SampleFood.json'
import noodleImage from '../images/foodCategory/noodles.png';
import soupImage from '../images/foodCategory/soup.png';
import bowlRiceImage from '../images/foodCategory/bowl-rice.png';
import mixedRiceImage from '../images/foodCategory/mixed-rice.png';
import {MainCategory} from '../components/MainCategory';
import Carousel from 'react-material-ui-carousel';
import Banner1 from '../images/banner1.png';
import Banner2 from '../images/banner2.png';
import Banner3 from '../images/banner3.png';
import {getPopularMenuFromRemote} from "../api/Favor";
import {getFoodsWith, StorageType} from "../store/LocalStorage";

const foods: MenuItem[] = data

export const MainPage: React.FC = () => {
    const [monthFavorite, setMonthFavorite] = useState<MenuItem[]>([])
    const recently_viewed = getFoodsWith(StorageType.RECENTLY_VIEWED)
    useEffect(() => {
        getPopularMenuFromRemote().then((res) => {
            const data = res.data.data
            setMonthFavorite(data.map((item: any) => {
                return { ...item, id: item.menuId }
            }))
        })
    }, [])
    return (
        <>
            <MainCarousel></MainCarousel>
            <MainCategories></MainCategories>
            <br />
            <FavoriteMenusCard title={"이번 달 인기 메뉴"} link={"/thisweekpopular"} items={monthFavorite}></FavoriteMenusCard>
            <br /> <br />
            <FavoriteMenusCard title={"최근에 선택한 메뉴"} link={"/recentmenu"}
                items={recently_viewed.length === 0 ? foods : recently_viewed}></FavoriteMenusCard>
            <br />

        </>
    )
}


const MainCarousel: React.FC = () => {
    return (
        <Carousel navButtonsAlwaysInvisible sx={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
        }}>
            <Paper elevation={0}><img src={Banner1}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Paper>
            <Paper elevation={0}><img src={Banner2}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Paper>
            <Paper elevation={0}><img src={Banner3}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Paper>
        </Carousel>
    )
}
const MainCategories: React.FC = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Typography style={{float: 'left', paddingLeft: '0.5rem'}}
                            fontWeight={"bold"} align={"left"}
                            variant={"h5"}
                            color={"text.secondary"}
                            gutterBottom>어떤 메뉴가 땡겨요?</Typography>

            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem"
            }}>
                <Link style={{textDecoration: "none", color: "black"}} to={"/menu/noodle"}><MainCategory category={"면류"}
                                                                                                         img={noodleImage}/></Link>
                <Link style={{textDecoration: "none", color: "black"}} to={"/menu/stew"}><MainCategory category={"찌개류"}
                                                                                                       img={soupImage}/></Link>
                <Link style={{textDecoration: "none", color: "black"}} to={"/menu/korean_food"}> <MainCategory
                    category={"한식"} img={mixedRiceImage}/></Link>
                <Link style={{textDecoration: "none", color: "black"}} to={"/menu/japan_food"}> <MainCategory
                    category={"일식"} img={bowlRiceImage}/></Link>
            </div>
        </>
    )
}

interface FavoriteMenusCardProps {
    title: string;
    link: string;
    items: MenuItem[];
}

const FavoriteMenusCard: React.FC<FavoriteMenusCardProps> = (props) => {
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem"
            }}>
                <Typography style={{float: 'left'}}
                            fontWeight={"bold"} align={"left"}
                            variant={"h5"}
                            color={"text.secondary"}
                            gutterBottom>{props.title}</Typography>
                <Link to={`${props.link}`}><Typography
                    style={{color: 'orange', float: 'right', paddingRight: '0.5rem'}}

                    fontWeight={"bold"} align={"left"}
                    variant={"subtitle2"}
                    color={"text.secondary"}
                    gutterBottom>더 보기</Typography></Link>
            </div>
            <div style={{flexWrap: "nowrap", transform: "-0.3rem, 0, 0"}}>
                <FoodCardSlider foods={props.items}/>
            </div>
        </>
    )
}
