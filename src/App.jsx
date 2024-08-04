import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
