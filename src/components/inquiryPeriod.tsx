import {useState} from "react";
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from "@mui/x-date-pickers";

export const InquiryPeriodContent: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <div>
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