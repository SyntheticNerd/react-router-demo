import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <h1>Home</h1>
      <nav>
        <ul style={{listStyle: "none", display: "flex", gap: "10px"}}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
