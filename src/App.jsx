import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
