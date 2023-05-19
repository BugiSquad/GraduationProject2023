import {SimpleTemplate} from "./PageTemplate";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import React, {useEffect, useState} from "react";
import {BoardCard} from "../components/BoardCard";
import {Button, Card, Grid, Typography} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import {getNoticeFromRemote} from "../api/Notice";

export const Community: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "커뮤니티", tab: BottomNavigationTab.COMMUNITY}}>
            <Content></Content>
        </SimpleTemplate>
    )

}

const Content: React.FC = () => {
    const [noticeItems, setNoticeItems] = useState<NoticeInfo[]>([])
    useEffect(() => {
        getNoticeFromRemote().then((res) => {
            const content: NoticeInfo[] = res.data.data.content
            setNoticeItems(content)
            console.log(content)
        })
    }, [])
    return (<>
        <BoardCard title={"공지사항"}
                   content={<div style={{display: "flex", flexDirection: "column"}}>{noticeItems.map((item, idx) =>
                       <NoticeItem key={idx} info={item}></NoticeItem>)}</div>} link={""}/>
        <BoardCard title={"투표"} content={<FavoriteMenuVote></FavoriteMenuVote>} link={""}/>
    </>)
}

interface NoticeInfo {
    title: string,
    informationId: number;
    modifiedAt: Date;
}

interface NoticeItemProps {
    info: NoticeInfo
}

const NoticeItem: React.FC<NoticeItemProps> = (props) => {
    return (
        <Card sx={{
            display: "flex",
            margin: "20px",
            flex: "1",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: 280,
            maxWidth: 400
        }}>
            <Typography variant={"subtitle2"} fontWeight='bold'>{props.info.informationId}</Typography>
            <Typography
                variant={"subtitle2"}>{props.info.title}</Typography>
            <Typography variant={"subtitle2"} fontWeight='bold'
                        style={{color: "#FE724C"}}>{props.info.modifiedAt.toLocaleString()}</Typography>
        </Card>
    )
}
const FavoriteMenuVote: React.FC = () => {
    const pollQuestion = 'Is react-polls useful?'
    const pollAnswers = [
        {option: '메뉴1', votes: 14},
        {option: '메뉴2', votes: 2},
        {option: '메뉴3', votes: 8},
        {option: '메뉴4', votes: 2}
    ].sort((a, b) => {
        if (a.votes > b.votes) return -1;
        else if (a.votes === b.votes) return 0;
        else return 1;
    })
    let flag = false;
    if (flag) return (<VoteResult pollAnswers={pollAnswers}></VoteResult>)
    else return (<VoteButtons pollAnswers={pollAnswers}></VoteButtons>)
}
const VoteResult: React.FC<{ pollAnswers: { option: string, votes: number }[] }> = (prop) => {
    let totalCount = 0
    prop.pollAnswers.forEach((answer) => totalCount += answer.votes)
    return (
        <Grid container spacing={2} style={{width: "100%", alignItems: "center"}}>
            {prop.pollAnswers.map((item, idx) => {
                return (
                    <>
                        <Grid item xs={2}>
                            <Typography variant={"subtitle2"}>{item.option}</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <LinearProgress sx={{width: "90%"}} variant={"determinate"}
                                            value={item.votes / totalCount * 100}/>
                        </Grid>
                    </>
                )
            })}
        </Grid>
    )
}
const VoteButtons: React.FC<{ pollAnswers: { option: string, votes: number }[] }> = (prop) => {
    return (

        <Grid container spacing={2} style={{width: "100%", alignItems: "center"}}>
            {prop.pollAnswers.map((item, idx) => {
                return (
                    <Grid item xs={12}><Button style={{width: "100%", alignItems: "center", justifyItems: "left"}}>
                        <Typography variant={"body1"}>{item.option}</Typography>
                    </Button></Grid>
                )
            })
            }
        </Grid>)
}
