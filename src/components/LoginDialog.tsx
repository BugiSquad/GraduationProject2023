import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface LoginDialogProps {
    isLoggedIn: boolean;
}

export const LoginDialog: React.FC<LoginDialogProps> = ({ isLoggedIn }) => {
    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "white",
                padding: "1rem",
                transition: "bottom 0.5s ease-out",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                zIndex: 100,
            }}
        >
            {isLoggedIn ? <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>로그인이 성공하였습니다!</div>
                <Link to="/app"><Button>닫기</Button></Link>
            </div> :
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>부적절한 접근입니다. 다시 시도해주세요.</div>
                </div>}
        </div>
    );
};

