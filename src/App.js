import "./styles.css";
import NavBar from "./Components/nav-bar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>}/>
      </Routes>
      <NavBar></NavBar>
      
    </div>
  );
}
