import {FoodDetailContents} from "../components/FoodDetailContents"
import {SimpleTemplate} from "./PageTemplate"
import {getMenuById} from "../api/Menu";
import {useLoaderData} from "react-router-dom";
import {CartItem} from "../types/CartItem";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import {saveFoodToStorage, StorageType} from "../store/LocalStorage";

export const FoodDetail: React.FC = () => {
    const loaderData = useLoaderData() as CartItem
    if (loaderData === undefined || loaderData == null) return (<div>로딩중</div>)
    saveFoodToStorage(StorageType.RECENTLY_VIEWED, loaderData)
    return (
        <SimpleTemplate param={{pageHeaderName: "음식 상세", tab: BottomNavigationTab.MENU}}>
            <FoodDetailContents food={{...loaderData}}/>
        </SimpleTemplate>
    )
}

// @ts-ignore
export async function menuLoader({params}) {
    let axios = getMenuById(params.id)
    return axios.then(function (response) {
        const data = response.data.data
        return {id: data.menuId, ...data}
    })
}