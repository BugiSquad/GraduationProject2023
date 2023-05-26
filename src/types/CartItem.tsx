import {MenuItem} from "./MenuItem";

export interface CartItem extends MenuItem {
    starRatio: number; //별점
    avgStarRatio: number; // 평균별점
    rateCounts: number; //리뷰 수
    quantity: number;
}