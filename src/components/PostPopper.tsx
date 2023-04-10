import React, {FC} from "react";
import {Button, Fade, Paper, Popper, PopperPlacementType, Typography} from "@mui/material";

export const PostPopper: FC<{ anchorEl: HTMLDivElement | null, open: boolean, onClose: (s: boolean) => void, placement: PopperPlacementType }>
    = ({open, placement, onClose, anchorEl}) => {
    return (
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
            {({TransitionProps}) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                        <Typography sx={{p: 2}}>이 모임에 참석하시겠어요?</Typography>
                        <Button>예</Button>
                        <Button onClick={(event) => {
                            onClose(false)
                        }}>
                            아니오</Button>
                    </Paper>
                </Fade>
            )}
        </Popper>)
}