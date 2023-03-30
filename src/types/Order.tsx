export enum OrderStatus {
    Request = 'request',
    Receive = 'receive',
    Finish = 'finish'
}

export interface Order {
    order_id: string;
    order_detail: string;
    order_time: Date;
    order_status: OrderStatus;
    total_price: number;
    member_id: number;
    shop_id: number;
    payment_id: number;
}