export enum MemberType {
    STUDENT = "student",
    ADMIN = "admin"
}

/**
 * 회원가입할 때 백엔드에  이 정보들을 포함하여 전송해야 합니다.
 */
export interface Member {
    name: string;
    phone: string;
    studentId: number;
    email: string;
    department: string;
    memberType: string;
}