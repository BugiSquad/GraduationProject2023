import React, {useEffect, useState} from "react";
import {SimpleTemplate} from "../PageTemplate";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {IconButton} from "@mui/material";
import {MyMessage} from "../../components/MyMessage";
import {getNoteRoomsWith} from "../../api/NoteRoom";


export function handleGoBack() {
    window.history.back();
}

interface NoteInfo {
    postId: number;
    title: string;
    body: string;
    minutesLeftUntilMeal: number;
    groupType: 'INDIVIDUAL' | 'GROUP';
    noteRoomId: number;
    creatorId: number;
}

export const MyMessageDetail: React.FC = () => {
    const [noteRooms, setNoteRooms] = useState<NoteInfo[]>([]);
    useEffect(() => {
        getNoteRoomsWith(20).then((res) => {
            const data = res.data.data
            const notes = data.map((note: NoteInfo) => note)
            console.log(notes)
            setNoteRooms(notes)
        })
    }, [])
    return (
        <SimpleTemplate param={{pageHeaderName: "쪽지함 목록"}}>
            <div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingRight: "20px"
                }}>
                    <div></div>
                    <IconButton><DeleteOutlineIcon/></IconButton>
                </div>
                <MyMessage content="안녕하세요." date="2022-02-01"/>
                <MyMessage content="반갑습니다." date="2022-02-02"/>
                {noteRooms.map((value, idx) => <MyMessage content={value.title}
                                                          date={String(value.minutesLeftUntilMeal)}/>)}
            </div>
        </SimpleTemplate>
    )
}
