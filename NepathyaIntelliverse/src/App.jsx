import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";     // your main screen
import SignUp from "./components/SignUp";     // signup/login page

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SignUp />} />  {/* Signup/Login Page */}
      </Routes>
    </BrowserRouter>
  );
}
