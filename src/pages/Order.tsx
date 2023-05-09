import {OrderContents} from "../components/OrderContents"
import {SimpleTemplate} from "./PageTemplate"
import {BottomNavigationTab} from "../types/PageHeaderParam";

export const Order: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "주문하기", tab: BottomNavigationTab.MENU}}>
            <div>
                <OrderContents/>
            </div>
        </SimpleTemplate>
    )
}