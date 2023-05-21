import React, {FC} from "react";
import {Avatar, Button, Fade, Paper, Popper, PopperPlacementType, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {joinNoteRoom} from "../api/NoteRoom";
import {getTimeFrom} from "./Post";
import {PostItem} from "../types/PostItem";

interface PostPopperProps {
    anchorEl: HTMLDivElement | null,
    open: boolean,
    onClose: (s: boolean) => void,
    placement: PopperPlacementType,
    postItem: PostItem;
}

export const PostPopper: FC<PostPopperProps>
    = ({open, placement, onClose, anchorEl, postItem}) => {
    const navigate = useNavigate()

    function join(postId: number) {
        joinNoteRoom(postId).then((res) => {
            console.log(`요청이 정상적으로 진행되었습니다.`)
            const roomId = res.data.data.noteRoomId
            console.log(res)
            //중복으로 참여한 경우나 정상참여의 경우 바로 리다이렉트한다
            navigate(`/mypage/message/${roomId}`)
        }).catch((err) => {
            console.warn(`요청에 문제가 있습니다. 확인이 필요합니다.`)
            //오류코드 세분화 필요 -> 이미 만료된 경우, 이미 참여한 경우
            let code = err.response.data.data.code
            switch (code) {
                case 'NOT_EXIST_GROUP':
                    alert("존재하지 않는 만남입니다.")
                    break;
                case 'NOT_EXIST_MEMBER':
                    alert("다시 로그인이 필요합니다.")
                    break;
                default:
                    break;
            }
        })
        return;
    }

    return (
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
            {({TransitionProps}) => (
                <Fade {...TransitionProps} timeout={350}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Avatar sx={{width: "25vw", height: "25vw", top: "40px"}} src={postItem.memberProfileUrl}/>
                        <Paper sx={{minWidth: "70vw"}}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "40px"
                            }}>
                                <Typography sx={{p: 2}}>{postItem.title}</Typography>
                                <Typography sx={{p: 2}}>{postItem.body}</Typography>
                                <Typography
                                    sx={{p: 2}}>{`${getTimeFrom(Number(postItem.minutesLeftUntilMeal))} 후`}</Typography>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "5vw"
                            }}>
                                <Button sx={{background: "orange", color: "white"}}
                                        onClick={() => join(postItem.postId)}>
                                    쪽지 보내기</Button>
                                <Button sx={{background: "orange", color: "white"}} onClick={() => {
                                    onClose(false)
                                }}> 취소</Button>
                            </div>
                        </Paper>
                    </div>
                </Fade>
            )}
        </Popper>)
}