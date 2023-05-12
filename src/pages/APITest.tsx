import {Button, Input, Typography} from "@mui/material";
import {createNewPost} from "../api/Post";
import {faker} from "@faker-js/faker";
import {requestMemberSignIn, requestMemberSignUp, setMyInfo} from "../api/Member";
import {addMenus} from "../api/Menu";
import {useEffect, useState} from "react";
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
            <MessageTMP></MessageTMP>
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

async function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    // 이미 등록되어있는 정보 가져오기
    let registration = await navigator.serviceWorker.getRegistration();
    if (!registration) {
        // 없으면 서비스 워커 등록
        registration = await navigator.serviceWorker.register('/service-worker.js');
    }
}

const checkPermission = () => {
    if ("Notification" in window) {
        // 브라우저에서 Notification API를 지원하는 경우
        if (Notification.permission === "granted") {
            // 이미 권한이 부여된 경우
            var notification = new Notification("알림이 도착했습니다!");
        } else if (Notification.permission !== "denied") {
            // 권한이 거절되지 않은 경우
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    var notification = new Notification("알림이 도착했습니다!");
                }
            });
        }
    }
}
export const MessageTMP: React.FC = () => {
    useEffect(() => {
        Notification.requestPermission().then(function (permission) {
            if (permission !== 'granted') {
                throw new Error('Permission not granted for Notification')
            }
        })
        registerServiceWorker().then()
    })
    return (<></>)
}
