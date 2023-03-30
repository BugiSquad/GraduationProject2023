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