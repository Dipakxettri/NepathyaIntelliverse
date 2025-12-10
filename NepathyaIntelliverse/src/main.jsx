import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App2 from "./App2.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Teams from "./components/Teams.jsx";
import About from "./components/About.jsx";
import SignUp from "./components/SignUp.jsx";
import ChatBot from "./components/ChatBox.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              {/* <App2 /> */}
              <ChatBot />
              <Home />
              <About />
              <Teams />
            </>
          }
        />

        {/* Signup Page */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
