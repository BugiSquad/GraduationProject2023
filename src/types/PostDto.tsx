export enum GroupType {
    INDIVIDUAL = "INDIVIDUAL", ORGANIZATION = "ORGANIZATION"
}

export interface PostDto {
    memberId: number;
    title: string;
    body: string;
    groupType: GroupType;
    scheduledMealTime: string;
}