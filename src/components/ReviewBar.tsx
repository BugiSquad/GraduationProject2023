import {Box, LinearProgress, Typography} from "@mui/material";


interface ReviewBarProp {
    rate: String;
    ratio: number;
    counts: number
}

export const ReviewBar: React.FC<ReviewBarProp> = ({rate, ratio, counts}) => {


    return (
        <div className="ProgressBar" style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
            <Typography fontSize={13} sx={{ padding: "10px" }}>{rate}</Typography>
            <Box sx={{ minWidth: "280px" }}>
                <LinearProgress color="warning" variant="determinate" value={ratio} />
            </Box>
            <Typography fontSize={10} color={'#848585'} sx={{ padding: "5px" }}>{counts}</Typography>
        </div>
    )
}
