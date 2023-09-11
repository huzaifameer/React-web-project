import "./styles.css";
import NavBar from "./Components/nav-bar";
import Home from "./routes/Home";

export default function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home />
    </div>
  );
}
