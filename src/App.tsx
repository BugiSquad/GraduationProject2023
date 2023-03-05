import React from 'react';
import logo from './logo.svg';
import FoodCardSlider from "./components/FoodCardSlider";
import {Food} from "./components/Food";
import './App.css'
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const foods: Food[] = [
    {
        name: "짜장면",
        price: 5000,
        image: "https://cdn.paris.spl.li/wp-content/uploads/535370-%ED%8C%8C%EC%86%A1%EC%86%A1%EC%A0%95%ED%86%B5%EC%A7%9C%EC%9E%A5%EB%A9%B4_%EC%8D%B8%EB%84%A4%EC%9D%BC2.png",
        description: "짜장면은 중국의 산둥 반도 지역의 가정식이었던 자장몐(炸醬麵)이 한국인의 입맛에 맞게 변하여 만들어진 음식이다."
    },

    {
        name: "짬뽕",
        price: 5500,
        image: "https://img-cf.kurly.com/shop/data/goodsview/20220711/gv00000336080_1.jpg",
        description: "이 음식은 중국 산둥식 \"차오마몐(중국어 간체자: 炒码面, 정체자: 炒碼麵, 병음: chǎomǎmiàn, 한자음: 초마면)\"에서 유래되었으며, 음식 이름은 일본어인 \"잔폰(일본어: ちゃんぽん)\"에서 유래하였다"
    },

    {
        name: "탕수육",
        price: 13000,
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2020/07/05/2e0e7c019f283bcc36d34cdee876d15b1.jpg",
        description: "돼지고기에 녹말 반죽을 묻혀서 기름에 튀긴 후 설탕과 식초, 채소, 녹말물을 주재료로 만든 새콤달콤한 소스를 곁들여 (부어먹는 또는 찍어먹는) 먹는 중화요리다."
    },
    {
        name: "볶음밥",
        price: 6000,
        image: "https://www.tefal.co.kr/medias/?context=bWFzdGVyfHJvb3R8MzMwMjB8aW1hZ2UvanBlZ3xoZDkvaDk0LzE0MDcwMjU5NzEyMDMwLmpwZ3w2MWU4ODA3MDFiNzU1NWNhNjU4MmJmNmE3NDVkYTgxYWNkODExNzAwMjQyZDhmMWVjOGEyYjQyMGQ2NTIyZDcz",
        description: "밥을 다른 재료와 함께 넣고 기름에 볶아 만든 음식의 통칭이다. 여기서는 한국의 볶음밥에 대해서만 다룬다."
    },
    {
        name: "짜장면",
        price: 5000,
        image: "https://cdn.paris.spl.li/wp-content/uploads/535370-%ED%8C%8C%EC%86%A1%EC%86%A1%EC%A0%95%ED%86%B5%EC%A7%9C%EC%9E%A5%EB%A9%B4_%EC%8D%B8%EB%84%A4%EC%9D%BC2.png",
        description: "짜장면은 중국의 산둥 반도 지역의 가정식이었던 자장몐(炸醬麵)이 한국인의 입맛에 맞게 변하여 만들어진 음식이다."
    },

    {
        name: "짬뽕",
        price: 5500,
        image: "https://img-cf.kurly.com/shop/data/goodsview/20220711/gv00000336080_1.jpg",
        description: "이 음식은 중국 산둥식 \"차오마몐(중국어 간체자: 炒码面, 정체자: 炒碼麵, 병음: chǎomǎmiàn, 한자음: 초마면)\"에서 유래되었으며, 음식 이름은 일본어인 \"잔폰(일본어: ちゃんぽん)\"에서 유래하였다"
    },

    {
        name: "탕수육",
        price: 13000,
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2020/07/05/2e0e7c019f283bcc36d34cdee876d15b1.jpg",
        description: "돼지고기에 녹말 반죽을 묻혀서 기름에 튀긴 후 설탕과 식초, 채소, 녹말물을 주재료로 만든 새콤달콤한 소스를 곁들여 (부어먹는 또는 찍어먹는) 먹는 중화요리다."
    },
    {
        name: "볶음밥",
        price: 6000,
        image: "https://www.tefal.co.kr/medias/?context=bWFzdGVyfHJvb3R8MzMwMjB8aW1hZ2UvanBlZ3xoZDkvaDk0LzE0MDcwMjU5NzEyMDMwLmpwZ3w2MWU4ODA3MDFiNzU1NWNhNjU4MmJmNmE3NDVkYTgxYWNkODExNzAwMjQyZDhmMWVjOGEyYjQyMGQ2NTIyZDcz",
        description: "밥을 다른 재료와 함께 넣고 기름에 볶아 만든 음식의 통칭이다. 여기서는 한국의 볶음밥에 대해서만 다룬다."
    },
    {
        name: "짜장면",
        price: 5000,
        image: "https://cdn.paris.spl.li/wp-content/uploads/535370-%ED%8C%8C%EC%86%A1%EC%86%A1%EC%A0%95%ED%86%B5%EC%A7%9C%EC%9E%A5%EB%A9%B4_%EC%8D%B8%EB%84%A4%EC%9D%BC2.png",
        description: "짜장면은 중국의 산둥 반도 지역의 가정식이었던 자장몐(炸醬麵)이 한국인의 입맛에 맞게 변하여 만들어진 음식이다."
    },

    {
        name: "짬뽕",
        price: 5500,
        image: "https://img-cf.kurly.com/shop/data/goodsview/20220711/gv00000336080_1.jpg",
        description: "이 음식은 중국 산둥식 \"차오마몐(중국어 간체자: 炒码面, 정체자: 炒碼麵, 병음: chǎomǎmiàn, 한자음: 초마면)\"에서 유래되었으며, 음식 이름은 일본어인 \"잔폰(일본어: ちゃんぽん)\"에서 유래하였다"
    },

    {
        name: "탕수육",
        price: 13000,
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2020/07/05/2e0e7c019f283bcc36d34cdee876d15b1.jpg",
        description: "돼지고기에 녹말 반죽을 묻혀서 기름에 튀긴 후 설탕과 식초, 채소, 녹말물을 주재료로 만든 새콤달콤한 소스를 곁들여 (부어먹는 또는 찍어먹는) 먹는 중화요리다."
    },
    {
        name: "볶음밥",
        price: 6000,
        image: "https://www.tefal.co.kr/medias/?context=bWFzdGVyfHJvb3R8MzMwMjB8aW1hZ2UvanBlZ3xoZDkvaDk0LzE0MDcwMjU5NzEyMDMwLmpwZ3w2MWU4ODA3MDFiNzU1NWNhNjU4MmJmNmE3NDVkYTgxYWNkODExNzAwMjQyZDhmMWVjOGEyYjQyMGQ2NTIyZDcz",
        description: "밥을 다른 재료와 함께 넣고 기름에 볶아 만든 음식의 통칭이다. 여기서는 한국의 볶음밥에 대해서만 다룬다."
    },

];

function App() {
    return (
        <>
            <div className="App container">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    {/*<FoodCard description={"짜장면은 중국의 산둥 반도 지역의 가정식이었던 자장몐(炸醬麵)이 한국인의 입맛에 맞게 변하여 만들어진 음식이다."}*/}
                    {/*          price={3000} name={"짜장면"}*/}
                    {/*          image={"https://cdn.paris.spl.li/wp-content/uploads/535370-%ED%8C%8C%EC%86%A1%EC%86%A1%EC%A0%95%ED%86%B5%EC%A7%9C%EC%9E%A5%EB%A9%B4_%EC%8D%B8%EB%84%A4%EC%9D%BC2.png"}></FoodCard>*/}
                </header>
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
                <br/> <br/> <br/> <br/>
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
            </div>
        </>
    );
}

export default App;
