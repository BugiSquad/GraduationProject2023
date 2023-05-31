import {Avatar, Button, Card, Checkbox, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import {ko} from "date-fns/esm/locale";
import {Places} from "../components/Places";
import {SimpleTemplate} from "./PageTemplate";
import {useParams} from "react-router-dom";
import {getNoteRoomMembers} from "../api/NoteRoom";
import {PostRoomMember} from "../types/PostRoomMember";
import {PromiseInfo} from "../types/PromiseInfo";
import {makePromise} from "../api/Promise";
import {BottomNavigationTab} from "../types/PageHeaderParam";

export const MakeAppointment: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);
    const [selectedPlace, setSelectedPlace] = useState<string | null>(null)
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
    const [members, setMembers] = useState<PostRoomMember[]>([])
    const [checked, setChecked] = useState<boolean[]>([])

    const param = useParams()
    const noteRoomId = param.noteRoomId
    const handleChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        getNoteRoomMembers(Number(noteRoomId)).then((res) => {
            const data = res.data.data
            const members = data.map((member: PostRoomMember) => member).filter((member: PostRoomMember) => member.memberId !== -1)
            console.log(members)
            setChecked(new Array(members.size).fill(false))
            setMembers(members)
        })
    }, [])

    const onSubmit = () => {
        const roomId = Number(noteRoomId)
        const location = String(selectedPlace)
        let membersIds = Array.of<number>()
        checked.forEach((value: boolean, idx: number) => {
            if (value) membersIds.push(Number(members[idx].memberId))
        })
        if (membersIds.length === 0) return
        if (selectedTime == null) return
        const payload: PromiseInfo = {
            noteRoomId: roomId,
            location: location,
            promiseMemberIds: membersIds,
            promiseTime: selectedTime?.toISOString()
        }
        makePromise(payload).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.warn(err)
        })
    }


    return (
        <SimpleTemplate param={{pageHeaderName: "약속잡기", tab: BottomNavigationTab.COMMUNITY}}>
            <div style={{display: "flex", flexDirection: "row", marginLeft: "10px", marginTop: "20px"}}>
                <Typography variant={"h6"} fontWeight={'bold'}>언제 볼래요?</Typography>
            </div>
            <Card sx={{
                padding: '10px 5',
                marginTop: '10px',
                borderRadius: '15px',
                border: '2px solid orange',
            }}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "5px"}}>
                    <Button disableElevation disableRipple
                            style={{color: 'black', fontWeight: 'bold', marginLeft: "60px"}}>
                        <AccessTimeIcon/>날짜 설정
                    </Button>
                    <Button disableElevation disableRipple
                            style={{color: 'black', fontWeight: 'bold', marginRight: "10px"}}><AccessAlarmIcon/>시간
                        설정</Button>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                    justifyContent: "space-between"
                }}>
                    <div style={{margin: "10px",}}>
                        <DatePicker
                            locale={ko}
                            selected={selectedDate}
                            onChange={handleChange}
                            dateFormat="yyyy년 MM월 dd일"/></div>
                    <div style={{margin: "10px", maxInlineSize: "110px"}}>
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
            <MemberCheckBoxGroup members={members} checked={checked} setChecked={setChecked}/>
            <div style={{display: "flex", flexDirection: "row", marginLeft: "10px", marginTop: "20px"}}>
                <Typography variant={"h6"} fontWeight={'bold'}>어디서 볼래요?</Typography>
            </div>
            <Places setSelectedIdx={setSelectedIdx} setSelectedPlaceName={setSelectedPlace} selectedIdx={selectedIdx}
                    selectedPlaceName={selectedPlace}/>

            <div style={{display: "flex", flexDirection: "row"}}>
                <Button disableElevation disableRipple sx={{paddingLeft: "80px"}} onClick={onSubmit}>
                    <Typography sx={{
                        minWidth: "70px",
                        height: "40px",
                        backgroundColor: '#FE724C',
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                        borderRadius: "1rem",
                        padding: "0.5rem",
                        boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
                    }}>약속잡기</Typography>
                </Button>
                <Button disableElevation disableRipple sx={{paddingRight: "80px"}}>
                    <Typography sx={{
                        minWidth: "70px",
                        height: "40px",
                        backgroundColor: 'white',
                        color: "#FE724C",
                        fontWeight: "bold",
                        fontSize: "14px",
                        borderRadius: "1rem",
                        padding: "0.5rem",
                        boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
                    }}>취소</Typography>
                </Button>
            </div>
        </SimpleTemplate>)
}

interface MembersProps {
    members: PostRoomMember[];
    checked: boolean[];
    setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const MemberCheckBoxGroup: React.FC<MembersProps> = ({members, checked, setChecked}) => {
    const onChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        const idx = Number(event.target.id)
        const newChecked = [...checked];
        newChecked[idx] = event.target.checked;
        setChecked(newChecked);
    }
    return (<>
        {members.map((member, idx) => {
            const url = member.profileUrl == null ? "" : member.profileUrl
            const lastMessage = member.lastMessage == null ? " " : member.lastMessage
            return (
                <Card sx={{display: "flex", flexDirection: "row"}}>
                    <Avatar sx={{flex: 1}} src={url}/>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        flex: 3
                    }}>
                        <Typography variant={"h6"}>{member.name}</Typography>
                        <Typography variant={"h6"}>{lastMessage}</Typography>
                    </div>
                    <Checkbox sx={{flex: 1}} checked={!!checked[idx]} id={String(idx)} onChange={onChecked}/>
                </Card>
            )
        })}
    </>)
}

