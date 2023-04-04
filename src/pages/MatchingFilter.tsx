import React from "react";
import {Button, Card, Typography} from "@mui/material";

//매칭에 대한 옵션
export interface MatchingOptions {

}

export const MatchingFilter: React.FC = () => {
    return (
        <>
            <Card sx={{
                display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "center"
                , height: "60vh", borderRadius: 5
            }}>
                {/*위로 추가하는 바 필요*/}
                <Typography variant={"h6"} fontWeight={"bold"}>필터</Typography>
                <Button>
                    <Card sx={{display: "flex", background: "orange",}}>
                        <Typography sx={{color: "white"}}>적용</Typography>
                    </Card>
                </Button>
            </Card>
        </>
    )
}