export enum OrderStatus {
    Request = 'request',
    Receive = 'receive',
    Finish = 'finish'
}

export type Order = {
    order_id: number;
    order_time: Date;
    order_status: OrderStatus;
    total_price: number;
    member_id: number;
    shop_id: number;
    payment_id: number;
}