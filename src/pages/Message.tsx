import React, { useState } from "react";
import { Button, Card, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { handleGoBack } from "./Detail/MyMessageDetail";
import HandshakeIcon from '@mui/icons-material/Handshake';
import { PageTemplate } from "./PageTemplate";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { BottomNavigationGroup } from "../components/BottomNavigationGroup";

interface Message {
    id: number;
    sender: string;
    content: string;
}

export const Message: React.FC = () => {
    const [messageList, setMessageList] = useState<Message[]>([]);
    const [messageInput, setMessageInput] = useState<string>("");

    const handleSendButtonClick = () => {
        if (messageInput.trim() === "") {
            return;
        }
        const newMessage = {
            id: messageList.length,
            sender: "me",
            content: messageInput.trim(),
        };
        setMessageList([...messageList, newMessage]);
        setMessageInput("");
    };
    return (
        <div className="App container">
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop:"15px" }}>
            <Typography variant={"h6"} fontWeight={'bold'}>
                    <Button onClick={handleGoBack} disableElevation>
                        <ArrowBackIosNewIcon /></Button> @@@님과의 쪽지</Typography>
                <div style={{ display: "inherit", alignItems: "center", paddingRight: "10px" }}>
                    <Link to="/mypage/message/makeappointment" ><IconButton ><HandshakeIcon /></IconButton></Link>
                </div>
            </div>
            
            <Card sx={{
                minWidth: 200,
                minHeight: 300,
                padding: '10px 5',
                marginTop: '10px',
                backgroundColor: '#F0F0F0',
                borderRadius: '15px',
                //overflowY: 'auto',
            }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#E5E5EA', borderRadius: '10px', padding: '10px', margin: '5px' }}>
                        <div style={{ display: "flex", fontWeight: "bold", fontSize: "7px", alignSelf: 'flex-end' }}>@@@님</div>
                        <div>안녕하세요! 반갑습니다.</div></div>
                </div>

                {messageList.map((message) => (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div key={message.id} style={{ alignSelf: 'flex-end', backgroundColor: '#007AFF', color: 'white', borderRadius: '10px', padding: '10px', margin: '5px' }}>
                            <div style={{ display: "flex", fontWeight: "bold", fontSize: "7px", alignSelf: 'flex-end' }}>{message.sender}</div>
                            <div>{message.content}</div>
                        </div>
                    </div>
                ))}

            </Card>
            <div className="input-group mb-3" style={{ margin: '10px 0' }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="메세지를 입력해보세요."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSendButtonClick}>
                    전송
                </button>
            </div>
            <BottomNavigationGroup />
        </div>
    )
}