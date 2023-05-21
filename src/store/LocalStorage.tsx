import {CartItem as Item} from "../types/CartItem";

export enum StorageType {
    FAVORITE = "favorite", RECENTLY_VIEWED = "recentlyViewed"
}

export const saveFoodToStorage = (key: StorageType, food: Item) => {
    const local = localStorage.getItem(key)
    let favorite = JSON.parse(local == null ? "[]" : local)
    favorite = [...(favorite.filter((item: Item) => item.id !== food.id))]
    favorite = [...favorite, food]
    localStorage.setItem(key, JSON.stringify(favorite))
}

export const removeFoodFromStorage = (key: StorageType, food: Item) => {
    const local = localStorage.getItem(key)
    let favorite = JSON.parse(local == null ? "[]" : local)
    favorite = [...(favorite.filter((item: Item) => item.id !== food.id))]
    localStorage.setItem(key, JSON.stringify(favorite))
}
export const getFoodsWith = (key: StorageType) => {
    const local = localStorage.getItem(key)
    return JSON.parse(local == null ? "[]" : local) as Item[]
}
