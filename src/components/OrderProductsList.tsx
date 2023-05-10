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
            margin: "10px",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
        }}>
            <Typography sx={{flex: "1"}} fontSize={14} fontWeight='bold'>{name}</Typography>
            <Typography sx={{flex: "1"}} fontSize={14}>{quantity}개</Typography>
            <Typography sx={{flex: "1"}} fontSize={14}>₩{price}</Typography>
        </Card>
    )
}