import React, {useEffect, useState} from "react";
import {SimpleTemplate} from "../PageTemplate";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {IconButton} from "@mui/material";
import {MyMessage} from "../../components/MyMessage";
import {getIndividualRoom, getMyNoteRoom} from "../../api/NoteRoom";
import {useParams} from "react-router-dom";
import {GroupType} from "../../types/PostDto";
import {BottomNavigationTab} from "../../types/PageHeaderParam";


export function handleGoBack() {
    window.history.back();
}

interface NoteInfo {
    postId: number;
    title: string;
    body: string;
    minutesLeftUntilMeal: number;
    groupType: GroupType;
    noteRoomId: number;
    creatorId: number;
}

interface NoteGroup {
    postId: number;
    title: string;
    body: string;
    groupType: GroupType;
    noteRooms: NoteInfo[];
}

export const MyMessageDetail: React.FC = () => {
    const [noteRooms, setNoteRooms] = useState<NoteInfo[]>([]);
    const [noteGroups, setNoteGroup] = useState<NoteGroup[]>([])
    useEffect(() => {
        getMyNoteRoom().then((res) => {
            const data = res.data.data
            const notes = data.map((note: NoteInfo) => note)
            const tmp = notes.reduce((posts: NoteGroup[], note: NoteInfo) => {
                let filtered = posts.filter((item: NoteGroup) => item.postId === note.postId)
                if (filtered.length === 0)
                    posts.push({
                        noteRooms: [note],
                        body: note.body,
                        groupType: note.groupType,
                        postId: note.postId,
                        title: note.title
                    })
                else
                    posts.forEach((item) => {
                        if (item.postId === note.postId)
                            item.noteRooms = [...item.noteRooms, note]
                    })
                return posts
            }, [])
            console.log(notes)
            setNoteRooms(notes)
            console.log(tmp)
            setNoteGroup(tmp)
        })
    }, [])
    return (
        <SimpleTemplate param={{pageHeaderName: "쪽지함 목록", tab: BottomNavigationTab.MYPAGE}}>
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
                {
                    noteRooms.map((value, idx) => <MyMessage key={idx} content={value.title} count={3}
                                                             isGroup={value.groupType === GroupType.ORGANIZATION}
                                                             msgLinkTo={`/mypage/message/${value.noteRoomId}`}/>)
                }
                <GroupHeader group={noteGroups}/>
            </div>
        </SimpleTemplate>
    )
}

interface Prop {
    group: NoteGroup[]
}

const GroupHeader: React.FC<Prop> = ({group}) => {
    return (<>
            {/* {group.map((item, idx) =>
            <MyMessage content={`${item.groupType === GroupType.INDIVIDUAL ? "[개인]" : "[단체]"}${item.title}`}
                date={"10분 뒤"} />
        )} */}
        </>
    )
}


interface NoteRoomInfo {
    memberId: number;
    noteRoomId: number;
    profileUrl: string | null;
    name: string;
    lastMessage: string | null;
}


export const PersonalMessageDetail: React.FC = () => {
    const param = useParams()
    const postId = param.postId
    const [noteRooms, setNoteRooms] = useState<NoteRoomInfo[]>([])
    useEffect(() => {
        if (postId == null) return;
        getIndividualRoom(postId).then((res) => {
            const data = res.data.data
            setNoteRooms(data.map((item: NoteRoomInfo) => item))
        })
    }, [])
    noteRooms.forEach((item) => console.log(item))
    return (<>
        <SimpleTemplate param={{pageHeaderName: "쪽지함 목록", tab: BottomNavigationTab.MYPAGE}}>
            {/* {noteRooms.map((room, idx) =>
                <MyMessage content={room.name} date={room.memberId + "" + room.noteRoomId} />
            )} */}
        </SimpleTemplate>
    </>)
}
