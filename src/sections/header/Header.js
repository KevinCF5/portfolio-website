import headerImage from "../../assets/header.jpg";
import data from "./data";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <div className="header-profile">
          <img src={headerImage} alt="Header Image" />
        </div>
        <h3>Kévin Mateus</h3>
        <p>
          A passionate <span>Full Stack Developer</span> from Porto, Portugal
        </p>
        <div className="header-cta">
          <a href="#contact" className="btn primary">
            Contact me
          </a>
          <a href="#portfolio" className="btn light">
            My Projects
          </a>
        </div>
        <div className="header-socials">
          {data.map((item) => (
            <a key={item.id} href={item.link} target="_blank">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
