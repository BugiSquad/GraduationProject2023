export enum OrderStatus {
    Request = '요청됨',
    Receive = '접수됨',
    Finish = '완료됨'
}

export enum OrderType {
    reservation = "reservation", now = "now", packaging = "packaging"
}

export enum PaymentType {
    NAVERPAY = "naverPay",
    KAKAOPAY = "kakaoPay",
    CREDITCARD = "creditCard"
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

export interface PaymentDetail {
    paymentNum: string;
    paymentTime?: Date;
    confirmNum: number;
    detail: string;
    paymentType: PaymentType;
}


export interface OrderDto {
    ordersType: OrderType;
    memberId: number;
    paymentPostDto: PaymentDetail;
    menuOrderItems: OrderItem[];
}
