export interface NoteMessage {
    id: number;
    member_Id: number;
    profileUrl: string;
    name: string;
    message: string;
    createdAt: string;
    firstMessage: boolean;
}
