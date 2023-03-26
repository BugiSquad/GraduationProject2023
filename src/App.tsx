import React, {useEffect} from 'react';
import data from './data/SampleFood.json'
import {Food} from "./components/Food";
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
            <PageTemplate >
                <MainPage/>
            </PageTemplate>
        </>
    );
}

export default App;
