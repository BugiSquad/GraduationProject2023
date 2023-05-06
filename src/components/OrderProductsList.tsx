import {Card, Typography} from "@mui/material"

interface OrderProductsListProps {
    name: string;
    quantity: number;
    price: number
}

export const OrderProductsList: React.FC<OrderProductsListProps> = ({name, price, quantity}) => {
    return (
        <Card sx={{
            paddingLeft: '10px',
            paddingRight: '10px',
            display: "flex",
            margin: "20px",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: 280
        }}>
            <Typography fontSize={14} fontWeight='bold'>{name}</Typography>
            <Typography fontSize={14}>{quantity}개</Typography>
            <Typography fontSize={14}>₩{price}</Typography>
        </Card>
    )
}