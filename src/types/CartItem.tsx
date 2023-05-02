import {MenuCategory} from "./MenuCategory";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
    category?: MenuCategory;
    description: string;
}