import {useState} from "react";
import {RadioBarItem} from "./RadioBar"
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from "@mui/x-date-pickers";


export const InquiryPeriodContent: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [index, setIndex] = useState<number>(0)
    const handleChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    return (<div>
            <RadioBarItem names={["1주일", "1개월", "3개월"]} index={index} setIndex={setIndex}/>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        sx={{maxWidth: "50px", width: "50px"}}
                        format="YYYY년 MM월 DD일"
                        value={selectedDate}
                        onChange={handleChange}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </div>
    )
}