import React, { useState, useRef } from "react";
import Style from "./TodoBox.module.css";

const TodoBox = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [usersData, setUsersData] = useState([
    { name: "Banti Patel", email: "patelvn2002@gmail.com", password: "1234" },
    { name: "vimal tyagi", email: "banti@gmail.com", password: "1234" },
  ]);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const switchModeHandler = () => {
    setIsLogin((prevMode) => !prevMode);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleVarifyUser = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredName = nameInputRef.current ? nameInputRef.current.value : "";

    if (enteredEmail === "" || enteredPassword === "") {
      alert("Both Email and Password Fields are Required!");
      return;
    }

    if (isLogin) {
      const userExist = usersData.find((item) => item.email === enteredEmail);

      if (!userExist) {
        alert("User not Exist");
        return;
      }

      if (userExist.password !== enteredPassword) {
        alert(`${enteredPassword} is wrong Password`);
        return;
      }

      alert(`Congratulation ${userExist.name} Login SuccessFully`);
    } else {
      if (enteredName === "") {
        alert("Name Field is Required!");
        return;
      }

      const userExist = usersData.find((item) => item.email === enteredEmail);

      if (userExist) {
        alert("Email Exist Already");
        return;
      }

      const newUser = {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      };

      setUsersData((previos) => [...previos, newUser]);
      alert("Sign Up success! You can now log in.");
    }

    event.target.reset();
  };

  return (
    <div className="FormBox bg-amber-400 h-screen p-6">
      <div className="rounded-[10px] min-w-1/3 w-[35%] border-1 p-7 m-auto shadow-lg shadow-blue-400 bg-white">
        <h1 className="text-center text-2xl font-bold">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <form method="post" onSubmit={handleVarifyUser}>
          <div className="flex flex-col">
            {!isLogin && (
              <label className="flex flex-col">
                Name:
                <input
                  className={Style.tdata}
                  type="text"
                  placeholder="Enter Name..."
                  name="name"
                  ref={nameInputRef}
                />
              </label>
            )}
            <label className="flex flex-col">
              Email:
              <input
                className={Style.tdata}
                type="email"
                name="email"
                placeholder="Enter Email..."
                ref={emailInputRef}
              />
            </label>
            <label className="flex flex-col">
              Password:
              <input
                className={Style.tdata}
                placeholder="Enter password..."
                type={showPassword ? "text" : "password"}
                name="password"
                ref={passwordInputRef}
              />
            </label>
            <label className="flex align-center">
              Show Password
              <input
                className="mx-1"
                type="checkbox"
                name="showPassword"
                checked={showPassword}
                onChange={handleTogglePasswordVisibility}
              />
            </label>
            <button
              className="bg-[oklch(0.37_0.13_265.57)] text-white mt-5 p-2 cursor-pointer"
              type="submit"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <button className="cursor-pointer" type="button" onClick={switchModeHandler}>
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoBox;
