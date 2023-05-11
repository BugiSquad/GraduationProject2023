import { Box, Button, Card, Modal, TextField, Typography } from "@mui/material"
import { PageCards } from "./PageCards"
import naverpayImg from '../images/logo_naverpay.png'
import kakaopayImg from '../images/logo_kakaopay.png'
import creditcardImg from '../images/logo_creditcard.png'
import { OrderProductsList } from "./OrderProductsList"
import completeImg from '../images/complete.png'
import React from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { CartItem } from "../types/CartItem";
import { OrangeButton, WhiteButton } from "./styled/Buttons"

interface OrderProductsProps {
    items: CartItem[];
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const OrderContents: React.FC = () => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const items = useAppSelector(state => state.cart.item);
    const dispatch = useAppDispatch();
    const handleClose = () => {
        setOpen(false)
        navigate('/mypage');
    }
    return (<>
        <Card sx={{
            minWidth: 200,
            maxWidth: 1000,
            padding: '15px 1',
            margin: '10px',
        }}>

            <PageCards title="주문상품" content={<OrderProducts items={items} />} />
            <PageCards title="주문자 정보" content={<OrderInfo />} />
            <PageCards title="결제수단" content={<PayMethod />} />

        </Card>
        <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
            <Button disableElevation disableRipple onClick={handleOpen} sx={OrangeButton} >
                바로 주문
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h1" fontWeight={'bold'}>
                        주문이 완료되었습니다.
                    </Typography>
                    <img src={completeImg} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem', paddingTop: "20px" }} />
                    <div style={{ display: 'flex', flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", paddingTop: "20px", paddingLeft: "30px", paddingRight: "30px" }}>

                            <Typography fontSize={14} fontWeight={'bold'}>주문 번호</Typography>
                            <Typography fontSize={14} fontWeight={'bold'}>012345678910</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", paddingLeft: "30px", paddingRight: "30px" }}>

                            <Typography fontSize={14} fontWeight={'bold'}>주문 일시</Typography>
                            <Typography fontSize={14} fontWeight={'bold'}>2023-05-04 00:00:00</Typography>
                        </div>

                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography>
                </Box>
            </Modal>
            <Button disableElevation disableRipple sx={WhiteButton} >
                예약 주문
            </Button>
        </div>
    </>

    )
}


export const OrderProducts: React.FC<OrderProductsProps> = ({ items }) => {
    return (<>
        {items.map((item, idx) =>
            <OrderProductsList name={item.name} quantity={item.quantity} price={item.price} />
        )}
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
