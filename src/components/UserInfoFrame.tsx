import { useState } from "react";
import { InfoProps } from "../types/UserInfo";
import defaultImage from "../images/default.png";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Autocomplete, Link, Button, FormControl, Input, InputAdornment, InputLabel, NativeSelect, TextField, Typography } from "@mui/material"
import React from "react";
import { Link as Linkto } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';


interface UserInfoFrameProps {
    name: string;
    email: string;
    userprofilePic: string | null; // 프로필 사진이 없을 수도 있으므로 null 가능성 추가
    isEdit: Boolean;
};

const Departments = [
    { label: '한국어문학부' },
    { label: '역사문화학부' },
    { label: '영어영문학부' },
    { label: '지식정보학부' },
    { label: '컴퓨터공학과' },
    { label: 'IT응용시스템공학과' },
    { label: '산업경영공학과' },
    { label: '기계시스템공학과' },
    { label: '전자정보공학과' },
]

export const UserInfoFrame: React.FC<UserInfoFrameProps> = ({ userprofilePic, isEdit }) => {

    const [profilePic, setProfilePic] = useState<string | null>(
        userprofilePic
    );


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
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };



    // const handleSaveClick = () => { //저장 버튼 이벤트
    //     onSave({
    //         ...userInfo,
    //         profilePic,
    //     });
    // };

    return (
        <>
            <div style={{ paddingTop: "20px" }}>
                <img
                    src={profilePic || defaultImage}
                    alt="프로필 사진"
                    style={{ width: 120, height: 120, borderRadius: "40%" }}
                />
            </div>


            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingTop: "10px" }}>
                <Link
                    component="label"
                    sx={{ color: "grey", fontSize: "13px" }}
                >
                    {isEdit ? "사진 수정하기 " : "사진 추가하기 "}
                    <input
                        type="file"
                        onChange={handleProfilePicChange}
                        hidden
                    />
                </Link>
                <Link sx={{ color: "grey", fontSize: "13px" }}
                >
                / 삭제하기
                </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "row", paddingTop: "50px", alignItems: "center" }}>
                {/*이름*/}
                <div style={{ display: "flex", alignContent: "flex-start", flexDirection: "column", alignItems: "center" }}>
                    <Typography fontSize={'15px'} sx={{ fontWeight: 'bold', minWidth: "40px", paddingRight: "80px" }}>이름＊</Typography>
                    <TextField size="small" required sx={{ minWidth: "40px", paddingRight: "20px" }} variant="standard" color="warning" />

                </div>
                {/*아이디*/}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography fontSize={'15px'} sx={{ fontWeight: 'bold', minWidth: "40px", paddingRight: "120px" }}>아이디＊</Typography>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <TextField size="small" required sx={{ minWidth: "40px", paddingRight: "20px" }} variant="standard" color="warning" />
                        {isEdit ? false :
                            <Button disableElevation disableRipple >
                                <Typography sx={{
                                    minWidth: "70px", height: "30px", backgroundColor: '#FE724C', color: "white", fontWeight: "bold", fontSize: "12px", borderRadius: "1rem", padding: "0.5rem", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
                                }}>중복확인</Typography>
                            </Button>
                        }
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", paddingTop: "5px" }}>
                <div style={{ display: "flex", alignContent: "flex-start", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px" }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: "40px" }}>닉네임</Typography>
                        <div></div>
                    </div>
                    <TextField required sx={{ minWidth: "265px", paddingRight: "20px" }} variant="standard" color="warning" />
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px", marginTop: "10px" }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: "40px" }}>새 비밀번호＊</Typography>
                        <div></div>
                    </div>
                    <FormControl variant="standard" sx={{ paddingRight: "20px", minWidth: "265px", }}>
                        <Input required sx={{ minWidth: "265px", }}
                            type={showPassword ? 'text' : 'password'}
                            color="warning"
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button disableElevation disableRipple sx={{ color: "grey" }}
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
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <FormControl variant="standard">
                            <Input required sx={{ minWidth: "265px" }}
                                type={showPassword ? 'text' : 'password'}
                                color="warning"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button disableElevation disableRipple sx={{ color: "grey" }}
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
                        <Button disableElevation disableRipple sx={{ paddingRight: "20px" }}>
                            <Typography sx={{
                                minWidth: "70px", height: "30px", backgroundColor: '#FE724C', color: "white", fontWeight: "bold", fontSize: "12px", borderRadius: "1rem", padding: "0.5rem", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
                            }}>확인</Typography>
                        </Button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px", marginTop: "5px" }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: "40px" }}>학과＊</Typography>
                        <Autocomplete
                            sx={{ minWidth: "280px", paddingRight: "20px" }}
                            disablePortal
                            options={Departments}
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField required {...params} variant="standard" color="warning" />
                            )}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px", marginTop: "10px" }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: "80px", marginTop: "5px" }}>생년월일＊</Typography>
                        <div style={{ paddingRight: "20px" }}>
                            <FormControl>
                                <InputLabel variant="standard" htmlFor="year">
                                    년도
                                </InputLabel>
                                <NativeSelect
                                    color="warning"
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'year',
                                    }}
                                >
                                    <option value={1990}>1990</option>
                                    <option value={1991}>1991</option>
                                    <option value={1992}>1992</option>
                                    <option value={1993}>1993</option>
                                    <option value={1994}>1994</option>
                                    <option value={1995}>1995</option>
                                    <option value={1996}>1996</option>
                                    <option value={1997}>1997</option>
                                    <option value={1998}>1998</option>
                                    <option value={1999}>1999</option>
                                    <option value={2000}>2000</option>
                                    <option value={2001}>2001</option>
                                    <option value={2002}>2002</option>
                                    <option value={2003}>2003</option>
                                    <option value={2004}>2004</option>
                                    <option value={2005}>2005</option>
                                    <option value={2006}>2006</option>
                                    <option value={2007}>2007</option>
                                    <option value={2008}>2008</option>
                                    <option value={2009}>2009</option>
                                    <option value={2010}>2010</option>
                                </NativeSelect>
                            </FormControl>
                            <FormControl>

                                <InputLabel variant="standard" htmlFor="month">
                                    월
                                </InputLabel>

                                <NativeSelect
                                    color="warning"
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'month',
                                    }}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                </NativeSelect>
                            </FormControl>
                            <FormControl>

                                <InputLabel variant="standard" htmlFor="date">
                                    일
                                </InputLabel>

                                <NativeSelect
                                    color="warning"
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'date',
                                    }}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                    <option value={13}>13</option>
                                    <option value={14}>14</option>
                                    <option value={15}>15</option>
                                    <option value={16}>16</option>
                                    <option value={17}>17</option>
                                    <option value={18}>18</option>
                                    <option value={19}>19</option>
                                    <option value={20}>20</option>
                                    <option value={21}>21</option>
                                    <option value={22}>22</option>
                                    <option value={23}>23</option>
                                    <option value={24}>24</option>
                                    <option value={25}>25</option>
                                    <option value={26}>26</option>
                                    <option value={27}>27</option>
                                    <option value={28}>28</option>
                                    <option value={29}>29</option>
                                    <option value={30}>30</option>
                                    <option value={31}>31</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px", marginTop: "10px" }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: "40px" }}>전화번호＊</Typography>
                        <TextField required sx={{ minWidth: "265px", paddingRight: "20px" }} variant="standard" color="warning" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px", marginTop: "10px" }}>

                        <Button disableElevation disableRipple sx={{ paddingLeft: "80px" }}>
                            <Typography sx={{
                                minWidth: "70px", height: "40px", backgroundColor: '#FE724C', color: "white", fontWeight: "bold", fontSize: "14px", borderRadius: "1rem", padding: "0.5rem", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
                            }}>{isEdit ? "수정하기" : "회원가입하기"}</Typography>
                        </Button>
                        <Linkto to="/login"><Button disableElevation disableRipple sx={{ paddingRight: "80px" }} >
                            <Typography sx={{
                                minWidth: "70px", height: "40px", backgroundColor: 'white', color: "#FE724C", fontWeight: "bold", fontSize: "14px", borderRadius: "1rem", padding: "0.5rem", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
                            }}>취소</Typography>
                        </Button></Linkto>
                    </div>
                </div>
            </div >
        </>
    )
}