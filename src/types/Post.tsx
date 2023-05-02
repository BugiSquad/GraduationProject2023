export enum GroupType {
    MATCH = "MATCH", GROUP = "GROUP"
}

export interface Post {
    memberId: number;
    title: string;
    body: string;
    type: string;
    scheduledMealTime: string;
}