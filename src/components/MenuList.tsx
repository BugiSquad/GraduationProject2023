import data from "../data/SampleFood.json";
import { MenuCategories } from "./MenuCategory"
import { Food } from "../components/Food";
import { CartItemList } from "./Cart"

const foods: Food[] = data


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

