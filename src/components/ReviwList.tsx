import { Divider, Rating, Typography } from "@mui/material";

interface ReviewListProp {
    userId: String;
    dayBefore: String;
    rating: number;
    contents: String;
}

export const ReviewList: React.FC<ReviewListProp> = ({ userId, dayBefore, rating, contents }) => {
    return (
        <div style={{ width: "100%", marginBottom: "15px" }}>
            <div style={{ display: 'flex', flexDirection: "row", alignItems: "center", marginTop: "15px", marginBottom: "10px" }}>
                <Typography fontSize={13} paddingRight={3}>{userId}</Typography>
                <Rating name="read-only" value={rating} readOnly></Rating>
            </div>
            <Typography sx={{ marginBottom: "15px" }} fontSize={13}>{contents}</Typography>
            <Divider component="div" sx={{ marginBottom: "10px" }} />
        </div>
    )
}