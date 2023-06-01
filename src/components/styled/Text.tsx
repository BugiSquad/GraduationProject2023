import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const LargeText = styled(Typography)({
    variant: 'h2',
})
export const MediumText = styled(Typography)({
    variant: 'body1',
})
export const SmallText = styled(Typography)({
    variant: 'body2',
})
export const SubtitleText = styled(Typography)({
    variant: 'caption'
})

export const normalTypography = ({

    fontWeight: "bold",
    padding: "0.5rem",
    margin: "0.5rem",


})

export const modalBox = ({
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
    backgroundColor: '#ff8b6b',
    borderRadius: '1rem',
    padding: '1rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    borderColor: "#ff8b6b",
    boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.3)"
})