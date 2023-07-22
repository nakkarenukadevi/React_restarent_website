import logo from "../componats/images/logo.jpg";
import user from "../componats/images/user-logo.jpg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img src={logo} className="logo-img" />
        </div>

        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="cart">cart</div>

        <div>
          <input
            type="text"
            className="serach-bar"
            placeholder="search any thing"
          />
        </div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <div>
          <img src={user} className="user-img" />
        </div>
      </div>
    </>
  );
};
export default Header;
