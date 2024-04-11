import Logo from "../../assets/logo2.jpg";
import "./navbar.css";
import { IoMdColorFill } from "react-icons/io";
import data from "./data";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className="nav-logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav-menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme-icon">
          <IoMdColorFill />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
