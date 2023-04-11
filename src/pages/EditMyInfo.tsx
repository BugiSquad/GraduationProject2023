import React, { useState } from "react";
import { SimpleTemplate } from "./PageTemplate";
import defaultImage from "../images/person-circle.png";

type UserInfo = {
  name: string;
  email: string;
  profilePic: string | null; // 프로필 사진이 없을 수도 있으므로 null 가능성 추가
};

type Props = {
  userInfo: UserInfo;
  onSave: (userInfo: UserInfo) => void;
};

export const EditMyInfo: React.FC<Props> = ({ userInfo, onSave }) => {
  const [profilePic, setProfilePic] = useState<string | null>(
    userInfo.profilePic
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
  

  const handleSaveClick = () => {
    onSave({
      ...userInfo,
      profilePic,
    });
  };

  return (
    <SimpleTemplate param={{ pageHeaderName: "내 정보 수정" }}>
      <div>
        <div style={{paddingTop:"20px"}}>
          <img
            src={profilePic || defaultImage}
            alt="프로필 사진"
            style={{ width: 120, height: 120, borderRadius: "50%" }}
          />
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: "15px"}}>
          <input type="file" onChange={handleProfilePicChange} />
          <button onClick={handleSaveClick}>저장하기</button>
        </div>
      </div>
    </SimpleTemplate>
  );
};
