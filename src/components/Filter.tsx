import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { InterestFilter, InterestOptionType } from "./InterestFilter";
import { useDispatch } from "react-redux";
import { closeFilter } from "../store/matching/drawer";
import { DrawerGrid, DrawerGridChild } from "./styled/DrawerGrid";
import { OrangeButton } from "./styled/Buttons";
import { normalCard } from "./styled/Cards";
import { DepartmentsFilter } from "./DepartmentsFilter";
import { GradeFilter } from "./GradeFilter";
import { GenderFilter } from "./GenderFilter";
import { Interests, QueryOptionBuilder } from "../types/QueryOptions";
import { Gender } from "../types/MemberDto";

interface FilterProps {
    setQueryString: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter: React.FC<FilterProps> = (props) => {
    const [interests, setInterests] = useState<InterestOptionType[]>([]);
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
    const [selectedGrades, setSelectedGrades] = useState<number[]>([]);
    const [selectedGenders, setSelectedGenders] = useState<Gender[]>([]);
    const dispatch = useDispatch();


    const onClick = () => {
        const builder = new QueryOptionBuilder()
        builder.gender(selectedGenders)
            .department(selectedDepartments)
            .interest(interests.map(item => item.key as Interests))
            .grade(selectedGrades)
        props.setQueryString(builder.build())
        dispatch(closeFilter())
    }

    return (
        <>
            <Card id={"matchingFilter"} sx={{
                display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "center"
                , height: "70vh"
            }}>
                <Card sx={normalCard} style={{ width: "100px", marginTop: "10px", }}></Card>
                <Typography variant={"h5"} fontWeight={"bold"}>🍽️ 필터</Typography>
                <DrawerGrid container rowSpacing={1}>
                    {/*위로 추가하는 바 필요*/}

                    <DrawerGridChild item xs={12}>
                        <InterestFilter setSelectedInterests={setInterests} selectedInterests={interests} />
                    </DrawerGridChild>

                    <DrawerGridChild item xs={12}>
                        <DepartmentsFilter selectedDepartments={selectedDepartments}
                            setSelectedDepartments={setSelectedDepartments} />
                    </DrawerGridChild>

                    <DrawerGridChild item xs={12}>
                        <GradeFilter selectedGrades={selectedGrades} setSelectedGrades={setSelectedGrades} />
                    </DrawerGridChild>

                    <DrawerGridChild item xs={12}>
                        <GenderFilter selectedGender={selectedGenders} setSelectedGender={setSelectedGenders} />
                    </DrawerGridChild>

                    <DrawerGridChild item xs={12}>
                        <Button sx={OrangeButton} onClick={() => onClick()}>
                            <Typography sx={{ color: "white" }}>적용</Typography>
                        </Button>
                    </DrawerGridChild>
                </DrawerGrid>
            </Card>
        </>
    )
}