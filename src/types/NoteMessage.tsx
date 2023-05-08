export interface NoteMessage {
    noteId: number;
    memberId: number;
    profileUrl: string;
    name: string;
    message: string;
    createdAt: string;
    firstMessage: boolean;
}
