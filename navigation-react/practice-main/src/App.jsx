import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import CounterClean from "./CounterClean";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setUsers(data);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch cancelled");
        } else {
          console.log(error);
        }
      }
    }

    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="/About" element={<About users={users} />} />
          <Route path="/Profile/:id" element={<Profile users={users} />} />
          <Route path="/counter" element={<CounterClean />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
