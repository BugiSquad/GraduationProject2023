import React, {useState} from "react";
import defaultImage from "../images/default.png";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {
    Autocomplete,
    Button,
    FormControl,
    Grid,
    Input,
    InputAdornment,
    Link,
    TextField,
    Typography
} from "@mui/material"
import {Form, Link as Linkto} from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';

import {FormGridChild} from "./styled/FormGrid";
import {InterestFilter, InterestOptionType} from "./InterestFilter";
import {OrangeButton, WhiteButton} from "./styled/Buttons";
import axios from "axios";
import {getMyToken} from "../api/Common";
import {requestMemberSignUp} from "../api/Member";
import {Gender, Interest, MemberType} from "../types/MemberDto";


export interface UserInfoFrameProps {
    name: string;
    email: string;
    userprofilePic: string | null; // 프로필 사진이 없을 수도 있으므로 null 가능성 추가
    isEdit: Boolean;
}

const Departments = [
    {label: '한국어문학부'},
    {label: '역사문화학부'},
    {label: '영어영문학부'},
    {label: '지식정보학부'},
    {label: '컴퓨터공학과'},
    {label: 'IT응용시스템공학과'},
    {label: '산업경영공학과'},
    {label: '기계시스템공학과'},
    {label: '전자정보공학과'},
]

interface UserInfo {
    nickname: string,
    password: string,
    studentId: number,
    testPassword: string,
    email: string,
    department: string,
    phone: string,
    memberProfileUrl: string,
    interests: InterestOptionType[],
}

export const UserInfoFrame: React.FC<UserInfoFrameProps> = ({userprofilePic, isEdit}) => {
    const [profilePic, setProfilePic] = useState<string | null>(
        userprofilePic
    );
    const [userInfo, setInfo] = React.useState({} as UserInfo);
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [interests, setInterests] = useState<InterestOptionType[]>([])
    const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        const allowedTypes = ["image/png", "image/jpeg", "image/gif"]; // 허용 가능한 이미지 파일 형식
        if (file) {
            if (!allowedTypes.includes(file.type)) { // 이미지 파일이 아닌 경우
                alert("이미지 파일만 업로드할 수 있습니다.");
                event.target.value = ""; // input 요소의 값 초기화
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfilePic(event.target?.result as string | null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

    const onSubmit = () => {
        // if (studentId === undefined) return;
        userInfo.interests = interests
        console.log(userInfo)
        if (profilePic != null) {
            console.log("파일이 비어있습니다.");
            const formData = new FormData();
            formData.append('file', profilePic);
            axios.post('https://api.bugisquad.link/api/s3', formData, {headers: {accessToken: getMyToken()}}).then((res) => {
                console.log(res)
            }).catch((err) => console.error(err))
            // return;
        }
        requestMemberSignUp({
            name: userInfo.nickname,
            ...userInfo,
            gender: Gender.NONE,
            memberType: MemberType.STUDENT,
            interestPostDto: new Interest(interests),
            profileUrl: ""
        }).then((res) => {
            console.log(res)
        }).catch((err) => console.error(err))
    }
    return (
        <>
            <Form onSubmit={onSubmit}>
                <div style={{paddingTop: "20px"}}>
                    <img
                        src={profilePic || defaultImage}
                        alt="프로필 사진"
                        style={{width: 120, height: 120, borderRadius: "40%"}}
                    />
                </div>


                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", paddingTop: "10px"}}>
                    <Link
                        component="label"
                        sx={{color: "grey", fontSize: "13px"}}
                    >
                        {isEdit ? "사진 수정하기 " : "사진 추가하기 "}
                        <input
                            type="file"
                            onChange={handleProfilePicChange}
                            hidden
                        />
                    </Link>
                    <Link sx={{color: "grey", fontSize: "13px"}}
                    >
                        / 삭제하기
                    </Link>
                </div>

                <Grid container spacing={2}>
                    <FormGridChild item xs={6}>
                        <Typography fontSize={'15px'} sx={{
                            fontWeight: 'bold',
                            minWidth: "40px",
                        }}>이메일＊</Typography>
                        <TextField size="small" type={"email"} required
                                   variant="standard" value={userInfo.email} onChange={(event) => {
                            setInfo({...userInfo, email: event.target.value})
                        }} color="warning"/>
                    </FormGridChild>
                    <FormGridChild item xs={4}>
                        {isEdit ? false :
                            <Button disableElevation disableRipple sx={OrangeButton}>
                                중복확인
                            </Button>
                        }
                    </FormGridChild>
                    <FormGridChild item xs={5}>
                        <Typography variant="body1" sx={{fontWeight: 'bold',}}>닉네임</Typography>
                        <TextField required variant="standard"
                                   color="warning" value={userInfo.nickname}
                                   onChange={(event) => {
                                       setInfo({...userInfo, nickname: event.target.value})
                                   }}
                        />
                    </FormGridChild>
                    <FormGridChild item xs={5}>
                        <Typography variant="body1" sx={{fontWeight: 'bold'}}>학번*</Typography>
                        <TextField required variant="standard"
                                   type={"number"}
                                   color="warning" value={userInfo.studentId}
                                   onChange={(event) => {
                                       setInfo({...userInfo, studentId: Number(event.target.value)})
                                   }}
                        />
                    </FormGridChild>
                    <FormGridChild item xs={5}>
                        <Typography variant="body1" sx={{fontWeight: 'bold',}}>새 비밀번호＊</Typography>
                        <FormControl variant="standard">
                            <Input required
                                   type={showPassword ? 'text' : 'password'}
                                   color="warning"
                                   endAdornment={
                                       <InputAdornment position="end">
                                           <Button disableElevation disableRipple sx={{color: "grey"}}
                                                   aria-label="toggle password visibility"
                                                   onClick={handleClickShowPassword}
                                                   onMouseDown={handleMouseDownPassword}
                                           >
                                               {showPassword ? <VisibilityOff/> : <Visibility/>}
                                           </Button>
                                       </InputAdornment>
                                   }
                                   value={userInfo.password}
                                   onChange={(event) => setInfo({...userInfo, password: event.target.value})}
                            />
                        </FormControl>
                    </FormGridChild>
                    <FormGridChild item xs={12}>

                        <Typography variant="body1" sx={{fontWeight: 'bold'}}>새 비밀번호

                            확인＊</Typography>
                        <FormControl variant="standard">
                            <Input required
                                   type={showPassword ? 'text' : 'password'}
                                   color="warning"
                                   endAdornment={
                                       <InputAdornment position="end">
                                           <Button disableElevation disableRipple sx={{color: "grey"}}
                                                   aria-label="toggle password visibility"
                                                   onClick={handleClickShowPassword}
                                                   onMouseDown={handleMouseDownPassword}
                                           >
                                               {showPassword ? <VisibilityOff/> : <Visibility/>}
                                           </Button>
                                       </InputAdornment>
                                   }
                                   value={userInfo.testPassword}
                                   onChange={(e) => {
                                       setInfo({...userInfo, testPassword: e.target.value})
                                   }}
                            />
                        </FormControl>
                    </FormGridChild>
                    <FormGridChild item xs={12}>
                        <Typography variant="body1" sx={{fontWeight: 'bold',}}>학과＊</Typography>
                        <Autocomplete
                            disablePortal
                            options={Departments}
                            onChange={(e, v) => {
                                if (v == null) return;
                                setInfo({...userInfo, department: v.label})
                            }}
                            renderInput={(params) => (
                                <TextField required {...params} variant="standard" color="warning"/>
                            )}
                        />
                    </FormGridChild>
                    <FormGridChild item xs={5}>
                        <InterestFilter setSelectedInterests={setInterests} selectedInterests={interests}/>
                    </FormGridChild>
                    <FormGridChild item xs={12}>
                        <Typography variant="body1" sx={{fontWeight: 'bold', minWidth: "40px"}}>전화번호＊</Typography>
                        <TextField required sx={{minWidth: "265px", paddingRight: "20px"}} variant="standard"
                                   color="warning" value={userInfo.phone} onChange={(e) => {
                            setInfo({...userInfo, phone: e.target.value})
                        }}/>
                    </FormGridChild>
                    <FormGridChild item xs={4}>

                        <Button type={"submit"} disableElevation disableRipple sx={OrangeButton}>
                            {isEdit ? "수정하기" : "회원가입하기"}
                        </Button>
                    </FormGridChild>
                    <FormGridChild item xs={4}>
                        <Linkto to="/login"><Button disableElevation disableRipple sx={WhiteButton}>
                            취소
                        </Button></Linkto>
                        <Button onClick={onSubmit} sx={WhiteButton}>사진 제출</Button>
                    </FormGridChild>
                </Grid>
            </Form>
        </>
    )
}