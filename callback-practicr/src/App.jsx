import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import First from "./components/first";
import Second from "./components/second";

export default function App() {
  return (
    <>
  
      <BrowserRouter>
       <nav>
        <Link to="/">First</Link> |{" "}
        <Link to="/second">second</Link> |{" "}

      </nav>


      <Link to="/second">Second</Link>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
