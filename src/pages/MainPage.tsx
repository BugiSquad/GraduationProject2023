import React, { useEffect, useState } from 'react';
import FoodCardSlider from "../components/FoodCardSlider";
import { MenuItem } from "../types/MenuItem";
import '../App.css'
import '../components/styled/BannerText.css'

import { Button, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


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
import { getPopularMenuFromRemote } from "../api/Favor";
import { getFoodsWith, StorageType } from "../store/LocalStorage";
import { checkNotificationSupported, checkPermission } from "../api/Notification";
import { RequestPermission } from "../components/RequestPermission";
import { WhiteButton } from '../components/styled/Buttons';
import { normalTypography } from '../components/styled/Text';


const foods: MenuItem[] = data

export const MainPage: React.FC = () => {
    const [monthFavorite, setMonthFavorite] = useState<MenuItem[]>([])
    const recently_viewed = getFoodsWith(StorageType.RECENTLY_VIEWED)
    const [perm, setPerm] = useState<boolean>(false);
    useEffect(() => {
        async function setupNotification() {
            setPerm(checkPermission)
        }

        getPopularMenuFromRemote().then((res) => {
            const data = res.data.data
            setMonthFavorite(data.map((item: any) => {
                return { ...item, id: item.menuId }
            }))
        })
        setupNotification().then()
    }, [])
    if (perm || !checkNotificationSupported())
        return (
            <>
                <BannerText />
                <MainCarousel />
                <MainCategories />
                <br />
                <FavoriteMenusCard title={"이번 달 인기 메뉴"} link={"/thisweekpopular"}
                    items={monthFavorite} />
                <br /> <br />
                <FavoriteMenusCard title={"최근에 선택한 메뉴"} link={"/recentmenu"}
                    items={recently_viewed.length === 0 ? foods : recently_viewed} />
                <br />
            </>
        )
    return (
        <>
            <BannerText />
            <MainCarousel />
            <MainCategories />
            <br />
            <FavoriteMenusCard title={"이번 달 인기 메뉴"} link={"/thisweekpopular"}
                items={monthFavorite} />
            <br /> <br />
            <FavoriteMenusCard title={"최근에 선택한 메뉴"} link={"/recentmenu"}
                items={recently_viewed.length === 0 ? foods : recently_viewed} />
            <br />
            <RequestPermission />
        </>
    )
}

const BannerText: React.FC = () => {
    return (
        <div id="text-container">
            <Typography id="animated-text" sx={normalTypography} style={{ margin: "0px" }} fontSize="13px">배너를 터치해서 매칭 기능을 사용해보세요!</Typography>
        </div>

    )
}


const MainCarousel: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div style={{ position: 'relative' }}>
            <Link onClick={resetScrollPosition} to={'/matching'}>
                <Carousel
                    navButtonsAlwaysInvisible
                    sx={{
                        paddingLeft: '0.5rem',
                        paddingRight: '0.5rem',
                        position: 'relative',
                    }}

                >
                    <Paper elevation={0}>
                        <img src={Banner1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Paper>
                    <Paper elevation={0}>
                        <img src={Banner2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Paper>
                    <Paper elevation={0}>
                        <img src={Banner3} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Paper>
                </Carousel>
            </Link>
            <Button
                sx={WhiteButton}
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '63%',
                    zIndex: 2,
                    borderRadius: "0.3rem",
                    boxShadow: "none"
                }}
                onClick={() => { navigate('/matching') }}
            >
                매칭 바로가기</Button>
        </div>



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
                <Typography style={{ float: 'left', paddingLeft: '0.5rem' }}
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
                <Link onClick={resetScrollPosition} style={{ textDecoration: "none", color: "black" }} to={"/menu/noodle"}><MainCategory category={"면류"}
                    img={noodleImage} /></Link>
                <Link onClick={resetScrollPosition} style={{ textDecoration: "none", color: "black" }} to={"/menu/stew"}><MainCategory category={"찌개류"}
                    img={soupImage} /></Link>
                <Link onClick={resetScrollPosition} style={{ textDecoration: "none", color: "black" }} to={"/menu/korean_food"}> <MainCategory
                    category={"한식"} img={mixedRiceImage} /></Link>
                <Link onClick={resetScrollPosition} style={{ textDecoration: "none", color: "black" }} to={"/menu/japan_food"}> <MainCategory
                    category={"일식"} img={bowlRiceImage} /></Link>
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
                <Typography style={{ float: 'left' }}
                    fontWeight={"bold"} align={"left"}
                    variant={"h5"}
                    color={"text.secondary"}
                    gutterBottom>{props.title}</Typography>
                <Link to={`${props.link}`}><Typography
                    style={{ color: 'orange', float: 'right', paddingRight: '0.5rem' }}

                    fontWeight={"bold"} align={"left"}
                    variant={"subtitle2"}
                    color={"text.secondary"}
                    gutterBottom>더 보기</Typography></Link>
            </div>
            <div style={{ flexWrap: "nowrap", transform: "-0.3rem, 0, 0" }}>
                <FoodCardSlider foods={props.items} />
            </div>
        </>
    )
}




export const resetScrollPosition=()=> {
    window.scrollTo(0, 0);
  }
  