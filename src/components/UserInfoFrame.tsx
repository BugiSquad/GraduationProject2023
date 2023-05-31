import React, {ChangeEvent, useState} from "react";
import defaultImage from "../images/default.png";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {
    Autocomplete,
    AutocompleteRenderInputParams,
    Button,
    FormControl,
    FormControlLabel,
    Grid,
    Input,
    InputAdornment,
    Link,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material"
import {Form, Link as Linkto, useNavigate} from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';

import {FormGridChild} from "./styled/FormGrid";
import {InterestFilter, InterestOptionType} from "./InterestFilter";
import {OrangeButton, WhiteButton} from "./styled/Buttons";
import {checkEmailInUse, checkNicknameInUse, requestMemberSignUp, uploadImageToRemote} from "../api/Member";
import {Gender, Interest, MemberType} from "../types/MemberDto";


export interface UserInfoFrameProps {
    name: string;
    email: string;
    userprofilePic: string | null; // 프로필 사진이 없을 수도 있으므로 null 가능성 추가
    isEdit: Boolean;
}

const maleImage = ["https://bugisquad2023.s3.ap-northeast-2.amazonaws.com/cc04b584eafe48879a9a6eb0615e13c1.png",
    "https://bugisquad2023.s3.ap-northeast-2.amazonaws.com/8fd0e4bd920744d39197db67a1a21ed9.png",
    "https://bugisquad2023.s3.ap-northeast-2.amazonaws.com/90ac0fee4498413b8c371b00438bfa43.png",]
const femaleImage = ["https://bugisquad2023.s3.ap-northeast-2.amazonaws.com/625bf51bd036470a847e92540362dca3.png",
    "https://bugisquad2023.s3.ap-northeast-2.amazonaws.com/5f2654aa50bb4c2baeedad137a404bff.png",
    "https://bugisquad2023.s3.ap-northeast-2.amazonaws.com/6d2e20ba6a804f0f8e395cdc3b7c70c4.png",]


export const Departments = [
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

export interface UserInfo {
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

type Validation = {
    email: boolean;
    nickname: boolean;

}

export const UserInfoFrame: React.FC<UserInfoFrameProps> = ({userprofilePic, isEdit}) => {
    const [profilePic, setProfilePic] = useState<string | null>(
        userprofilePic
    );
    const [file, setFile] = useState<File | null>(null)
    const [userInfo, setInfo] = useState({} as UserInfo);
    const [gender, setGender] = useState<Gender>(Gender.NONE)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [interests, setInterests] = useState<InterestOptionType[]>([])
    const [validation, setValidation] = useState<Validation>({email: false, nickname: false});
    const navigate = useNavigate()
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
            setFile(file);
            reader.readAsDataURL(file);
        }
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

    function validateForm(userInfo: UserInfo) {
        if (userInfo.email === "") {
            alert("이메일을 입력하세요")
            return false;
        }
        if (userInfo.nickname === "") {
            alert("닉네임을 입력하세요")
            return false;
        }
        if (userInfo.studentId == null) {
            alert("학번을 입력하세요")
            return false;
        }
        if (userInfo.department === "") {
            alert("학과를 선택하세요")
            return false;
        }
        return true

    }

    const onSubmit = async () => {
        userInfo.interests = interests
        let member = {
            ...userInfo,
            name: userInfo.nickname,
            gender: gender,
            memberType: MemberType.STUDENT,
            interestPostDto: new Interest(interests),
        }

        if (!validateForm(userInfo)) {
            return;
        }
        try {
            const email = await checkEmailInUse(userInfo.email)
            console.log(email)
            if (email.status >= 400) {
                alert("이미 사용중인 이메일입니다.")
                return
            }
        } catch (e) {
            alert("이미 사용중인 이메일입니다.")
            return
        }
        try {
            const nickname = await checkNicknameInUse(userInfo.nickname)
            console.log(nickname)
            if (nickname.status >= 400) {
                alert("이미 사용중인 닉네임입니다.")
                return
            }
        } catch (e) {
            alert("이미 사용중인 닉네임입니다.")
            return
        }

        if (file == null) {
            requestMemberSignUp({
                ...member,
                profileUrl: selectImage(gender)
            }).then(res => {
                console.log("회원가입 성공")
                navigate('/login')
            }).catch((err) => console.error(`회원가입 실패 : ${{...err}}`))
        } else {
            const formData = createFormWithImage(file);
            uploadImageToRemote(formData)
                .then((res) => {
                    requestMemberSignUp({
                        ...member,
                        profileUrl: res.data.data.url
                    }).then(res => {
                        console.log("회원가입 성공")
                        navigate('/login')
                    }).catch((err) => console.error(`회원가입 실패 : ${{...err}}`))
                }).catch((err) => console.error(`사진 업로드 실패 : ${{...err}}`));
        }
    }
    const handleRemoveImg = () => {
        setProfilePic(defaultImage);
    }
    return (
        <>
            <Form onSubmit={onSubmit}>
                <div style={{paddingTop: "20px"}}>
                    <img
                        src={profilePic || defaultImage}
                        alt="프로필 사진"
                        style={{width: 130, height: 120, borderRadius: "35%"}}
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
                          onClick={handleRemoveImg}
                    >
                        / 삭제하기
                    </Link>
                </div>

                <Grid container spacing={1}>
                    <FormGridChild item xs={12}>
                        <Typography fontSize={'15px'} sx={{
                            fontWeight: 'bold',
                            minWidth: "40px",
                        }}>이메일＊</Typography>
                        <TextField size="small" type={"email"} required
                                   variant="standard" value={userInfo.email} onChange={(event) => {
                            setInfo({...userInfo, email: event.target.value})
                        }} color="warning"/>
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
                        <Typography variant="body1" sx={{fontWeight: 'bold',}}>비밀번호＊</Typography>
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
                    <FormGridChild item xs={5}>
                        <Typography variant="body1" sx={{fontWeight: 'bold'}}>비밀번호
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
                        <Typography variant="body1" sx={{fontWeight: "bold",}}>학과＊</Typography>
                        <SelectDepartment
                            onChange={(e: React.SyntheticEvent<Element, Event>, v: { label: string } | null) => {
                                if (v == null) return;
                                setInfo({...userInfo, department: v.label})
                            }} renderInput={(params) => (
                            <TextField required {...params} variant="standard" color="warning"/>
                        )}/>
                    </FormGridChild>
                    <FormGridChild item xs={12}>
                        <SelectGender value={gender} onChange={(event, value) => {
                            setGender(value as Gender)
                        }}/>
                    </FormGridChild>
                    <FormGridChild item xs={10}>
                        <InterestFilter setSelectedInterests={setInterests} selectedInterests={interests}/>
                    </FormGridChild>
                    <FormGridChild item xs={10}>
                        <InputPhoneNumber userInfo={userInfo} onChange={(e) => {
                            setInfo({...userInfo, phone: e.target.value})
                        }}/>
                    </FormGridChild>
                    <FormGridChild item xs={5}>
                        <Button type={"submit"} disableElevation disableRipple sx={OrangeButton}>
                            {isEdit ? "수정" : "가입"}
                        </Button>
                    </FormGridChild>
                    <FormGridChild item xs={5}>
                        <Linkto to="/login"><Button disableElevation disableRipple sx={WhiteButton}>
                            취소
                        </Button></Linkto>
                    </FormGridChild>
                </Grid>
            </Form>
        </>
    )
}

function SelectGender(props: { value: Gender, onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void }) {
    return <>
        <Typography variant="body1" sx={{fontWeight: "bold",}}>성별＊</Typography>
        <RadioGroup value={props.value} sx={{display: "flex", flexDirection: "row"}} onChange={props.onChange}>
            <FormControlLabel value={`${Gender.MALE}`} control={<Radio/>} label="남성"/>
            <FormControlLabel value={`${Gender.FEMALE}`} control={<Radio/>} label="여성"/>
            <FormControlLabel value={`${Gender.NONE}`} control={<Radio/>} label="제 3의 성"/>
        </RadioGroup>
    </>;
}

function InputPhoneNumber(props: {
    userInfo: UserInfo,
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}) {
    return <>
        <Typography variant="body1" sx={{fontWeight: "bold", minWidth: "40px"}}>전화번호</Typography>
        <TextField required sx={{minWidth: "265px", paddingRight: "20px"}} variant="standard"
                   color="warning" value={props.userInfo.phone} onChange={props.onChange}/>
    </>;
}

function SelectDepartment(props: {
    onChange: (e: React.SyntheticEvent<Element, Event>, v: ({ label: string } | null)) => void,
    renderInput: (params: AutocompleteRenderInputParams) => JSX.Element
}) {
    return <div style={{width: "100%"}}>
        <Autocomplete
            disablePortal
            options={Departments}
            onChange={props.onChange}
            renderInput={props.renderInput}
        />
    </div>;
}

function createFormWithImage(file: File) {
    const formData = new FormData();
    formData.append('file', new Blob([file], {type: file.type}));
    return formData
}

function selectImage(g: Gender) {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (g) {
        case Gender.FEMALE:
            return femaleImage[randomNumber];
        case Gender.MALE:
            return maleImage[randomNumber];
        case Gender.NONE:
            return "https://bugisquad2023.s3.ap-northeast-2.amazonaws.com/852cc39bee6c49a89d62574f58e6a994.png"
    }
}
