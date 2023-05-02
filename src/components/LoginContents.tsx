import { VisibilityOff, Visibility } from "@mui/icons-material"
import { InputLabel, OutlinedInput, InputAdornment, IconButton, FormControl, Button, Typography, TextField } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';
import { useState } from "react"
import { LoginDialog } from "./LoginDialog"

export const LoginContents: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        // TODO: Implement login logic here 
        if (username === "a" && password === "a") {
            console.log("logged in.");
            setIsLoggedIn(true);
        }
        setIsLoginDialogOpen(true);
    };

    return (
        <>
            <div style={{ display: "flex", alignContent: "flex-start" }} >
                <Typography variant="h5" sx={{ paddingTop: "30px", fontWeight: "bold" }}> 환영합니다!</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "10px" }}>
                <TextField label="아이디" variant="outlined" value={username} onChange={handleUsernameChange} />
                <FormControl variant="outlined" >
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
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Button onClick={handleLogin} style={{
                    backgroundColor: '#FE724C', color: "white", fontWeight: "bold", borderRadius: "0.5rem", padding: "0.5rem", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
                }}>
                    로그인
                </Button>
                <Button
                    component={RouterLink}
                    to="/signup"
                    style={{
                        backgroundColor: "white",
                        color: "#FE724C",
                        fontWeight: "bold",
                        borderRadius: "0.5rem",
                        padding: "0.5rem",
                        boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    회원가입 하러가기
                </Button>
            </div>
            <Button disableElevation sx={{ padding: "10px" }}>
                아이디 / 비밀번호를 잊으셨나요?            </Button>
            {isLoginDialogOpen && <LoginDialog isLoggedIn={isLoggedIn} />}

        </>
    )
} 