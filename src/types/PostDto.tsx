export enum GroupType {
    INDIVIDUAL = "INDIVIDUAL", ORGANIZATION = "ORGANIZATION"
}

export interface PostDto {
    title: string;
    body: string;
    groupType: GroupType;
    scheduledMealTime: string;
}