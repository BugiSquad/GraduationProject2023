import { ReactNode } from "react";
import { Card, Typography } from "@mui/material";

interface Props {
    title: string;
    content: React.ReactNode;
}

export const MypageCards = ({ title, content }: Props) => { //마이페이지에 들어갈 카드 컴포넌트 포맷
    return (
        <><Card style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: '15px',
        }}>
            <div style={{ display: "flex", flexDirection: "column", height: '100%' }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: '0 10px' }}>
                    <Typography style={{ fontSize: 20, fontWeight: 'bold' }} variant={"h6"}>{title}</Typography>
                    <a href="" style={{ marginLeft: '160px', marginRight: '20px' }}>더 보기</a>
                </div>

                <div style={{ height: '100%', display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: '0 10px' }}>
                    {content}
                </div>

            </div>
        </Card><br /></>
    );
};
