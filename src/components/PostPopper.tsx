import React, {FC} from "react";
import {Avatar, Button, Fade, Paper, Popper, PopperPlacementType, Typography} from "@mui/material";
import {useAppSelector} from "../store/hooks";

export const PostPopper: FC<{ anchorEl: HTMLDivElement | null, open: boolean, onClose: (s: boolean) => void, placement: PopperPlacementType }>
    = ({open, placement, onClose, anchorEl}) => {

    const items = useAppSelector((state) => state.postItems.selected)
    console.log(items)
    return (
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
            {({TransitionProps}) => (
                <Fade {...TransitionProps} timeout={350}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Avatar sx={{width: "25vw", height: "25vw", top: "40px"}} src={items.avatarUrl}/>
                        <Paper sx={{minWidth: "70vw"}}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "40px"
                            }}>
                                <Typography sx={{p: 2}}>{items.postName}</Typography>
                                <Typography sx={{p: 2}}>{items.postTime}</Typography>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "5vw"
                            }}>
                                <Button sx={{background: "orange", color: "white"}}
                                        onClick={() => {
                                            alert(`${items.postName}\n ${items.postTime}\n`);
                                            return;
                                        }}>
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