import {Button, Input, Typography} from "@mui/material";
import {createNewPost} from "../api/Post";
import {faker} from "@faker-js/faker";
import {requestMemberSignIn, requestMemberSignUp, setMyInfo} from "../api/Member";
import {addMenus} from "../api/Menu";
import React, {useEffect, useState} from "react";
import {Form} from "react-router-dom";
import {MyInfo} from "../types/MyInfo";
import {Gender, Interest, MemberDto, MemberType} from "../types/MemberDto";
import {GroupType, PostDto} from "../types/PostDto";
import {checkPermission, registerWorker, requestPermission, subscribePushService} from "../api/Notification";
import {subscribeWith, SubscriptionPostDto} from "../api/Subscription";
import {getApiURL} from "../api/Common";
import {RequestPermission} from "../components/RequestPermission";

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
        const member = {
            password: "example",
            name: `${name}`,
            phone: `${faker.phone.number()}`,
            studentId: Math.random() * 10000,
            email: `${name}@example.com`,
            memberType: MemberType.STUDENT,
            department: "컴퓨터공학과",
            gender: Gender.MALE,
            interestPostDto: interest
        } as MemberDto
        requestMemberSignUp(
            member
        ).then((res) => {
            console.log(member)
        })
    }
    const createPost = (id: number) => {
        let time = new Date()
        let dateToTimeString = time.toISOString()
        let post: PostDto = {
            title: `${faker.lorem.sentence(4)}`,
            body: `${faker.lorem.sentence(6)}`,
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
        <>
            <head>
                <link rel={"manifest"} href={"/site.webmanifest"}/>
            </head>
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
                <RequestPermission/>
            </div>
        </>)
}

const SignInForm: React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    function onSubmit() {
        requestMemberSignIn({email: email, password: password})
            .then((res) => {
                const myInfo: MyInfo = {accessToken: res.data.data}
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

export const MessageTMP: React.FC = () => {
    const [auth, setAuth] = useState({} as SubscriptionPostDto)
    const [permission, setPermission] = useState(false)
    const [info, setInfo] = useState("")
    const [endpoint, setEndpoint] = useState(getApiURL())
    const subscribe = () => {
        navigator.serviceWorker.getRegistration().then((res) => {
            if (res != null) {
                res.pushManager.getSubscription().then(subscription => {
                    if (subscription != null) {
                        alert("simple")
                        let s = subscription.toJSON()
                        let a = {
                            endpoint: `${s.endpoint}`,
                            auth: `${s.keys!!.auth}`,
                            p256dh: `${s.keys!!.p256dh}`,
                        }
                        setAuth(a as SubscriptionPostDto)
                        subscribeWith(a as SubscriptionPostDto).then(res => alert(res)).catch(err => alert(JSON.stringify(err)))
                    } else setInfo(info + "\n subscription is null")
                }).catch(error => setInfo(info + `\n ${error.message}`))
            } else setInfo(info + "\n res is null")
        })
    }
    useEffect(() => {
        if (checkPermission())
            setPermission(true)
    }, [])
    return (
        <>
            <div>
                <Typography variant={"subtitle1"}>API 서버: {endpoint}</Typography>
                <Typography variant={"subtitle1"}>인증정보 : {JSON.stringify(auth)}</Typography>
                <Typography variant={"subtitle1"}>권한: {permission ? "Granted" : "Not granted"}</Typography>
                <Typography variant={"subtitle1"}>DebugInfo: {info}</Typography>
            </div>
            <Button onClick={() => {
                if (checkPermission()) setPermission(true)
            }}>권한 확인</Button>
            <Button onClick={() => requestPermission()}>권한 요청</Button>
            <Button onClick={() => registerWorker().then(res => {
                if (res.active == null)
                    alert("서비스워커 등록에 실패했습니다.")
                else {
                    res.showNotification("제목", {body: "등록성공"})
                }
            })}>워커 등록</Button>
            <Button onClick={() => subscribePushService().then(res => {

            })}>서비스 등록</Button>
            <Button onClick={() => subscribe()}>백엔드 구독</Button>
        </>)
}
