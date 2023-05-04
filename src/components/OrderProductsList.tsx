import { Card, Typography } from "@mui/material"

export const OrderProductsList:React.FC =()=>{
    return (
        <Card sx={{ paddingLeft: '10px', paddingRight: '10px', display: "flex", margin: "20px", justifyContent: "space-between", alignItems: "center", minWidth: 280 }}>
        <Typography fontSize={14} fontWeight='bold'>소금구이덮밥</Typography>
        <Typography fontSize={14} >1개</Typography>
        <Typography fontSize={14} >₩4,300</Typography>
    </Card> 
    )
}