export enum OrderStatus {
    RESERVATION = "예약주문", NOW = "접수됨", PACKAGING = "포장주문", COMPLETE = "완료"
}

export const toOrderStatus = (value: string) => {
    switch (value) {
        case "RESERVATION":
            return OrderStatus.RESERVATION
        case "NOW":
            return OrderStatus.NOW
        case "PACKAGING":
            return OrderStatus.PACKAGING
        case "COMPLETE":
            return OrderStatus.COMPLETE
        default:
            throw new Error("알 수 없는 주문상태입니다.")
    }
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

export interface CreateOrderDto {
    paymentPostDto: CreatePaymentDetailDto;
    menuOrderItems: OrderItem[];
    ordersType: OrderType;
}

export interface OrderList {
    ordersId: number;
    totalPrice: number;
    paymentDto: Payment;
    ordersType: OrderStatus;
    menuOrdersItemDtoList: MenuOrdersItem[];
}
