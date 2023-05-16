import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import {requestPermission, subscribePushService} from "../api/Notification";
import {getMyInfo} from "../api/Member";

export const RequestPermission: React.FC = () => {
    const showPopUp = !Boolean(localStorage.getItem("disableNotificationPopup"))

    function onDeny() {
        localStorage.setItem("disableNotificationPopup", "true")
    }

    if (getMyInfo().memberId === '-1' || !showPopUp)
        return (<> </>)
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"}>알림 설정을 하시면 실시간으로 다양한 정보를 받아보실 수 있어요!</Typography>
                    <Button onClick={() => {
                        requestPermission().then((res) => {
                            if (!res) return
                            else subscribePushService()
                        })
                    }}>알림 설정</Button>
                    <Button onClick={() => {
                        onDeny()
                    }}>취소</Button>
                </Grid>
            </Grid>
        </div>)
}