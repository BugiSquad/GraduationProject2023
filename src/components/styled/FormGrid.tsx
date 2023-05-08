import {styled} from "@mui/system";
import {Grid} from "@mui/material";

export const FormGrid = styled(Grid)({
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: "nowrap",
});

export const FormGridChild = styled(Grid)({
    margin: "10px",
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: "center",
    alignItems: "flex-start"
});
