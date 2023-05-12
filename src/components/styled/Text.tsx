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
    padding:"0.5rem",
    margin:"0.5rem",


})