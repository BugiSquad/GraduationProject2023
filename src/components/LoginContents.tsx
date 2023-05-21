import {Visibility, VisibilityOff} from "@mui/icons-material"
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material"
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useState} from "react"
import {getMyInfo, requestMemberSignIn, setMyInfo} from "../api/Member";
import {MyInfo} from "../types/MyInfo";
import {OrangeButton, WhiteButton} from "./styled/Buttons";

export const LoginContents: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        requestMemberSignIn({email: email, password: password}).then((res) => {
            let info = {accessToken: res.data.data} as MyInfo
            if (info.accessToken != '') {
                console.log("logged in.");
                setIsLoggedIn(true);
                alert("로그인에 성공하였습니다.");
                navigate("/app");
            } else {
                alert("부적절한 접근입니다. 다시 시도해주세요.");
            }
            setMyInfo(info)
            let storedInfo = getMyInfo()
            console.log(`로그인 했습니다. ${JSON.stringify(storedInfo)} `)
        }).catch(err => console.error(err))
    };

    return (
        <>
            <div style={{display: "flex", alignContent: "flex-start"}}>
                <Typography variant="h5" sx={{paddingTop: "30px", fontWeight: "bold"}}> 환영합니다!</Typography>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "10px"}}>
                <TextField label="아이디" type={"email"} value={email} onChange={handleUsernameChange}/>
                <FormControl variant="outlined">
                    <InputLabel>비밀번호</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Button
                    onClick={handleLogin}
                    sx={OrangeButton}
                    style={{borderRadius: "0.5rem", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"}}>
                    로그인
                </Button>
                <Button
                    component={RouterLink}
                    to="/signup"
                    sx={WhiteButton}
                    style={{borderRadius: "0.5rem", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"}}
                >
                    회원가입 하러가기
                </Button>

            </div>
            <Button disableElevation sx={{padding: "10px"}}>
                아이디 / 비밀번호를 잊으셨나요? </Button>
        </>
    )
} 