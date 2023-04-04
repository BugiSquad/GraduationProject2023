import { Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import { BottomNavigationGroup } from "../components/BottomNavigationGroup";
import { handleGoBack } from "./Detail/MyMessageDetail";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const MakeAppointment: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);


    const handleChange = (date: Date | null) => {
        setSelectedDate(date);
    };


    return (
        <div className="App container">
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: "25px" }}>
                <Typography variant={"h5"} fontWeight={'bold'}>
                    <Button onClick={handleGoBack} disableElevation>
                        <ArrowBackIosNewIcon sx={{ color: 'orange' }} /></Button> 약속잡기</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "20px", marginTop: "30px" }}>
                <Typography variant={"h6"} fontWeight={'bold'}>언제 볼래요?</Typography>
            </div>
            <Card sx={{
                minWidth: 200,
                minHeight: 90,
                padding: '10px 5',
                marginTop: '10px',
                borderRadius: '15px',
                border: '2px solid orange',
            }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "5px" }}>
                    <Button disableElevation disableRipple style={{ color: 'black', fontWeight: 'bold', marginLeft: "60px" }}>
                        <AccessTimeIcon />날짜 설정
                    </Button>
                    <Button disableElevation disableRipple style={{ color: 'black', fontWeight: 'bold', marginRight: "10px" }}>알림 추가</Button>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginBottom: "5px" }}>
                    <div style={{ marginLeft: "10px" }}><DatePicker selected={selectedDate} onChange={handleChange} dateFormat="yyyy년 MM월 dd일" /></div>
                    <Button>sss</Button>
                </div>

            </Card>
            <BottomNavigationGroup />
        </div>
    )
}

