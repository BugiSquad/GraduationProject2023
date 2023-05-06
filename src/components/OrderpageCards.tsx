import {Card, Typography} from "@mui/material";

interface OrderPageProps {
    title: string;
    content: React.ReactNode;
}

export const OrderpageCards = ({title, content}: OrderPageProps) => { //마이페이지에 들어갈 카드 컴포넌트 포맷
    return (
        <><Card style={{
            minInlineSize: '350px',
            padding: '10px'
        }}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Typography style={{fontSize: 18, fontWeight: 'bold'}} variant={"h6"}>{title}</Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    {content}
                </div>

            </div>
        </Card><br /></>
    );
};
