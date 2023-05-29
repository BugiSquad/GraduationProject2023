import {Autocomplete, TextField, Typography} from "@mui/material";
import {Departments} from "./UserInfoFrame";
import React from "react";


interface DepartmentsFilterProps {
    selectedDepartments: string[];
    setSelectedDepartments: React.Dispatch<React.SetStateAction<string[]>>;
}

export const DepartmentsFilter: React.FC<DepartmentsFilterProps> = (props) => {
    return (<>
            <Typography variant="body1" sx={{fontWeight: 'bold',}}>🔍학과를 골라주세요!</Typography>
            <Autocomplete
                multiple
                disablePortal
                options={Departments}
                onChange={(e, v) => {
                    if (v == null) return;
                    props.setSelectedDepartments([...v.map(i => i.label)])
                }}
            renderInput={(params) => (
                <TextField required {...params} variant="standard" color="warning" />
            )}
        />
        </>
    );
  }
  