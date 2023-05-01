export type UserInfo = {
    name: string;
    email: string;
    profilePic: string | null; // 프로필 사진이 없을 수도 있으므로 null 가능성 추가
  };
  
  export type InfoProps = {
    userInfo: UserInfo;
    onSave: (userInfo: UserInfo) => void;
  };