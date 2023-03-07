import React from 'react';
import FoodCardSlider from "./components/FoodCardSlider";
import {Food} from "./components/Food";
import './App.css'
import {Avatar, BottomNavigation, BottomNavigationAction, Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PersonIcon from '@mui/icons-material/Person';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import DashboardIcon from '@mui/icons-material/Dashboard';
import data from './data/SampleFood.json'


const foods: Food[] = data

function App() {
    return (
        <>
            <div className="App container">
                {/*<header className="App-header">*/}
                {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
                {/*    <p>*/}
                {/*        Edit <code>src/App.tsx</code> and save to reload.*/}
                {/*    </p>*/}
                {/*    <a*/}
                {/*        className="App-link"*/}
                {/*        href="https://reactjs.org"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*    >*/}
                {/*        Learn React*/}
                {/*    </a>*/}

                {/*    /!*<FoodCard description={"짜장면은 중국의 산둥 반도 지역의 가정식이었던 자장몐(炸醬麵)이 한국인의 입맛에 맞게 변하여 만들어진 음식이다."}*!/*/}
                {/*    /!*          price={3000} name={"짜장면"}*!/*/}
                {/*    /!*          image={"https://cdn.paris.spl.li/wp-content/uploads/535370-%ED%8C%8C%EC%86%A1%EC%86%A1%EC%A0%95%ED%86%B5%EC%A7%9C%EC%9E%A5%EB%A9%B4_%EC%8D%B8%EB%84%A4%EC%9D%BC2.png"}></FoodCard>*!/*/}
                {/*</header>*/}
                <br/>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: "1rem",
                    paddingLeft: '1rem',
                    paddingRight: '1rem'
                }}>
                    <MenuIcon></MenuIcon>
                    <Typography variant={"h5"} fontStyle={"italic"} fontFamily={"serif"}>대충 적당한 이름</Typography>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
                </div>
                <br/>
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
                            혼자 화장실에서 밥 먹지 말아요
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
                <BottomNavigation
                    sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
                    showLabels
                    onChange={(event, newValue) => {
                        //use react router to navigate to another page
                    }}
                >
                    <BottomNavigationAction label="주문하기" icon={<LocalDiningIcon/>}/>
                    <BottomNavigationAction label="같이 먹기" icon={<Diversity1Icon/>}/>
                    <BottomNavigationAction label="커뮤니티" icon={<DashboardIcon/>}/>
                    <BottomNavigationAction label="마이페이지" icon={<PersonIcon/>}/>
                </BottomNavigation>
            </div>
        </>
    );
}

export default App;
