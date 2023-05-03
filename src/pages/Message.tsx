import React, {useEffect, useState} from "react";
import {Button, Card, IconButton, Typography} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {handleGoBack} from "./Detail/MyMessageDetail";
import HandshakeIcon from '@mui/icons-material/Handshake';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom";
import {BottomNavigationGroup} from "../components/BottomNavigationGroup";
import {faker} from "@faker-js/faker";
import {useAppSelector} from "../store/hooks";
import {getChat, sendChat} from "../api/Chat";

interface Message {
    id: number;
    profileUrl: string;
    name: string;
    message: string;
    createdAt: string;
    firstMessage: boolean;
}

export const Message: React.FC = () => {
    const [messageList, setMessageList] = useState<Message[]>([]);
    const [messageInput, setMessageInput] = useState<string>("");
    const idx = useAppSelector((state) => state.navIdx)
    const param = useParams()
    const id = param.id
    const getMessage = () => {
        getChat(Number(id)).then((res) => {
            let messages = res.data.map((message: any) => {
                return {
                    id: message.id,
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
    useEffect(() => {
        getMessage()
    }, [])
    const handleSendButtonClick = () => {
        if (messageInput.trim() === "") {
            return;
        }
        const newMessage = {
            id: messageList.length,
            sender: "me",
            content: messageInput.trim(),
        };
        // setMessageList([...messageList, newMessage]);
        sendChat(Number(id), 20, messageInput.trim()).then((res) => {
            getMessage()
        })
        setMessageInput("");
    };
    var sub_name = faker.name.firstName();
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
                        <ArrowBackIosNewIcon/></Button> {sub_name}님과의 쪽지</Typography>
                <div style={{display: "inherit", alignItems: "center", paddingRight: "10px"}}>
                    <Link to="/mypage/message/makeappointment"><IconButton><HandshakeIcon/></IconButton></Link>
                </div>
            </div>

            <Card sx={{
                minWidth: 200,
                minHeight: 500,
                padding: '10px 5',
                marginTop: '10px',
                backgroundColor: '#F0F0F0',
                borderRadius: '15px',
                //overflowY: 'auto',
            }}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{
                        alignSelf: 'flex-start',
                        backgroundColor: '#E5E5EA',
                        borderRadius: '10px',
                        padding: '10px',
                        margin: '5px'
                    }}>
                        <div style={{
                            display: "flex",
                            fontWeight: "bold",
                            fontSize: "7px",
                            alignSelf: 'flex-end'
                        }}>{sub_name}님
                        </div>
                        <div>안녕하세요! 반갑습니다.</div>
                    </div>
                </div>

                {messageList.map((message) => (
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div key={message.id} style={{
                            alignSelf: 'flex-end',
                            backgroundColor: '#007AFF',
                            color: 'white',
                            borderRadius: '10px',
                            padding: '10px',
                            margin: '5px'
                        }}>
                            <div style={{
                                display: "flex",
                                fontWeight: "bold",
                                fontSize: "7px",
                                alignSelf: 'flex-end'
                            }}>{message.name}</div>
                            <div>{message.message}</div>
                        </div>
                    </div>
                ))}

            </Card>
            <div className="input-group mb-3" style={{margin: '10px 0'}}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="메세지를 입력해보세요."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                        onClick={handleSendButtonClick}>
                    전송
                </button>
            </div>
            <BottomNavigationGroup idx={idx.cur}/>
        </div>
    )
}