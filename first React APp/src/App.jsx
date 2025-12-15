import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoBox from "./components/TodoBox";
import UnControlledForm from './components/UnControlledForm.jsx'

import Home from "./Home";
UnControlledForm
function App() {
  return(
    <>
   
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/controlled-component" element={<TodoBox />} />
        <Route path="/uncontrolled-component" element={<UnControlledForm />} />
      </Routes>
    </BrowserRouter>
  </>
  )



}

export default App;
