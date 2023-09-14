import "./styles.css";
import NavBar from "./Components/nav-bar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}
