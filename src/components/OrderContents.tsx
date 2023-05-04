import { Button, Card, Paper, TextField, Typography } from "@mui/material"
import { MypageCards } from "./MypageCards"
import { RecentOrders } from "./RecentOrders"
import { MyMeetings } from "./MyMeetings"
import { MyMessagebox } from "./MyMessagebox"
import { RecentMeets } from "./RecentMeets"
import { OrderpageCards } from "./OrderpageCards"
import naverpayImg from '../images/logo_naverpay.png'
import kakaopayImg from '../images/logo_kakaopay.png'
import creditcardImg from '../images/logo_creditcard.png'
import { OrderProductsList } from "./OrderProductsList"



export const OrderContents: React.FC = () => {
    return (<>
        <Card sx={{
            minWidth: 200,
            maxWidth: 1000,
            minHeight: 490,
            padding: '10px 10',
            margin: '10px',
        }}>

            <OrderpageCards title="주문상품" content={<OrderProducts />} />
            <OrderpageCards title="주문자 정보" content={<OrderInfo />} />
            <OrderpageCards title="결제수단" content={<PayMethod />} />

        </Card>
        <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
            <Button disableElevation disableRipple sx={{
                minWidth: "100px",
                margin: "5px",
                backgroundColor: '#FE724C',
                fontWeight: "bold",
                borderRadius: "2rem",
                padding: "0.5rem",
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)"
            }} >
                <Typography color={'white'} fontWeight={'bold'} fontSize={14}>바로 주문</Typography>
            </Button>
            <Button disableElevation disableRipple sx={{
                minWidth: "100px",

                margin: "5px",
                backgroundColor: '#FE724C',
                borderRadius: "2rem",
                padding: "0.5rem",
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)"
            }} >
                <Typography color={'white'} fontWeight={'bold'} fontSize={14}>예약 주문</Typography>
            </Button>
        </div>
    </>

    )
}

export const OrderProducts: React.FC = () => {
    return (<>
        <OrderProductsList />

    </>
    )
}

export const OrderInfo: React.FC = () => {
    return (

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: 'flex-start' }}>
            <Typography fontSize={11} color="#FE724C">* 표시된 항목은 필수로 입력해야 합니다.</Typography>
            <TextField
                size="small"
                required
                placeholder="김부기"
                label="이름"
                variant="standard"
            />

            <TextField
                size="small"
                required
                placeholder="010-0000-0000"
                label="전화번호"
                variant="standard"
            />
        </div>
    )
}

export const PayMethod: React.FC = () => {
    return (
        <div style={{
            justifyContent: 'space-between',
        }}>
            <Button disableElevation sx={{ borderRadius: '3rem', maxWidth: '100px', maxHeight: '30px', paddingRight: "10px" }}>
                <img src={naverpayImg} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
            </Button>
            <Button disableElevation sx={{ borderRadius: '3rem', maxWidth: '100px', maxHeight: '30px', paddingRight: "10px" }}>
                <img src={kakaopayImg} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
            </Button>
            <Button disableElevation sx={{ borderRadius: '3rem', maxWidth: '100px', maxHeight: '30px', paddingRight: "10px" }}>
                <img src={creditcardImg} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
            </Button>
        </div>
    )
}
