import {Rating, Typography} from "@mui/material";

interface ReviewListProp {
    userId: String;
    dayBefore: String;
    rating: number;
    contents: String;
}

export const ReviewList: React.FC<ReviewListProp> = ({userId, dayBefore, rating, contents}) => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: "row", alignItems: "center", paddingTop: "10px"}}>
                <Typography fontSize={13} paddingRight={3}>{userId}</Typography>
                <Typography fontSize={12} paddingRight={12} color={'#848585'}>{dayBefore}</Typography>
                <Rating name="read-only" value={rating} readOnly/>
            </div>
            <Typography fontSize={13}>{contents}</Typography>
        </div>
    )
}