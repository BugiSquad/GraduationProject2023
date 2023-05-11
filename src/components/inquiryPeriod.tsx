import { useState } from "react";
import { RadioBarItem } from "./RadioBar"
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers";
import { OrangeButton } from "./styled/Buttons";
import { Button } from "@mui/material";


export const InquiryPeriodContent: React.FC = () => {
    const [index, setIndex] = useState<number>(0)

    const [selectedFromDate, setSelectedFromDate] = useState<Date | null>(null);
    const handleFromDateChange = (date: Date | null) => {
        if (date !== null) {
            if (date && selectedToDate && date > selectedToDate) {
                alert("시작날짜는 종료날짜보다 이후일 수 없습니다.");
                setSelectedFromDate(null);
            } else {
                setSelectedFromDate(date);
            }
        }
    };
    const [selectedToDate, setSelectedToDate] = useState<Date | null>(null);
    const handleToDateChange = (date: Date | null) => {
        if (date !== null) {
            if (date && selectedFromDate && date < selectedFromDate) {
                alert("종료날짜는 시작날짜보다 이전일 수 없습니다.");
                setSelectedToDate(null);
            } else {
                setSelectedToDate(date);
            }
        }
    };
    return (<div>
        <RadioBarItem names={["1주일", "1개월", "3개월"]} index={index} setIndex={setIndex} />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} sx={{ alignItems: "center" }}>
                <DemoItem>
                    <DatePicker
                        sx={{ maxWidth: "200px", width: "200px" }}
                        label={"부터"}
                        format="YYYY년 MM월 DD일"
                        value={selectedFromDate}
                        onChange={handleFromDateChange} />

                    <DatePicker
                        sx={{ maxWidth: "200px", width: "200px" }}
                        label={"까지"}
                        format="YYYY년 MM월 DD일"
                        value={selectedToDate}
                        onChange={handleToDateChange} />
                </DemoItem>

            </DemoContainer>
        </LocalizationProvider>
        <Button sx={OrangeButton}>조회</Button>
    </div>
    )
}