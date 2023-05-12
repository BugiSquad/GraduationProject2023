import {Button, Input, Typography} from "@mui/material";
import {createNewPost} from "../api/Post";
import {faker} from "@faker-js/faker";
import {requestMemberSignIn, requestMemberSignUp, setMyInfo} from "../api/Member";
import {addMenus} from "../api/Menu";
import React, {useState} from "react";
import {Form} from "react-router-dom";
import {MyInfo} from "../types/MyInfo";
import {Gender, Interest, MemberType} from "../types/MemberDto";
import {GroupType, PostDto} from "../types/PostDto";
import {checkPermission, requestPermission} from "../api/Notification";
import {subscribeWith, SubscriptionPostDto} from "../api/Subscription";
import {getMyID} from "../api/Common";

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
        }
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
    if (checkPermission()) {
        navigator.serviceWorker.getRegistration().then(res => {
            if (res != null) return res;
            else return navigator.serviceWorker.register(`/service-worker.js`, {scope: '/'})
        }).then(async res => {
            res.showNotification("asdf", {body: 'asdf'})
            const subscription = await res.pushManager.getSubscription()
            if (subscription == null) {
                const newSubscription = await res.pushManager.subscribe({
                        applicationServerKey: "BKuaSaL3pR_rsX00tUY6AbQ1pIZEf-T7fSTrFM1z_8Ygt50uP5OSzMqVYWdQWeNYVc_tAC8T2w3FMx3MjYwno2U",
                        userVisibleOnly: true,
                    }
                )
                alert(`${JSON.stringify(newSubscription.toJSON())}`)
            }
        })
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
                <Button onClick={requestPermission}>권한 요청</Button>
                <Button onClick={() => {
                    if (checkPermission())
                        alert(Notification.permission)
                }}>권한 확인</Button>

            </div>
        </>)
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
    if (!('serviceWorker' in navigator)) {
        alert("failed to get endpoint")
        return;
    }
    // 이미 등록되어있는 정보 가져오기
    try {
        let registration = await navigator.serviceWorker.getRegistration();
        if (!registration) {
            // 없으면 서비스 워커 등록
            registration = await navigator.serviceWorker.register('/service-worker.js');
        } else {
            const value = await registration.pushManager.getSubscription()
            if (value != null) {
                alert("success to get endpoint")
                // alert(value.endpoint)
            } else
                alert("failed to get endpoint")
        }
    } catch (e) {
        alert(`Exception : ${e}`)
    }
}

export const MessageTMP: React.FC = () => {
    const [auth, setAuth] = useState({} as SubscriptionPostDto)
    const [message, setMessage] = useState("")
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
                            memberId: getMyID()
                        }
                        setAuth(a as SubscriptionPostDto)
                        subscribeWith(a as SubscriptionPostDto).then(res => alert(res)).catch(err => alert(JSON.stringify(err)))
                    } else setMessage(message + "\n subscription is null")
                }).catch(error => setMessage(message + `\n ${error.message}`))
            } else setMessage(message + "\n res is null")
        })
    }
    return (
        <>
            <div>
                <Typography variant={"subtitle1"}>{JSON.stringify(auth)}</Typography>
                <Typography variant={"subtitle1"}>{message}</Typography>
            </div>
            <Button onClick={() => {
                registerServiceWorker().then(r => alert(r))
            }}>Provider 구독</Button>
            <Button onClick={() => {
                subscribe()
            }}>백엔드 구독</Button>
        </>)
}
