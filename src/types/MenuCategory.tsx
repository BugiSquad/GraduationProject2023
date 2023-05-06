export enum MenuCategory {
    stew = "stew", noodle = "noodle", rice = "rice", japanFood = "japanFood",
    chinaFood = "chinaFood", koreanFood = "koreanFood", westernFood = "westernFood"
}
export function toLocalizedName(category: string): string {
    switch (category) {
        case "stew":
            return "찌개"
        case "noodle":
            return "면류"
        case "rice":
            return "밥류"
        case "japanFood":
            return "일식"
        case "chinaFood":
            return "중식"
        case "koreanFood":
            return "한식"
        case "westernFood":
            return "양식"
        default:
            throw new Error("unknown category")
    }
}