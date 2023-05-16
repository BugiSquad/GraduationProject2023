export enum OrderStatus {
    Request = '요청됨',
    Receive = '접수됨',
    Finish = '완료됨'
}

export enum OrderType {
    RESERVATION = "RESERVATION", NOW = "NOW", PACKAGING = "PACKAGING"
}

export enum PaymentType {
    NONE = "NONE",
    NAVER_PAY = "NAVER_PAY",
    KAKAO_PAY = "KAKAO_PAY",
    CREDITCARD = "CREDITCARD"
}

export type Order = {
    order_id: string;
    order_detail: string;
    order_time: Date;
    order_status: OrderStatus;
    total_price: number;
    member_id: number;
    shop_id: number;
    payment_id: number;
}


export interface OrderItem {
    menuId: number;
    count: number;
}

export interface CreatePaymentDetailDto {
    paymentNum: string;
    confirmNum: number;
    detail: string;
    paymentType: PaymentType;
}

interface Payment {
    paymentId: number;
    paymentNum: string;
    paymentTime: Date;
    confirmNum: number;
    detail: string;
    paymentType: PaymentType;
    modifiedAt: Date;
}

interface MenuOrdersItem {
    menuOrdersItemId: number;
    count: number;
    sumPrice: number;
    orderId: number;
    menuId: number;
}

interface OrderDto {
    ordersType: OrderType;
}

export interface CreateOrderDto extends OrderDto {
    paymentPostDto: CreatePaymentDetailDto;
    menuOrderItems: OrderItem[];
}

export interface OrderList extends OrderDto {
    ordersId: number;
    totalPrice: number;
    paymentDto: Payment;
    menuOrdersItemDtoList: MenuOrdersItem[];
}
