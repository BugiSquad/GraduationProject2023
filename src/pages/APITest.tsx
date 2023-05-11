import {Button, Input, Typography} from "@mui/material";
import {createNewPost} from "../api/Post";
import {faker} from "@faker-js/faker";
import {requestMemberSignIn, requestMemberSignUp, setMyInfo} from "../api/Member";
import {addMenus} from "../api/Menu";
import {useState} from "react";
import {Form} from "react-router-dom";
import {MyInfo} from "../types/MyInfo";
import {Gender, Interest, MemberType} from "../types/MemberDto";
import {GroupType, PostDto} from "../types/PostDto";

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
        let interest = new Interest()
        interest.pubg = true;
        interest.lol = true;
        let name = faker.word.noun()
        requestMemberSignUp(
            {
                password: "example",
                name: `${name}`,
                phone: `${faker.phone.number()}`,
                studentId: Math.random() * 10000,
                email: `${name}@example.com`,
                memberType: MemberType.STUDENT,
                department: "컴퓨터공학과",
                gender: Gender.MALE,
                interestPostDto: interest
            }
        ).then((res) => {
            console.log(res)
        })
    }
    const createPost = (id: number) => {
        let time = new Date()
        let dateToTimeString = time.toISOString()
        let post: PostDto = {
            title: `${faker.lorem.sentence(4)}`,
            body: `${faker.lorem.sentence(6)}`,
            memberId: Math.floor(Math.random() * 100),
            scheduledMealTime: dateToTimeString,
            groupType: GroupType.INDIVIDUAL
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
            {/*<Button onClick={createPost}>글 올리기</Button>*/}
            <Button onClick={() => {
                addMenus()
            }}>메뉴 등록</Button>
            <Button onClick={createDummyMembers}>더미 회원 만들기(X100)</Button>
            <Button onClick={createDummyPosts}>더미 글 올리기</Button>
            <SignInForm></SignInForm>
        </div>
    )
}

const SignInForm: React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    function onSubmit() {
        requestMemberSignIn({email: email, password: password})
            .then((res) => {
                const myInfo: MyInfo = {...res.data.data}
                setMyInfo(myInfo)
            })
            .catch((err) => console.error(err))
    }

    return (
        <>
            <Form onSubmit={onSubmit}>
                이메일: <Input type={"email"} onChange={(event) => setEmail(event.target.value as string)}></Input>
                <br/>
                비밀번호:<Input type={"password"} onChange={(event) => setPassword(event.target.value as string)}></Input>
                <br/>
                <Button type={"submit"}>제출하기</Button>
            </Form>
        </>
    )
}
