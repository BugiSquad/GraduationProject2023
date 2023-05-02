import {FoodDetailContents} from "../components/FoodDetailContents"
import {SimpleTemplate} from "./PageTemplate"
import {getMenuById} from "../api/Menu";
import {useLoaderData} from "react-router-dom";
import {CartItem} from "../types/CartItem";

export const FoodDetail: React.FC = () => {
    const loaderData = useLoaderData() as CartItem
    if (loaderData === undefined || loaderData == null) return (<div>로딩중</div>)
    // let food = toMenuObject(loaderData)

    return (<div className="App container">
            <SimpleTemplate param={{pageHeaderName: "음식 상세"}}>
                <FoodDetailContents food={{...loaderData}}/>
            </SimpleTemplate>
        </div>
    )
}

// @ts-ignore
export async function menuLoader({params}) {
    let axios = getMenuById(params.id)
    return axios.then(function (response) {
        const json = JSON.parse(JSON.stringify(response.data.data))
        return {
            id: json.menuId,
            name: json.name,
            price: json.price,
            imageUrl: json.imageUrl,
            category: json.category,
            description: json.description
        }
    })
}