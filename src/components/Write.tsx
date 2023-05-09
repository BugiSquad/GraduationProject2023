import React, {useMemo, useState} from "react";
import {Button, Card, FormControlLabel, Radio, RadioGroup, TextField, Typography} from "@mui/material";
import {DatePicker, MobileTimePicker} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from "dayjs";
import 'dayjs/locale/ko';
import {LocaleProvider} from "./LocaleProvider";
import {Form} from "react-router-dom";
import {GroupType, PostDto} from "../types/PostDto";
import {createNewPost} from "../api/Post";
import {OrangeButton} from "./styled/Buttons";
import {DrawerGrid, DrawerGridChild} from "./styled/DrawerGrid";
import {useAppDispatch} from "../store/hooks";
import {closeDrawer} from "../store/matching/drawer";


export const Write: React.FC = () => {
    const [time, setTime] = useState<Dayjs | null>(dayjs());
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [groupType, setGroupType] = useState<GroupType>(GroupType.INDIVIDUAL)
    const dispatch = useAppDispatch();

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
        if (t === "INDIVIDUAL" || t === "ORGANIZATION")
            setGroupType(GroupType[t])
    }

    function onSubmit(time: dayjs.Dayjs | null, title: string, body: string, groupType: GroupType) {
        return () => {
            let timeToString = time == null ? dayjs().toISOString() : time.toISOString()
            let post: PostDto = {
                title: `${title}`,
                body: `${body}`,
                memberId: 1,
                scheduledMealTime: timeToString,
                groupType: groupType
            }
            createNewPost(post).then((res) => {
                console.log(res)
                dispatch(closeDrawer())
            })
        };
    }

    return (
        <Card id={"createMatch"} sx={{
            display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "center"
            , height: "70vh"
        }}>
            <Typography variant={"h6"} fontWeight={"bold"}>글 작성</Typography>
            <DrawerGrid container rowSpacing={1}>
                <Form onSubmit={onSubmit(time, title, body, groupType)}>
                    <DrawerGridChild item xs={12}>
                        <TextField {...titleProps}/>
                    </DrawerGridChild>
                    <DrawerGridChild item xs={12}>
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
                    </DrawerGridChild>
                    <DrawerGridChild item xs={12}>
                        <Typography variant={"subtitle1"}> 모임 유형 </Typography>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            style={{display: "flex", flexDirection: "row"}}
                            defaultValue={GroupType.INDIVIDUAL}
                            name="radio-buttons-group"
                            onChange={onGroupTypeChanged}
                        >
                            <FormControlLabel value={`${GroupType.INDIVIDUAL}`} control={<Radio/>} label="개인"/>
                            <FormControlLabel value={`${GroupType.ORGANIZATION}`} control={<Radio/>} label="단체"/>
                        </RadioGroup>
                    </DrawerGridChild>

                    <DrawerGridChild item xs={12}>
                        <TextField {...bodyProps} />
                    </DrawerGridChild>

                    <DrawerGridChild item xs={12}>
                        <Button sx={OrangeButton} type={"submit"}>
                            <Typography sx={{color: "white"}}>작성</Typography>
                        </Button>
                    </DrawerGridChild>
                </Form>
            </DrawerGrid>
        </Card>
    )
}