export enum MemberType {
    STUDENT = "student",
    ADMIN = "admin"
}

export enum Gender {
    MALE = "MALE", FEMALE = "FEMALE", NONE = "NONE"
}

export class Interest {
    pubg: boolean = false;
    lol: boolean = false;
    celebrity: boolean = false;
    coffee: boolean = false;
    dessert: boolean = false;
    game: boolean = false;
    popSong: boolean = false;
    kPop: boolean = false;
    jPop: boolean = false;
    drama: boolean = false;
    movie: boolean = false;
    travel: boolean = false;
    study: boolean = false;
    hiking: boolean = false;
    book: boolean = false;
}

/**
 * 회원가입할 때 백엔드에  이 정보들을 포함하여 전송해야 합니다.
 */
export interface MemberDto {
    name: string;
    phone: string;
    studentId: number;
    email: string;
    department: string;
    password: string;
    memberType: MemberType;
    gender: Gender;
    interestPostDto: Interest;
}