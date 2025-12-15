import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Post from "./components/Post";
import Home from "./components/Home";
function App() {
  const [users, setUserData] = useState([]);

  return (
    <>
      <BrowserRouter>
        {
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Post" element={<Post setUserData ={setUserData} users={users}/>} />
          </Routes>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
