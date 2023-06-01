export enum MenuCategory {
    STEW = "STEW", NOODLE = "NOODLE", JAPAN_FOOD = "JAPAN_FOOD",
    CHINA_FOOD = "CHINA_FOOD", WESTERN_FOOD = "WESTERN_FOOD"
    , FRIED_RICE = "FRIED_RICE", BIBIMBAP = "BIBIMBAP", CURRY = "CURRY",
}

// STEW, NOODLE, FRIED_RICE, BIBIMBAP, CURRY, JAPAN_FOOD, CHINA_FOOD, WESTERN_FOOD
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
        case "WESTERN_FOOD":
            return "양식"
        case "FRIED_RICE":
            return "오므라이스"
        case "BIBIMBAP":
            return "비빔밥"
        case "CURRY":
            return "카레"
        default:
            throw new Error("unknown category")
    }
}