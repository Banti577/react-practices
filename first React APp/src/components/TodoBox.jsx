import { useState } from "react";
import Style from "./TodoBox.module.css";

const TodoBox = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setisLogin] = useState(true);
  const [usersData, setUsersData] = useState([
    {
      name: "Banti Patel",
      email: "patelvn2002@gmail.com",
      password: "1234",
    },
    { name: "vimal tyagi", email: "banti@gmail.com", password: "1234" },
  ]);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const switchModeHandler = () => {
    isLogin === true ? setisLogin(false) : setisLogin(true);
  };

  //Handle USer Input onchange

  const handleUserInput = (event) => {
    console.log("event is", event.target);
    const { name, value } = event.target;
    setUserInput((previous) => ({ ...previous, [name]: value.trim() }));
  };
  //Varify User

  const handleVarifyUser = (event) => {
    event.preventDefault();
    if (userInput.email == "" || userInput.password == "") {
      alert("Both Filds are Required!");
      return;
    }
    if (isLogin) {
      const userExist = usersData.find(
        (item) => item.email === userInput.email
      );
      if (!userExist) {
        alert(`User not Exist`);
        return;
      }
      const checkPass = usersData.find(
        (item) => item.password === userInput.password
      );
      if (!checkPass) {
        alert(`${userInput.password} is wrong Password`);
        return;
      }
      setUserInput({ email: "", password: "" });
      event.target.reset();

      alert(`Congratulation ${checkPass.name} Login SuccessFully `);
    } else {
      if (userInput.name == "") {
        alert("name Filds are Required!");
        return;
      }

      const userExist = usersData.find(
        (item) => item.email === userInput.email
      );
      if (userExist) {
        alert(`email Exist Already`);
        return;
      }
      const newUser = {
        name: userInput.name,
        email: userInput.email,
        password: userInput.password,
      };
      setUsersData((previos) => [...previos, newUser]);

      setUserInput((currunt) => {
        currunt.email = "";
        currunt.name = "";
        currunt.password = "";
      });
      alert(`success`);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="FormBox  bg-amber-400 h-screen p-6">
      <div className=" rounded-[10px] min-w-1/3 w-[35%] border-1 p-7 m-auto shadow-lg shadow-blue-400  bg-white">
        <h1 className="text-center text-2xl font-bold">
          {" "}
          {!isLogin ? "SinUp" : "Login"}
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
                  onChange={handleUserInput}
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
                onChange={handleUserInput}
              />
            </label>
            <label className="flex flex-col">
              Password:
              <input
                className={Style.tdata}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password..."
                onChange={handleUserInput}
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
              {isLogin ? "Login" : "SinUp"}
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
