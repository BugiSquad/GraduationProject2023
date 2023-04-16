import {MenuCategory} from "./MenuCategory";

export interface MenuItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category?: MenuCategory;
    description: string;
}