import {styled} from "@mui/system";
import {Grid} from "@mui/material";

export const DrawerGrid = styled(Grid)({
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: "nowrap",
    alignContent: "center"
});

export const DrawerGridChild = styled(Grid)({
    margin: "10px",
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: "center"

});