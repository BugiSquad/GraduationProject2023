import React, {useEffect} from 'react';
import data from './data/SampleFood.json'
import {Food} from "./types/Food";
import './App.css'
import {PageTemplate} from "./pages/PageTemplate";
import {MainPage} from "./pages/MainPage";

const foods: Food[] = data

function App() {
    useEffect(()=>{
        console.log("페이지를 로딩했음")
    })
    return (
        <>
            <PageTemplate param={{variant: "MainPage", pageHeaderName: "", showBackButton: false}}>
                <MainPage/>
            </PageTemplate>
        </>
    );
}

export default App;
