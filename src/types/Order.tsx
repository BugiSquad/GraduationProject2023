export enum OrderStatus {
    Request = '요청됨',
    Receive = '접수됨',
    Finish = '완료됨'
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

export interface OrdersPostDto {
    totalPrice: number;
    ordersType: string;
    memberId: number;
    paymentPostDto: PaymentPostDto;
    menuOrderItems: OrderItemPostDto[];
}

export interface OrderItemPostDto {
    menuId: number;
    count: number;
}

export interface PaymentPostDto {
    paymentNum: string;
    paymentTime: Date;
    confirmNum: number;
    detail: string;
    paymentType: string;
}
