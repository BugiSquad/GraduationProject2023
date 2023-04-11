import React, { useState } from "react";
import { SimpleTemplate } from "./PageTemplate";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = () => {
    // TODO: Implement login logic here
    setIsLoggedIn(true);
  };

  const handleSignUp = () => {
    // TODO: Navigate to sign up page
  };

  if (isLoggedIn) {
    return <div>You are now logged in.</div>;
  }

  return (
    <div className="App container" >
      <SimpleTemplate param={{ pageHeaderName: "로그인" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "center", }}>
          <div>
            <label htmlFor="username">아이디 </label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="password">비밀번호 </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ marginLeft: "0.5rem" }}
            />
            <button type="button" onClick={handleShowPasswordToggle} style={{ marginLeft: "0.5rem" }}>
              {showPassword ? "숨기기" : "보기"}
            </button>
          </div>
          <button type="button" onClick={handleLogin} style={{ backgroundColor: "green", color: "white", fontWeight: "bold", borderRadius: "0.5rem", padding: "0.5rem", border: "none", cursor: "pointer" }}>
            로그인
          </button>
          <button type="button" onClick={handleSignUp} style={{ backgroundColor: "blue", color: "white", fontWeight: "bold", borderRadius: "0.5rem", padding: "0.5rem", border: "none", cursor: "pointer" }}>
            회원가입
          </button>
        </div>
      </SimpleTemplate>
    </div>
  );
};
