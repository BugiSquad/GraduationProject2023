export type UserInfo = {
    name: string;
    email: string;
    profilePic: string | null; 
  };
  
  export type InfoProps = {
    userInfo: UserInfo;
    onSave: (userInfo: UserInfo) => void;
  };