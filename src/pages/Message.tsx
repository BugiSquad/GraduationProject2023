import React, {useEffect, useState} from "react";
import {Button, Card, IconButton, Typography} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {handleGoBack} from "./Detail/MyMessageDetail";
import HandshakeIcon from '@mui/icons-material/Handshake';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom";
import {BottomNavigationGroup} from "../components/BottomNavigationGroup";
import {useAppSelector} from "../store/hooks";
import {getNotesWith, sendNoteToRoom} from "../api/NoteRoom";
import {NoteMessage} from "../types/NoteMessage";


const me = 1

function MessageContent(message: NoteMessage) {
    return (<>
        <div style={{
            display: "flex",
            fontWeight: "bold",
            fontSize: "7px",
            alignSelf: 'flex-end'
        }}>{message.name}<Typography variant={"subtitle2"}>dummyTime</Typography></div>
        <div>{message.message}</div>
    </>);
}

function MyMessageBody(message: NoteMessage) {
    if (message.firstMessage)
        return <div>{message.message}</div>

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div key={message.id} style={{
                alignSelf: 'flex-end',
                backgroundColor: '#007AFF',
                color: 'white',
                borderRadius: '10px',
                padding: '10px',
                margin: '5px'
            }}>
                {MessageContent(message)}
            </div>
        </div>
    );
}

function OthersMessageBody(message: NoteMessage) {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{
                alignSelf: 'flex-start',
                backgroundColor: '#E5E5EA',
                borderRadius: '10px',
                padding: '10px',
                margin: '5px'
            }}>
                {MessageContent(message)}
            </div>
        </div>)
}

export const Message: React.FC = () => {
    const [messageList, setMessageList] = useState<NoteMessage[]>([]);
    const [messageInput, setMessageInput] = useState<string>("");
    const [roomName, setRoomName] = useState("Empty Name")
    const navIdx = useAppSelector((state) => state.navIdx)
    const param = useParams()
    const roomId = param.id
    const getMessage = () => {
        getNotesWith(Number(roomId), 20).then((res: any) => {
            setRoomName(res.data.data.groupTitle)
            console.log(res.data.data)
            const data = res.data.data
            let messages = data.notes.map((message: any) => {
                console.log(message.name)
                return {
                    id: message.id,
                    member_Id: 1,
                    profileUrl: message.profileUrl,
                    name: message.name,
                    message: message.message,
                    createdAt: message.createdAt,
                    firstMessage: message.firstMessage
                }
            })
            setMessageList([...messageList, ...messages])
        })
    }
    useEffect(() => getMessage(), [])
    const handleSendButtonClick = () => {
        if (messageInput.trim() === "") {
            return;
        }
        sendNoteToRoom(Number(roomId), 20, messageInput.trim()).then((res: any) => {
            getMessage()
        })
        setMessageInput("");
    };

    return (
        <div className="App container">
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "15px"
            }}>
                <Typography variant={"h6"} fontWeight={'bold'}>
                    <Button onClick={handleGoBack} disableElevation sx={{color: '#FE724C'}}>
                        <ArrowBackIosNewIcon/></Button> {roomName}</Typography>
                <div style={{display: "inherit", alignItems: "center", paddingRight: "10px"}}>
                    <Link
                        to={`/mypage/message/makeappointment/${roomId}`}><IconButton><HandshakeIcon/></IconButton></Link>
                </div>
            </div>

            <Card sx={{
                minWidth: 200,
                minHeight: 500,
                padding: '10px 5',
                marginTop: '10px',
                backgroundColor: '#F0F0F0',
                borderRadius: '15px',
            }}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{
                        alignSelf: 'flex-start',
                        backgroundColor: '#E5E5EA',
                        borderRadius: '10px',
                        padding: '10px',
                        margin: '5px'
                    }}>
                    </div>
                </div>

                {messageList.map((message) => {
                    let myId = 20
                    if (myId === message.member_Id)
                        return MyMessageBody(message)
                    else
                        return OthersMessageBody(message)
                })}

            </Card>
            <div className="input-group mb-3" style={{margin: '10px 0'}}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="메세지를 입력하세요."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                        onClick={handleSendButtonClick}> 전송
                </button>
            </div>
            <BottomNavigationGroup idx={navIdx.cur}/>
        </div>
    )
}