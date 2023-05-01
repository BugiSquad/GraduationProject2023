import { Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { ko } from "date-fns/esm/locale";
import { Places } from "../components/Places";
import { SimpleTemplate } from "./PageTemplate";

export const MakeAppointment: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);

    const handleChange = (date: Date | null) => {
        setSelectedDate(date);
    };
  

    return (
        <div className="App container">
            <SimpleTemplate param={{ pageHeaderName: "약속잡기" }}>
            </SimpleTemplate>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "10px", marginTop: "20px" }}>
                <Typography variant={"h6"} fontWeight={'bold'}>언제 볼래요?</Typography>
            </div>
            <Card sx={{
                padding: '10px 5',
                marginTop: '10px',
                borderRadius: '15px',
                border: '2px solid orange',
            }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "5px" }}>
                    <Button disableElevation disableRipple style={{ color: 'black', fontWeight: 'bold', marginLeft: "60px" }}>
                        <AccessTimeIcon />날짜 설정
                    </Button>
                    <Button disableElevation disableRipple style={{ color: 'black', fontWeight: 'bold', marginRight: "10px" }}><AccessAlarmIcon />알림 추가</Button>
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "5px", justifyContent: "space-between" }}>
                    <div style={{ margin: "10px", }}>
                        <DatePicker
                            locale={ko}
                            selected={selectedDate}
                            onChange={handleChange}
                            dateFormat="yyyy년 MM월 dd일" /></div>
                    <div style={{ margin: "10px", maxInlineSize: "110px" }}>
                        <DatePicker
                            selected={selectedTime}
                            onChange={(date) => setSelectedTime(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={5}
                            timeCaption="시간 설정"
                            dateFormat="h:mm aa"
                        />
                    </div>
                </div>

            </Card>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "10px", marginTop: "20px" }}>
                <Typography variant={"h6"} fontWeight={'bold'}>어디서 볼래요?</Typography>
            </div>
            <Places />
            {/*  */}
             </div>
    )
}

