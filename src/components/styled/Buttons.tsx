import {styled} from "@mui/system";
import {IconButton} from "@mui/material";


export const OrangeButton = ({
    flex: "1",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FE724C',
    fontWeight: "bold",
    color: "white",
    borderRadius: "2rem",
    padding: "0.5rem",
    margin:"0.5rem",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
})

export const WhiteButton = ({

    flex: "1",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    fontWeight: "bold",
    color: '#FE724C',
    borderRadius: "2rem",
    padding: "0.5rem",
    margin:"0.5rem",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
})


export const OrangeCircleButton = styled(IconButton)({
    background: "#FE724C"
})