import React, { useEffect, useState } from "react";
import { SimpleTemplate } from "./PageTemplate";
import { BottomNavigationTab } from "../types/PageHeaderParam";
import { Avatar, Button, Card, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { getMemberInfo } from "../api/Member";
import { OrangeButton } from "../components/styled/Buttons";
import { useNavigate } from "react-router-dom";

export const ViewMyInfo: React.FC = () => {
    return (
        <div className="App container">
            <SimpleTemplate param={{ pageHeaderName: "내 정보 보기", tab: BottomNavigationTab.MYPAGE }}>
                <ViewMyInfoContent />
            </SimpleTemplate>
        </div>
    );
};

const ViewMyInfoContent: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [studentId, setStudentId] = useState<number>();
    const [email, setEmail] = useState<string>('');
    const [profileUrl, setProfileUrl] = useState<string>('');
    const [grade, setGrade] = useState<number>();
    const [gender, setGender] = useState<string>('');
    const [department, setDepartment] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const memberInfo = await getMemberInfo();
                setName(memberInfo.data.name);
                setPhone(memberInfo.data.phone);
                setStudentId(memberInfo.data.studentId);
                setEmail(memberInfo.data.email);
                setProfileUrl(memberInfo.data.profileUrl);
                setGrade(memberInfo.data.grade);
                setGender(memberInfo.data.gender);
                setDepartment(memberInfo.data.department);
            } catch (error) {
                console.warn(error);
            }
        };

        fetchData();
    }, []);

    const getGenderText = (gender: string) => {
        if (gender === "MALE") {
            return "남자";
        } else if (gender === "FEMALE") {
            return "여자";
        } else {
            return "";
        }
    };

    return (
        <>
            <Card sx={{ minHeight: "600px", flexDirection: "column", marginBottom: "1rem", backgroundColor: "white", color: "black", padding: "24px", borderRadius: "1rem", boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
                    <Avatar src={profileUrl} sx={{ width: 110, height: 110, marginRight: "16px" }} />
                    <div>
                        <Typography variant="h4" component="div" sx={{ fontWeight: "bold", marginBottom: "8px" }}>{name}</Typography>
                        <Typography variant="subtitle1" sx={{ paddingLeft: "25px" }}>{email}</Typography>
                    </div>
                </div>
                <TableContainer component={Paper} elevation={0}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>학년:</TableCell>
                                <TableCell>{grade}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>성별:</TableCell>
                                <TableCell>{getGenderText(gender)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>학번:</TableCell>
                                <TableCell>{studentId}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>학과:</TableCell>
                                <TableCell>{department}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>전화번호:</TableCell>
                                <TableCell>{phone}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            <Button onClick={() => { navigate('/mypage/editmyinfo'); }} sx={{ ...OrangeButton, boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.5, 0.5)", borderRadius: "1rem" }}>수정하기</Button>
        </>
    );
};
