import React, {useState} from "react";
import {Card, Typography} from "@mui/material";
import {InterestFilter, InterestOptionType} from "./InterestFilter";
import {OrangeButton} from "./styled/Buttons";


export const Filter: React.FC = () => {
    const [interests, setInterests] = useState<InterestOptionType[]>([]);
    return (
        <>
            <Card id={"matchingFilter"} sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "center",
                height: "60vh",
                borderRadius: 5
            }}>
                {/*위로 추가하는 바 필요*/}
                <Typography variant={"h6"} fontWeight={"bold"}>필터</Typography>
                <InterestFilter setSelectedInterests={setInterests} selectedInterests={interests}/>
                <div>
                    <OrangeButton>
                        <Typography sx={{color: "white"}}>적용</Typography>
                    </OrangeButton>
                </div>
            </Card>
        </>
    )
}