import { useState } from "react";
import Style from "./moduleCss/From.module.css";

const Form = ({ setUserData }) => {
  const [userInputs, setUserInputs] = useState({
    name: "",
    email: "",
    number: "",
    Gender: "",
    range: "",
  });
  //HandleonChange input Value
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("value change range is", value);
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // Handle Submit For Save UserData

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInputs.name == "" &&
      userInputs.Gender == "" &&
      userInputs.email == ""
    ) {
      alert("all fileds are required");
      return;
    }
    setUserData((previous) => [
      ...previous,
      {
        id: previous.length + 1,
        name: userInputs.name,
        email: userInputs.email,
        number: userInputs.number,
        gender: userInputs.Gender,
        range: userInputs.range,
      },
    ]);

    setUserInputs({
      name: "",
      email: "",
      number: "",
      Gender: "",
      range: "",
    });
    e.target.reset();
  };

  return ( 
    <div className={`${Style.container} border-2 border-red-600`}>
      <h2>
        {userInputs.Gender} {userInputs.name}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className={Style.formBox}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name Here..."
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email..."
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="number"
            onChange={handleInputChange}
            placeholder="Enter mobile number"
          />
          <div className={Style.GenderSection}>
            <label>
              <input
                type="radio"
                name="Gender"
                value="Male"
                onChange={handleInputChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="Gender"
                value="FeMale"
                onChange={handleInputChange}
              />
              Female
            </label>
          </div>
          <input
            min="0"
            max="100"
            type="range"
            name="range"
            onChange={handleInputChange}
          />

         
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
