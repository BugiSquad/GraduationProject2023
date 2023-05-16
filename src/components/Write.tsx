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

interface FormProps {
    time: Dayjs;
    title: string;
    body: string;
    groupType: GroupType;
}

export const Write: React.FC = () => {
    const [props, setProps] = useState<FormProps>({
        title: "",
        body: "",
        groupType: GroupType.INDIVIDUAL,
        time: dayjs()
    });
    const dispatch = useAppDispatch();

    const titleProps = useMemo(() => ({
        label: "제목", value: props.title,
        variant: "outlined" as "outlined",
        onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setProps({...props, title: event.target.value == null ? "" : event.target.value})
        }
    }), [props]);

    const bodyProps = useMemo(() => ({
        label: "내용", value: props.body,
        multiline: true, minRows: 5,
        maxRows: 10, placeholder: "내용을 입력해주세요.",
        margin: "normal" as "normal", variant: "outlined" as "outlined",
        onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setProps({...props, body: event.target.value == null ? "" : event.target.value})
        }
    }), [props]);

    const onGroupTypeChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        let t = event.target.value as string;
        if (t === "INDIVIDUAL" || t === "ORGANIZATION")
            setProps({...props, groupType: GroupType[t]})
    }

    function onSubmit() {

        if (props.time == null || props.title.length === 0) return
        return () => {
            let timeToString = props.time.toISOString()
            let post: PostDto = {
                title: `${props.title}`,
                body: `${props.body}`,
                memberId: 1,
                scheduledMealTime: timeToString,
                groupType: props.groupType
            }
            createNewPost(post).then((res) => {
                console.log(res)
                dispatch(closeDrawer())
            })
        };
    }

    console.log(props.time)

    return (
        <Card id={"createMatch"} sx={{
            display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "center"
            , height: "70vh"
        }}>
            <Typography variant={"h6"} fontWeight={"bold"}>글 작성</Typography>
            <DrawerGrid container rowSpacing={1}>
                <Form onSubmit={onSubmit()}>
                    <DrawerGridChild item xs={12}>
                        <TextField {...titleProps}/>
                    </DrawerGridChild>
                    <DrawerGridChild item xs={12}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <LocaleProvider>
                                <DatePicker label="미팅 날짜" views={['day']} format={"MM월 DD일"}
                                            onChange={(value, context) => {
                                                if (value == null) return;
                                                if (value.diff(dayjs(), 'day') < 0) {
                                                    console.error("잘못된 시간을 선택")
                                                    return;
                                                }
                                                setProps({
                                                    ...props,
                                                    time: props.time.year(value.year()).month(value.month()).date(value.date())
                                                })
                                            }} value={props.time} minDate={dayjs().startOf("day")}
                                            maxDate={dayjs().add(7, 'day')}
                                            selectedSections={"day"}/>
                            </LocaleProvider>
                            <LocaleProvider>
                                <MobileTimePicker label={"미팅 시간"} format={"hh시 mm분"}
                                                  onChange={(value, context) => {
                                                      if (value == null) return;
                                                      if (value.diff(dayjs(), 'minute') < 0) {
                                                          console.error("잘못된 시간을 선택")
                                                          return;
                                                      }
                                                      setProps({
                                                          ...props,
                                                          time: props.time.hour(value.hour()).minute(value.minute())
                                                      })
                                                  }} value={props.time}/>
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