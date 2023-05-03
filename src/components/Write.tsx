import React, {useMemo, useState} from "react";
import {Button, Card, TextField, Typography} from "@mui/material";
import {DatePicker, MobileTimePicker} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from "dayjs";
import 'dayjs/locale/ko';
import {LocaleProvider} from "./LocaleProvider";
import {Form} from "react-router-dom";
import {GroupType, Post} from "../types/Post";
import {createNewPost} from "../api/Post";

export const Write: React.FC = () => {
    const [time, setTime] = useState<Dayjs | null>(dayjs());
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")

    const handleTitleChange = (event: React.SyntheticEvent) => {
        // @ts-ignore
        setTitle(event.target.value as string)
    };
    const handleBodyChange = (event: React.SyntheticEvent) => {
        // @ts-ignore
        setBody(event.target.value as string)
    };
    const titleProps = useMemo(() => ({
        label: "제목",
        value: title,
        variant: "outlined" as "outlined",
        onChange: handleTitleChange,
    }), [title, handleTitleChange]);

    const bodyProps = useMemo(() => ({
        label: "내용",
        value: body,
        multiline: true,
        minRows: 5,
        maxRows: 10,
        placeholder: "내용을 입력해주세요.",
        margin: "normal" as "normal",
        variant: "outlined" as "outlined",
        onChange: handleBodyChange,
    }), [body, handleBodyChange]);

    // @ts-ignore
    return (
        <>
            <Card id={"createMatch"} sx={{
                display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "center"
                , height: "70vh"
            }}>
                {/*위로 추가하는 바 필요*/}
                <Typography variant={"h6"} fontWeight={"bold"}>글 작성</Typography>
                <Form onSubmit={() => {
                    let timeToString = time == null ? dayjs().toISOString() : time.toISOString()
                    let post: Post = {
                        title: `${title}`,
                        body: `${body}`,
                        memberId: 1,
                        scheduledMealTime: timeToString,
                        type: GroupType.MATCH
                    }
                    createNewPost(post).then((res) => {
                        console.log(res)
                    })
                }}>
                    <TextField {...titleProps}/>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <LocaleProvider>
                            <DatePicker label="미팅 날짜" views={['day']} format={"MM월 DD일"}
                                        onChange={(value) => setTime(value)}
                                        defaultValue={time} minDate={dayjs().startOf("day")}
                                        maxDate={dayjs().add(7, 'day')}
                                        selectedSections={"day"}/>
                        </LocaleProvider>
                        <LocaleProvider>
                            <MobileTimePicker label={"미팅 시간"} format={"hh시 mm분"} defaultValue={time}/>
                        </LocaleProvider>
                    </div>
                    <TextField {...bodyProps} />
                    <Button type={"submit"} sx={{display: "flex", background: "orange",}}>
                        <Typography sx={{color: "white"}}>작성</Typography>
                    </Button>
                </Form>
            </Card>
        </>
    )
}