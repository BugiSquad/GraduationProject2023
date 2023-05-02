import React, {useState} from "react";
import {Autocomplete, Button, Card, TextField, Typography} from "@mui/material";
import {DatePicker, MobileTimePicker} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from "dayjs";
import 'dayjs/locale/ko';
import {LocaleProvider} from "./LocaleProvider";
import data from '../data/SampleFood.json'
import {MenuItem} from "../types/MenuItem";

// @ts-ignore
const foods: MenuItem[] = data

export const Write: React.FC = () => {
    const [time, setTime] = useState<Dayjs | null>(dayjs());
    const [interests, setInterests] = useState<string[]>([]);
    return (
        <>
            <Card id={"createMatch"} sx={{
                display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "center"
                , height: "70vh"
            }}>
                {/*위로 추가하는 바 필요*/}
                <Typography variant={"h6"} fontWeight={"bold"}>글 작성</Typography>
                <TextField required id="outlined-required"
                           label="제목"
                           defaultValue="Hello World" margin={"normal"}
                />
                <Autocomplete
                    options={[...foods.map((item) => item.name)]}
                    renderInput={(params) => (
                        <TextField
                            label="관심사"
                            {...params}
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}/>)}
                    onChange={(event, value) => {
                        console.log(value)
                        if (value != null)
                            setInterests([value, ...interests])
                    }
                    }
                />
                {interests?.map((item, idx) => <Typography>{`${item}${idx}`}</Typography>)}

                <LocaleProvider>
                    <DatePicker label="미팅 날짜" views={['day']} format={"MM월 DD일"} onChange={(value) => setTime(value)}
                                defaultValue={time} minDate={dayjs().startOf("day")} maxDate={dayjs().add(7, 'day')}
                                selectedSections={"day"}/>
                </LocaleProvider>
                <LocaleProvider> <MobileTimePicker label={"미팅 시간"} format={"hh시 mm분"} defaultValue={time}/>
                </LocaleProvider>
                <Button>
                    <Card sx={{display: "flex", background: "orange",}}>
                        <Typography sx={{color: "white"}}>작성</Typography>
                    </Card>
                </Button>
            </Card>
        </>
    )
}