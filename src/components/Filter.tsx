import React, {useState} from "react";
import {Card, Typography} from "@mui/material";
import {InterestFilter, InterestOptionType} from "./InterestFilter";
import {useDispatch} from "react-redux";
import {closeFilter} from "../store/matching/drawer";
import {DrawerGrid, DrawerGridChild} from "./styled/DrawerGrid";
import {OrangeButton} from "./styled/Buttons";


export const Filter: React.FC = () => {
    const [interests, setInterests] = useState<InterestOptionType[]>([]);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(closeFilter())
    }

    return (
        <>
            <Card id={"matchingFilter"} sx={{
                display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "center"
                , height: "70vh"
            }}>
                <Typography variant={"h6"} fontWeight={"bold"}>필터</Typography>
                <DrawerGrid container rowSpacing={1}>
                    {/*위로 추가하는 바 필요*/}

                    <DrawerGridChild item xs={12}>
                        <InterestFilter setSelectedInterests={setInterests} selectedInterests={interests}/>
                    </DrawerGridChild>

                    <DrawerGridChild item xs={12}>
                        <OrangeButton onClick={() => onClick()}>
                            <Typography sx={{color: "white"}}>적용</Typography>
                        </OrangeButton>
                    </DrawerGridChild>
                </DrawerGrid>
            </Card>
        </>
    )
}