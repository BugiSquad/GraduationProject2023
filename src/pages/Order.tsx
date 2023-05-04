import { OrderContents } from "../components/OrderContents"
import { SimpleTemplate } from "./PageTemplate"

export const Order: React.FC = () => {
    return (
        <SimpleTemplate param={{ pageHeaderName: "주문하기" }}>
            <div>
                <OrderContents />
            </div>
        </SimpleTemplate>
    )
}