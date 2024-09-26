import "./Header.css";
import eliphoto from "../../assets/images/eliphoto.png";

const Header = () => {
  return (
    <div className="header__container">
      <div className="image__container">
        <img src={eliphoto} className="eliphoto" alt="About"></img>
      </div>

      <div className="header__text">
        <header className="header">
          <h1 className="header__heading">
          <p>{` Hi👋 I'm Elisabeth `}</p>
           <br />a <span> Frontend Developer</span> <br />{" "}
            based in <span>Germany</span> .
          </h1>
        </header>
      </div>
    </div>
  );
};

export default Header;
