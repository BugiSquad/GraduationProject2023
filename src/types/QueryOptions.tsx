import {GroupType} from "./PostDto";
import {Gender} from "./MemberDto";

export abstract class PostQueryOption<T> {
    protected static key: string;

    public static getQueryOption<T>(parameter: T): string {
        if (Array.isArray(parameter)) {
            if (parameter.length > 0)
                return `${this.key}=${parameter}&`
            else return ""
        } else if (parameter != null) {
            return `${this.key}=${parameter}&`
        }
        return ""
    }
}

export class GroupTypeOption extends PostQueryOption<GroupType[]> {
    protected static key = "groupType";
}

export class GenderOption extends PostQueryOption<Gender[]> {
    protected static key = "gender";
}

export class InterestOption extends PostQueryOption<Interests[]> {
    protected static key = "interest";
}

export class DepartmentOption extends PostQueryOption<string[]> {
    protected static key = "department";
}

export class TimeOption extends PostQueryOption<number> {
    protected static key = "priorityTime";
}

export class GradeOption extends PostQueryOption<number[]> {
    protected static key = "grade";
}

export enum Interests {
    pbug = 'pubg',
    lol = 'lol',
    celebrity = 'celebrity',
    coffee = 'coffee',
    dessert = 'dessert',
    game = 'game',
    popSong = 'popSong',
    kPop = 'kPop',
    jPop = 'jPop',
    drama = 'drama',
    movie = 'movie',
    travel = 'travel',
    study = 'study',
    hiking = 'hiking',
    book = 'book',
}

export class QueryOptionBuilder {
    private _priorityTime: number | undefined = undefined;
    private _groupType: GroupType[] | undefined = undefined;
    private _gender: Gender[] | undefined = undefined;
    private _interest: Interests[] | undefined = undefined;
    private _department: string[] | undefined = undefined;
    private _grade: number[] | undefined = undefined

    public grade(value: number[] | undefined) {
        this._grade = value;
        return this;
    }

    public priorityTime(value: number | undefined) {
        this._priorityTime = value;
        return this;
    }

    public groupType(value: GroupType[] | undefined) {
        this._groupType = value;
        return this;
    }

    public gender(value: Gender[] | undefined) {
        this._gender = value;
        return this;
    }

    public interest(value: Interests[] | undefined) {
        this._interest = value;
        return this;
    }

    public department(value: string[] | undefined) {
        this._department = value;
        return this;
    }

    public build() {
        let ret = "?"
        if (this._priorityTime) {
            ret += TimeOption.getQueryOption(this._priorityTime)
        }
        if (this._gender) {
            ret += GenderOption.getQueryOption(this._gender)
        }
        if (this._department) {
            ret += DepartmentOption.getQueryOption(this._department)
        }
        if (this._interest) {
            ret += InterestOption.getQueryOption(this._interest)
        }
        if (this._groupType) {
            ret += GroupTypeOption.getQueryOption(this._groupType)
        }
        if (this._grade) {
            ret += GradeOption.getQueryOption(this._grade)
        }
        return ret
    }


}