import React from "react";
import {PageTemplate} from "./PageTemplate";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Card, Typography} from "@mui/material";


export const Mypage: React.FC = () => {
    return (
        <PageTemplate param={{variant: "WithName", pageHeaderName: "마이페이지", showBackButton: true}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Typography variant={"h6"} fontWeight={"bold"}>
                    <ArrowBackIosNewIcon fontSize="small"/> 마이페이지</Typography>
                <div style={{display: "inherit", alignItems: "center", color: "grey"}}>
                    <a href="">내 정보 수정</a>
                </div>
            </div>
            <div style={{}}>
                <Card sx={{
                    maxWidth: 2000,
                    minHeight: 560,
                    padding: '15px'
                }}>
                    <Card style={{
                        display: 'flex',
                        width: '100',
                        height: '100%',
                        padding: '15px',
                    }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <div>
                                <Typography style={{ fontSize: 15 }} variant={"h6"}>최근 주문 내역</Typography>
                            </div>
                        </div>
                    </Card>
                    <br />

                    <Card style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        padding: '15px',
                    }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <div>
                                <Typography style={{ fontSize: 15 }} variant={"h6"}>최근 만남</Typography>
                            </div>
                        </div>
                    </Card>
                    <br />

                    <Card style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        padding: '15px',
                    }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <div>
                                <Typography style={{ fontSize: 15 }} variant={"h6"}>나의 모임</Typography>
                            </div>
                        </div>
                    </Card>
                    <br />

                    <Card style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        padding: '15px',
                    }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <div>
                                <Typography style={{ fontSize: 15 }} variant={"h6"}>나의 쪽지함</Typography>
                            </div>
                        </div>
                    </Card>
                </Card>
            </div>
        </PageTemplate>
    )
}
