import React from "react";
import {PostItem} from "../types/PostItem";
import {faker} from "@faker-js/faker";
import {RecentMeet} from "./RecentMeet";

export const RecentMeets: React.FC = () => {
    const list: Array<PostItem> = [];
    for (let i = 0; i < 3; i++) {
        list.push({
            postId: -1, body: "", interest: [],
            "title": faker.name.fullName(),
            "memberProfileUrl": faker.image.avatar(),
            "minutesLeftUntilMeal": Math.trunc(Math.random() * 60) + "분 전"
        })
    }
    return (
        <div style={{width: "100%"}}>
            {list.map((user, idx) =>
                <RecentMeet postId={user.postId} key={idx} title={user.title} memberProfileUrl={user.memberProfileUrl}
                            minutesLeftUntilMeal={user.minutesLeftUntilMeal} body={user.body}
                            interest={user.interest}/>)
            }
        </div>
    )
}
