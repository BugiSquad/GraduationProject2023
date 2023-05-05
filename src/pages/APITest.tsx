import {Button, Typography} from "@mui/material";
import {createNewPost} from "../api/Post";
import {GroupType, Post} from "../types/Post";
import {faker} from "@faker-js/faker";
import {requestMemberRegister} from "../api/Member";
import {addMenus} from "../api/Menu";

/**
 * 회원가입 페이지
 * +
 * 게시글 더미 데이터 올리는 기능이 있음
 * TODO 추후에 작성된 회원가입 페이지로 대체
 * @returns {JSX.Element}
 * @constructor
 */
export const APITest: React.FC = () => {
    faker.setLocale('ko')
    const onButtonClicked = () => {
        requestMemberRegister(
            {
                name: `${faker.name.fullName()}`,
                phone: `${faker.phone.number()}`,
                studentId: Math.random() * 10000,
                email: `example@hansung.ac.kr`,
                memberType: "student",
                department: "컴퓨터공학과"
            }
        ).then((res) => {
            console.log(res)
        })
    }
    const createPost = (id: number) => {
        let time = new Date()
        let dateToTimeString = time.toISOString()
        let post: Post = {
            title: `${faker.lorem.sentence(4)}`,
            body: `${faker.lorem.sentence(6)}`,
            memberId: 1,
            scheduledMealTime: dateToTimeString,
            type: GroupType.MATCH
        }
        createNewPost(post).then((res) => {
            console.log(res)
        })
    }
    const createDummyMembers = () => {
        for (let i = 0; i < 100; i++) {
            onButtonClicked()
        }
    }

    const createDummyPosts = () => {
        for (let i = 0; i < 100; i++) {
            createPost(i + 1)
        }
    }
    return (
        <div>
            <Typography variant={"h4"}>API테스트</Typography>
            <Button onClick={onButtonClicked}>회원가입</Button>
            <Button onClick={addMenus}>메뉴 등록</Button>
            <Button onClick={createDummyMembers}>더미 회원 만들기(X100)</Button>
            <Button onClick={createDummyPosts}>더미 글 올리기</Button>
        </div>
    )
}