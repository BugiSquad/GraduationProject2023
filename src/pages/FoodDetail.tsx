import { FoodDetailContents } from "../components/FoodDetailContents"
import { SimpleTemplate } from "./PageTemplate"

export const FoodDetail: React.FC = () => {
    return (<div className="App container">
        <SimpleTemplate param={{ pageHeaderName: "음식 상세" }}>
            <FoodDetailContents />
        </SimpleTemplate>
    </div>
    )
}