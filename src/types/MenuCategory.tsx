export enum MenuCategory {
    STEW = "STEW", NOODLE = "NOODLE", RICE = "RICE", JAPAN_FOOD = "JAPAN_FOOD",
    CHINA_FOOD = "CHINA_FOOD", KOREAN_FOOD = "KOREAN_FOOD", WESTERN_FOOD = "WESTERN_FOOD"
}
export function toLocalizedName(category: string): string {
    switch (category) {
        case "STEW":
            return "찌개"
        case "NOODLE":
            return "면류"
        case "RICE":
            return "밥류"
        case "JAPAN_FOOD":
            return "일식"
        case "CHINA_FOOD":
            return "중식"
        case "KOREAN_FOOD":
            return "한식"
        case "WESTERN_FOOD":
            return "양식"
        default:
            throw new Error("unknown category")
    }
}