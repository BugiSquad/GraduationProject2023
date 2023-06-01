import {Box, Button, Modal, TextField, Typography} from "@mui/material"
import {PageCards} from "./PageCards"
import naverpayImg from '../images/logo_naverpay.png'
import kakaopayImg from '../images/logo_kakaopay.png'
import creditcardImg from '../images/logo_creditcard.png'
import {OrderProductsList} from "./OrderProductsList"

import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {useAppSelector} from "../store/hooks";
import {CartItem} from "../types/CartItem";
import {CreateOrderDto, CreatePaymentDetailDto, OrderItem, OrderType, PaymentType} from "../types/Order";
import {createOrder} from "../api/Order";
import {OrangeButton, WhiteButton} from "./styled/Buttons";
import {Cart} from "../store/cart"
import {useDispatch} from "react-redux";
import { modalBox } from "./styled/Text"

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

const createDummyPaymentDetail = async (paymentType: PaymentType) => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const randomSixDigitNumber = ('000000' + randomNumber).slice(-6);
    const randomNumber1 = Math.floor(Math.random() * 1000000);
    const randomSixDigitNumber1 = ('000000' + randomNumber1).slice(-6);
    const result: CreatePaymentDetailDto = {
        confirmNum: Number(randomSixDigitNumber1),
        paymentNum: randomSixDigitNumber,
        paymentType: paymentType,
        detail: "",
    }
    return result
}

const createOrderTitle = (cartItems: CartItem[]) => {
    if (cartItems.length === 1) return cartItems[0].name
    else return `${cartItems[0].name} 외 ${cartItems.length - 1}건`
}
export const OrderContents: React.FC = () => {
    const navigate = useNavigate();
    const items = useAppSelector(state => state.cart.item);
    const [method, setMethod] = useState<PaymentType>(PaymentType.NONE);
    const [open, setOpen] = React.useState(false);
    const dispatcher = useDispatch()
    const cart = useAppSelector((state) => state.cart)

    const handleOpen = async () => {
        setOpen(true);

        dispatcher(Cart.actions.clear());
        const res = await createDummyPaymentDetail(method)
        console.log(res);
        const myOrder: CreateOrderDto = {
            ordersType: OrderType.NOW,
            paymentPostDto: {
                paymentType: method,
                confirmNum: 12314123,
                detail: createOrderTitle(items),
                paymentNum: "123123123123",
            },
            menuOrderItems: items.map((item, idx) => {
                return { menuId: item.id, count: item.quantity } as OrderItem
            })
        }
        createOrder(myOrder)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err))
    }
    const handleClose = () => {
        setOpen(false)
        navigate('/mypage');
    }
    return (<>



        <PageCards title="주문상품" content={<OrderProducts items={items} />} />
        <PageCards title="주문자 정보" content={<OrderInfo />} />
        <PageCards title="결제수단" content={<PayMethod method={method} setMethod={setMethod} />} />

        <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
            <Button disableElevation disableRipple onClick={handleOpen} sx={OrangeButton}>
                바로 주문
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box  sx={modalBox}>
                <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h1"
                        fontWeight="bold"
                        color="white"
                        mb={2}
                    >
                        주문이 완료되었습니다.
                    </Typography>
                    
                    <div style={{ display: 'flex', flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingTop: "20px",
                            paddingLeft: "30px",
                            paddingRight: "30px"
                        }}>

                            <Typography fontSize={14} fontWeight={'bold'}>주문 번호</Typography>
                            <Typography fontSize={14} fontWeight={'bold'}>012345678910</Typography>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingLeft: "30px",
                            paddingRight: "30px"
                        }}>

                            <Typography fontSize={14} fontWeight={'bold'}>주문 일시</Typography>
                            <Typography fontSize={14} fontWeight={'bold'}>2023-05-04 00:00:00</Typography>
                        </div>

                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Button sx={{ ...WhiteButton, width: "50%" }} onClick={() => { navigate("/mypage/recentorderdetail") }}>주문상세</Button>
                        <Button sx={{ ...WhiteButton, width: "50%" }} onClick={handleClose}>닫기</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    </>


    )
}


export const OrderProducts: React.FC<OrderProductsProps> = ({ items }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        // 각 음식의 가격을 계산하여 totalPrice에 누적
        const calculateTotalPrice = () => {
            let totalPrice = 0;
            items.forEach((item) => {
                const itemPrice = item.quantity * item.price;
                totalPrice += itemPrice;
            });
            setTotalPrice(totalPrice);
        };

        calculateTotalPrice();
    }, [items]);

    return (<div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", margin: "10px" }}>
        {items.map((item, idx) =>
            <OrderProductsList name={item.name} quantity={item.quantity} price={item.quantity * item.price} />,
        )}
        <Typography fontWeight={'bold'}>결제 금액 : {totalPrice}원</Typography>
    </div>
    )
}

export const OrderInfo: React.FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%", margin: "10px" }}>
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

interface PayMethodProp {
    method: PaymentType;
    setMethod: React.Dispatch<React.SetStateAction<PaymentType>>
}

const payment = [
    { src: naverpayImg, type: PaymentType.NAVER_PAY },
    { src: kakaopayImg, type: PaymentType.KAKAO_PAY },
    { src: creditcardImg, type: PaymentType.CREDITCARD }
]

export const PayMethod: React.FC<PayMethodProp> = ({ method, setMethod }) => {
    const onClick = (type: PaymentType) => setMethod(type)
    return (
        <div style={{
            justifyContent: 'space-between',
        }}>
            {payment.map((item, idx) => {
                const isSelected = item.type === method; // 현재 선택된 버튼인지 확인

                return (
                    <Button
                        disableRipple
                        disableElevation
                        onClick={() => onClick(item.type)}
                        sx={{
                            borderRadius: '3rem',
                            maxWidth: '100px',
                            maxHeight: '30px',
                            paddingRight: "10px",
                            border: isSelected ? '2px solid blue' : 'none', // 선택된 버튼에 테두리 적용
                        }}
                    >
                        <img
                            src={item.src}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '1rem',
                            }}
                            alt={item.type}
                        />
                    </Button>
                );
            })}
        </div>
    )
}
