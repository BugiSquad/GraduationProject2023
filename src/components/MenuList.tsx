import data from "../data/SampleFood.json";
import { CartItemList } from "./Cart"
import { MenuItem } from "../types/MenuItem";
import { RadioBarItem, bgColor } from "./RadioBar";

const foods: MenuItem[] = data

const categories = [
    { name: "전체", bgColor: bgColor, selectValue: false },
    { name: "찌개류", bgColor: bgColor, selectValue: false },
    { name: "면류", bgColor: bgColor, selectValue: false },
    { name: "분식", bgColor: bgColor, selectValue: false },
];

export const MenuList: React.FC = () => {
    return (
        <>
            <RadioBarItem items={categories} />

            <div style={{ display: "flex", justifyContent: "center" }}>
                <CartItemList items={foods.map((e) => {
                    return { ...e, quantity: 0 }
                })}></CartItemList>
            </div>
        </>
    )
}

