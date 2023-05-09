import { useState } from "react";
import { RadioBarItem, bgColor } from "./RadioBar"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";




const InquiryPeriod = [
    { name: "1주일", bgColor: bgColor, selectValue: false },
    { name: "1개월", bgColor: bgColor, selectValue: false },
    { name: "3개월", bgColor: bgColor, selectValue: false },
];

export const InquiryPeriodContent: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    return (<div>
        <RadioBarItem items={InquiryPeriod} />

        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DatePicker']}>
            <DatePicker 
            sx={{maxWidth:"50px", width:"50px"}} 
             format="YYYY년 MM월 DD일"
             value={selectedDate}
             onChange={handleChange}
              />
            </DemoContainer>
        </LocalizationProvider>
    </div>
    )
}