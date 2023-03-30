import { ReactNode } from "react";
import { Card, Typography } from "@mui/material";

interface Props {
    title: string;
    content: React.ReactNode;
}

export const MypageCards = ({ title, content }: Props) => {
    return (
        <><Card style={{
            display: 'flex',
            width: '100',
            height: '100%',
            padding: '15px',
        }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography style={{ fontSize: 20, fontWeight: 'bold' }} variant={"h6"}>{title}</Typography>
                        <div style={{ display: "inherit", alignItems: "center" }}>
                            <a href="">더 보기</a>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        {content}
                    </div>
                </div>
            </div>
        </Card><br /></>
    );
};
