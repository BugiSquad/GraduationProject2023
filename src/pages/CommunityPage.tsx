import {SimpleTemplate} from "./PageTemplate";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import React, {useEffect, useState} from "react";
import {BoardCard} from "../components/BoardCard";
import {Alert, Button, Card, FormControlLabel, Grid, Paper, Radio, RadioGroup, Snackbar, Typography} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import {getNoticeFromRemote, NoticeInformation} from "../api/Notice";
import {getVoteItemsFromRemote, takeANewMenuVote, VoteItem} from "../api/Vote";
import {OrangeButton} from "../components/styled/Buttons";
import { normalCard } from "../components/styled/Cards";
import { PageCards } from "../components/PageCards";
import matnam from '../images/matnam.png';
import { Logo } from "./MainPage";


export const CommunityPage: React.FC = () => {
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
    return (<div style={{paddingLeft: '0.5rem', paddingRight: '0.5rem'}}>
        <PageCards title={"공지사항"}
                   content={<NoticeMain noticeItems={noticeItems}></NoticeMain>} />
        <PageCards title={"투표"} content={<VoteMain items={voteItems}></VoteMain>} />
        <Logo />
    </div>)
}


interface NoticeMainProps {
    noticeItems: NoticeInformation[];
}

const NoticeMain: React.FC<NoticeMainProps> = (props) => {
    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>{props.noticeItems.map((item, idx) =>
            <NoticeItem key={idx} info={item}></NoticeItem>)}</div>
    )
}

interface NoticeItemProps {
    info: NoticeInformation
}

const NoticeItem: React.FC<NoticeItemProps> = (props) => {
    const date = new Date(props.info.modifiedAt)
    const year = String(date.getFullYear()).substring(2, 4);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}년 ${month}월 ${day}일`;
    return (
        <Card sx={normalCard}>
            <Typography variant={"subtitle2"} fontWeight='bold'>{props.info.informationId}</Typography>
            <Typography
                variant={"subtitle2"}>{props.info.title}</Typography>
            <Typography variant={"subtitle2"} fontWeight='bold'
                        style={{color: "#FE724C"}}>{formattedDate}</Typography>
        </Card>
    )
}
const VoteMain: React.FC<{ items: VoteItem[] }> = (props) => {
    const [flag, setFlag] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [open, setOpen] = useState(false);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const pollAnswers = props.items.length === 0 ? [] :
        props.items.sort((a, b) => {
            if (a.votes > b.votes) return -1;
            else if (a.votes === b.votes) return 0;
            else return 1;
        })
    if (flag) return (
        <>
            <VoteResult pollAnswers={pollAnswers}></VoteResult>
            <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} open={open} autoHideDuration={2000}
                      onClose={handleClose}>
                <Alert severity="error" sx={{width: '100%'}}> {errorMsg} </Alert>
            </Snackbar>
        </>
    )
    else return (<>
        <VoteButtons pollAnswers={pollAnswers} setState={setFlag} setMsg={setErrorMsg}
                     setOpenErr={setOpen}></VoteButtons>
        <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} open={open} autoHideDuration={2000}
                  onClose={handleClose}>
            <Alert severity="error" sx={{width: '100%'}}> {errorMsg} </Alert>
        </Snackbar>
    </>)
}

const VoteResult: React.FC<{ pollAnswers: VoteItem[] }> = (prop) => {
    let totalCount = 0
    prop.pollAnswers.forEach((answer) => totalCount += answer.votes)
    return (
        <Grid container style={{width: "100%", alignItems: "center"}}>
            {prop.pollAnswers.map((item, idx) => {
                return (
                    <>
                        <Grid item xs={2}>
                            <Typography variant={"subtitle2"}>{item.name}</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <LinearProgress sx={{width: "90%"}} variant={"determinate"}
                                            value={item.votes / totalCount * 100}/>
                        </Grid>
                        <Grid item xs={1}><span>{item.votes}표</span></Grid>
                    </>
                )
            })}
        </Grid>
    )
}
const VoteButtons: React.FC<{
    pollAnswers: VoteItem[],
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    setMsg: React.Dispatch<React.SetStateAction<string>>,
    setOpenErr: React.Dispatch<React.SetStateAction<boolean>>
}> = (props) => {
    const [value, setValue] = React.useState('');
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        takeANewMenuVote(Number(value))
            .then((res) => console.log(res))
            .catch(err => {
                console.error(err)
                props.setMsg(err.response.data.data.message)
                props.setOpenErr(true)
            })
            .finally(() => {
                props.setState(true)
            })
    };
    const handleViewResult = () => {
        props.setState(true)
    }
    return (
        <form onSubmit={handleSubmit}>
            <RadioGroup onChange={handleRadioChange}>
                {props.pollAnswers.map((item, idx) => {
                    return (<FormControlLabel key={idx} value={item.newMenuId} control={<Radio/>} label={item.name}/>)
                })}
            </RadioGroup>
            <Button type={"submit"} sx={OrangeButton}>투표하기</Button>
            <Button type={"button"} sx={OrangeButton} onClick={handleViewResult}>결과 보기</Button>
        </form>
    )
}
