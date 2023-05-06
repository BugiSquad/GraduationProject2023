import React, {useState} from "react";
import {Autocomplete, Button, Card, TextField, Typography} from "@mui/material";
import {InterestFilter} from "./InterestFilter";


export const Filter: React.FC = () => {
    const [interests, setInterests] = useState<string[]>([]);
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
                <Autocomplete options={[...Object.keys(interests).map((item) => item)]}
                              renderInput={(params) => (
                                  <TextField label="관심사" {...params}
                                             InputProps={{
                                                 ...params.InputProps,
                                                 type: 'search',
                                             }}/>)}
                              onChange={(event, value) => {
                                  if (value != null)
                                      setInterests([value, ...interests.filter(e => e !== value)])
                              }}/>
                <Typography variant={"h6"} fontWeight={"bold"}>필터</Typography>
                <InterestFilter />

                <Button>
                    <Card sx={{display: "flex", background: "orange",}}>
                        <Typography sx={{color: "white"}}>적용</Typography>
                    </Card>
                </Button>
            </Card>
        </>
    )
}