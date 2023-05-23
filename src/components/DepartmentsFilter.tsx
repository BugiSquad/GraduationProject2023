import { Typography, Autocomplete, TextField } from "@mui/material";
import { userInfo } from "os";
import { Departments, UserInfo } from "./UserInfoFrame";
import React from "react";


export const DepartmentsFilter: React.FC = () => {
    const [userInfo, setInfo] = React.useState({} as UserInfo);

    return (<>
        <Typography variant="body1" sx={{ fontWeight: 'bold', }}>🔍학과를 골라주세요!</Typography>
        <Autocomplete
            disablePortal
            options={Departments}
            onChange={(e, v) => {
                if (v == null) return;
                setInfo({ ...userInfo, department: v.label })
            }}
            renderInput={(params) => (
                <TextField required {...params} variant="standard" color="warning" />
            )}
        />
        </>
    );
  }
  