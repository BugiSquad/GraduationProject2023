export enum GroupType {
    INDIVIDUAL = "INDIVIDUAL", ORGANIZATION = "ORGANIZATION"
}

export interface Post {
    memberId: number;
    title: string;
    body: string;
    groupType: GroupType;
    scheduledMealTime: string;
}