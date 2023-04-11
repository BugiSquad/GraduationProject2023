import { VisibilityOff, Visibility } from "@mui/icons-material"
import { InputLabel, OutlinedInput, InputAdornment, IconButton, FormControl, Button, Typography } from "@mui/material"
import { SimpleTemplate } from "../pages/PageTemplate"
import { useState } from "react"
import { LoginDialog } from "./LoginDialog"

export const LoginContents: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        // TODO: Implement login logic here
        console.log("log in.")
        setIsLoggedIn(true);
    };

    const handleSignUp = () => {
        // TODO: Navigate to sign up page
    };

    return (
        <>
            <div style={{ display: "flex", alignContent: "flex-start" }} >
                <Typography variant="h5" sx={{ paddingTop: "30px", fontWeight:"bold" }}> 환영합니다!</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "10px" }}>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-id">아이디</InputLabel>
                    <OutlinedInput id="outlined-adornment-id" />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">비밀번호</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Button type="button" onClick={handleLogin} style={{ backgroundColor: '#FE724C', color: "white", fontWeight: "bold", borderRadius: "0.5rem", padding: "0.5rem" }}>
                    로그인
                </Button>
                <Button type="button" onClick={handleSignUp} style={{ backgroundColor: "white", color: "#FE724C", fontWeight: "bold", borderRadius: "0.5rem", padding: "0.5rem" }}>
                    회원가입 하러가기
                </Button>

            </div>
            <Button disableElevation sx={{ padding: "10px" }}>
                아이디 / 비밀번호를 잊으셨나요?            </Button>
            {isLoggedIn && <LoginDialog isOpen={true} />}
        </>
    )
} 