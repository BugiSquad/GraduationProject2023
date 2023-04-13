import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material"
import React from "react";

export const SignupContents: React.FC = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (<>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "50px" }}>
            {/*이름*/}
            <div style={{ display: "flex", alignContent: "flex-start", flexDirection: "column" }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: "40px", paddingRight: "80px" }}>이름＊</Typography>
                <TextField sx={{ minWidth: "40px", paddingRight: "20px" }} variant="standard" color="warning" />

            </div>
            {/*아이디*/}
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: "40px", paddingRight: "120px" }}>아이디＊</Typography>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <TextField sx={{ minWidth: "40px", paddingRight: "20px" }} variant="standard" color="warning" />
                    <Button disableElevation disableRipple >
                        <Typography sx={{
                            minWidth: "70px", height: "30px", backgroundColor: '#FE724C', color: "white", fontWeight: "bold", fontSize: "12px", borderRadius: "1rem", padding: "0.5rem", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
                        }}>중복확인</Typography>
                    </Button>
                </div>
            </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "5px" }}>
            {/*이름*/}
            <div style={{ display: "flex", alignContent: "flex-start", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px" }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: "40px" }}>닉네임</Typography>
                    <div></div>
                </div>
                <TextField sx={{ minWidth: "265px" }} variant="standard" color="warning" />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px", marginTop: "10px" }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: "40px" }}>새 비밀번호＊</Typography>
                    <div></div>
                </div>
                <FormControl variant="standard">
                    <Input sx={{ minWidth: "265px" }}
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        color="warning"
                        endAdornment={
                            <InputAdornment position="end">
                                <Button disableElevation disableRipple
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </Button>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px", marginTop: "10px" }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: "40px" }}>새 비밀번호 확인＊</Typography>
                    <div></div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px", marginTop: "10px" }}>
                    <FormControl variant="standard">
                        <Input sx={{ minWidth: "265px" }}
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            color="warning"
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button disableElevation disableRipple
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </Button>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button disableElevation disableRipple >
                        <Typography sx={{
                            minWidth: "70px", height: "30px", backgroundColor: '#FE724C', color: "white", fontWeight: "bold", fontSize: "12px", borderRadius: "1rem", padding: "0.5rem", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
                        }}>확인</Typography>
                    </Button>
                </div>
            </div>
        </div >
    </>
    )
}
