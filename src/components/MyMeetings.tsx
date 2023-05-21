import {Typography} from "@mui/material";

export const MyMeetings = () => {
  return (
    <div>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        현재 참여 중인 모임이 없습니다.
      </Typography>
      <Typography variant="body2">
        새로운 모임을 만들어 참여해보세요!
      </Typography>
    </div>
  );
};
