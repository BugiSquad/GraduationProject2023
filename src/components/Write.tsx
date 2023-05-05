import React, {useMemo, useState} from "react";
import {Button, Card, FormControlLabel, Radio, RadioGroup, TextField, Typography} from "@mui/material";
import {DatePicker, MobileTimePicker} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from "dayjs";
import 'dayjs/locale/ko';
import {LocaleProvider} from "./LocaleProvider";
import {Form} from "react-router-dom";
import {GroupType, Post} from "../types/Post";
import {createNewPost} from "../api/Post";

/**
 * 게시글을 서버에 업로드 하는 함수
 * @param time 미팅이 이루어질 시간
 * @param title 게시글 제목
 * @param body 게시글 본문
 * @param groupType 미팅의 유형 1:1 다수
 */
function onSubmit(time: dayjs.Dayjs | null, title: string, body: string, groupType: GroupType) {
    return () => {
        let timeToString = time == null ? dayjs().toISOString() : time.toISOString()
        let post: Post = {
            title: `${title}`,
            body: `${body}`,
            memberId: 1,
            scheduledMealTime: timeToString,
            type: groupType
        }
        createNewPost(post).then((res) => {
            console.log(res)
        })
    };
}

export const Write: React.FC = () => {
    const [time, setTime] = useState<Dayjs | null>(dayjs());
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [groupType, setGroupType] = useState<GroupType>(GroupType.MATCH)

    const titleProps = useMemo(() => ({
        label: "제목", value: title,
        variant: "outlined" as "outlined",
        onChange: (event: React.SyntheticEvent) => {
            // @ts-ignore
            setTitle(event.target.value as string)
        }
    }), [title]);

    const bodyProps = useMemo(() => ({
        label: "내용", value: body,
        multiline: true, minRows: 5,
        maxRows: 10, placeholder: "내용을 입력해주세요.",
        margin: "normal" as "normal", variant: "outlined" as "outlined",
        onChange: (event: React.SyntheticEvent) => {
            // @ts-ignore
            setBody(event.target.value as string)
        }
    }), [body]);

    const onGroupTypeChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        let t = event.target.value as string;
        if (t === "MATCH" || t === "GROUP")
            setGroupType(GroupType[t])
    }

    return (
        <Card id={"createMatch"} sx={{
            display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "center"
            , height: "70vh"
        }}>
            <Typography variant={"h6"} fontWeight={"bold"}>글 작성</Typography>
            <Form onSubmit={onSubmit(time, title, body, groupType)}>
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
                <Typography variant={"subtitle1"}> 모임 유형 </Typography>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    style={{display: "flex", flexDirection: "row"}}
                    defaultValue={GroupType.MATCH}
                    name="radio-buttons-group"
                    onChange={onGroupTypeChanged}
                >
                    <FormControlLabel value={`${GroupType.MATCH}`} control={<Radio/>} label="개인"/>
                    <FormControlLabel value={`${GroupType.GROUP}`} control={<Radio/>} label="단체"/>
                </RadioGroup>
                <TextField {...bodyProps} />
                <Button type={"submit"} sx={{display: "flex", background: "orange",}}>
                    <Typography sx={{color: "white"}}>작성</Typography>
                </Button>
            </Form>
        </Card>
    )
}