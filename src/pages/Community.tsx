import {SimpleTemplate} from "./PageTemplate";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import React, {useEffect, useState} from "react";
import {BoardCard} from "../components/BoardCard";
import {Button, Card, Grid, Typography} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import {getNoticeFromRemote, NoticeInformation} from "../api/Notice";
import {getVoteItemsFromRemote, takeANewMenuVote, VoteItem} from "../api/Vote";

export const Community: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "커뮤니티", tab: BottomNavigationTab.COMMUNITY}}>
            <Content></Content>
        </SimpleTemplate>
    )
}

const Content: React.FC = () => {
    const [noticeItems, setNoticeItems] = useState<NoticeInformation[]>([])
    const [voteItems, setVoteItems] = useState<VoteItem[]>([])
    useEffect(() => {
        getNoticeFromRemote().then((res) => {
            const content: NoticeInformation[] = res.data.data.content
            setNoticeItems(content)
        })
        getVoteItemsFromRemote().then(res => {
            const content: VoteItem[] = res.data.data
            setVoteItems(content)
        })
    }, [])
    return (<>
        <BoardCard title={"공지사항"}
                   content={<div style={{display: "flex", flexDirection: "column"}}>{noticeItems.map((item, idx) =>
                       <Notice key={idx} info={item}></Notice>)}</div>} link={""}/>
        <BoardCard title={"투표"} content={<FavoriteMenuVote items={voteItems}></FavoriteMenuVote>} link={""}/>
    </>)
}


interface NoticeItemProps {
    info: NoticeInformation
}

const Notice: React.FC<NoticeItemProps> = (props) => {
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
const FavoriteMenuVote: React.FC<{ items: VoteItem[] }> = (props) => {
    const [flag, setFlag] = useState<boolean>(false);
    const pollAnswers = props.items.length === 0 ? [] :
        props.items.sort((a, b) => {
            if (a.votes > b.votes) return -1;
            else if (a.votes === b.votes) return 0;
            else return 1;
        })
    if (flag) return (<VoteResult pollAnswers={pollAnswers}></VoteResult>)
    else return (<VoteButtons pollAnswers={pollAnswers} setState={setFlag}></VoteButtons>)
}

const VoteResult: React.FC<{ pollAnswers: VoteItem[] }> = (prop) => {
    let totalCount = 0
    prop.pollAnswers.forEach((answer) => totalCount += answer.votes)
    return (
        <Grid container spacing={2} style={{width: "100%", alignItems: "center"}}>
            {prop.pollAnswers.map((item, idx) => {
                return (
                    <>
                        <Grid item xs={2}>
                            <Typography variant={"subtitle2"}>{item.name}</Typography>
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
const VoteButtons: React.FC<{
    pollAnswers: VoteItem[],
    setState: React.Dispatch<React.SetStateAction<boolean>>
}> = (prop) => {
    return (
        <Grid container spacing={2} style={{width: "100%", alignItems: "center"}}>
            {prop.pollAnswers.map((item, idx) => {
                return (
                    <Grid item xs={12}><Button style={{width: "100%", alignItems: "center", justifyItems: "left"}}
                                               onClick={() => {
                                                   takeANewMenuVote(item.newMenuId)
                                                       .then((res) => console.log(res))
                                                       .catch(err => console.error(err))
                                                       .finally(() => {
                                                           prop.setState(true)
                                                       })
                                               }}>
                        <Typography variant={"body1"}>{item.name}</Typography>
                    </Button> </Grid>
                )
            })}
        </Grid>)
}
