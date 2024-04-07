import "./App.css";
import Header from "./components/Header";
//import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Analysis from "./pages/Analysis";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Analysis />} />
      </Routes>
    </>
  );
}

export default App;
