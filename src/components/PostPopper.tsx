import React, {FC} from "react";
import {Avatar, Button, Fade, Paper, Popper, PopperPlacementType, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {joinNoteRoom} from "../api/NoteRoom";
import {getTimeFrom} from "./Post";
import {PostItem} from "../types/PostItem";
import {OrangeButton, WhiteButton} from "./styled/Buttons";

interface PostPopperProps {
    anchorEl: HTMLDivElement | null,
    open: boolean,
    onClose: (s: boolean) => void,
    placement: PopperPlacementType,
    postItem: PostItem;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export const PostPopper: FC<PostPopperProps>
    = ({ open, placement, onClose, anchorEl, postItem }) => {
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
            <Popper  open={open} anchorEl={anchorEl} placement={placement} modifiers={[
                {
                  name: 'preventOverflow',
                  options: {
                    mainAxis: false, // Popper의 주축 방향에서 넘침 방지
                    altAxis: true, // Popper의 부축 방향에서 넘침 방지
                  },
                },
              ]} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Avatar sx={{ width: "25vw", height: "25vw", top: "40px", boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.3)" }} src={postItem.memberProfileUrl} />
                            <Paper sx={{
                                width: "90vw", // 너비를 줄여서 텍스트가 넘침 방지
                                borderRadius: '1.5rem',
                                boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.3)",
                                padding: "1rem",
                                marginLeft: "2rem",
                                marginRight: "2rem",
                                marginBottom: "10rem"
                            }}>
                                <div style={{
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginTop: "40px",
                                }}>
                                    <div style={{ flexDirection: "column", alignContent: "flex-start"}}>
                                        <Typography sx={{ p: 2 }} fontSize={23} fontWeight={'bold'}>📨 {postItem.title}</Typography>
                                        <Typography sx={{ paddingLeft: 2 }}>{postItem.body}</Typography>
                                    </div>
                                    <Typography
                                            sx={{ p: 2 }}fontWeight={'bold'}>{`${getTimeFrom(Number(postItem.minutesLeftUntilMeal))} 후`}</Typography>

                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    padding: "5vw"
                                }}>
                                    <Button sx={OrangeButton}
                                        onClick={() => join(postItem.postId)}>
                                        쪽지 보내기</Button>
                                    <Button sx={WhiteButton} onClick={() => {
                                        onClose(false)
                                    }}> 취소</Button>
                                </div>
                            </Paper>
                        </div>
                    </Fade>
                )}
            </Popper>)
    }