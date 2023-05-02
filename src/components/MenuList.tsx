import data from "../data/SampleFood.json";
import {MenuCategories} from "./MenuCategory"
import {CartItemList} from "./Cart"
import {MenuItem} from "../types/MenuItem";

const foods: MenuItem[] = data


export const MenuList: React.FC = () => {
    return (
        <>
            <MenuCategories />
            <div style={{display: "flex", justifyContent: "center"}}>
                <CartItemList foods={foods}></CartItemList>
            </div>
        </>
    )
}

