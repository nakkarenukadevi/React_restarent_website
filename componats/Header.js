import logo from "../componats/images/logo.jpg";
import user from "../componats/images/user-logo.jpg";
import "./App.css";
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
            placeholder="cilck any thing"
          />
        </div>
        <div>
          <img src={user} className="user-img" />
        </div>
      </div>
    </>
  );
};
export default Header;
