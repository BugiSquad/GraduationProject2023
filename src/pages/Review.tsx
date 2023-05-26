import { ReviewContent } from "../components/ReviewContent"
import { MenuItem } from "../types/MenuItem"
import { BottomNavigationTab } from "../types/PageHeaderParam"
import { SimpleTemplate } from "./PageTemplate"




export const Review: React.FC<MenuItem> = (props) => {

    return (
        <div className="App container">
            <SimpleTemplate param={{ pageHeaderName: "리뷰 작성", tab: BottomNavigationTab.MENU }}>
                <ReviewContent {...props} />
            </SimpleTemplate>
        </div>
    )
}