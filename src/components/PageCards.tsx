import { Card, Typography } from "@mui/material";

interface OrderpageProps {
    title: string;
    content: React.ReactNode;
}

export const PageCards = ({ title, content }: OrderpageProps) => {
    return (
        <><Card style={{
            minInlineSize: '350px',
            padding: '10px'
        }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography style={{ fontSize: 16, fontWeight: 'bold' }} variant={"h6"}>{title}</Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    {content}
                </div>

            </div>
        </Card><br /></>
    );
};
