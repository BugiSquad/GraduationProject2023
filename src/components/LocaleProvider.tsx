import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import React, {FC, ReactNode} from "react";
import {LocalizationProvider} from "@mui/x-date-pickers";


export const LocaleProvider: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
            {children}
        </LocalizationProvider>
    )
}