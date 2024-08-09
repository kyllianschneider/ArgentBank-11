import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/reducer/userSlice";
import "./navBar.css";
import RightFromBracketIcon from "../../../public/assets/RightFromBracketIcon";
import CircleUserIcon from "../../../public/assets/CircleUserIcon";
const NavBar = () => {
  const dispatch = useDispatch();
  const { userConnexion, firstName } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link to="/Home" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {userConnexion ? (
        <div className="nav-signout">
          <Link to="/User" className="main-nav-item">
            <CircleUserIcon />
            <div>{firstName}</div>
          </Link>
          <Link to="/" onClick={handleLogout} className="main-nav-item">
            <RightFromBracketIcon />
            <div>Sign Out</div>
          </Link>
        </div>
      ) : (
        <div className="nav-icon">
          <Link to="/SignIn" className="main-nav-item">
            <CircleUserIcon />
            <div>Sign In</div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;