import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/reducer/userSlice";
import "./navBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const userConnexion = useSelector((state) => state.user.userConnexion);

  const handleLogout = () => {
    dispatch(logout());
  };
  const { userName } = useSelector((state) => state.user);
  return (
    <nav className="main-nav">
      <Link to="/Home" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {userConnexion ? (
        <div>
          <Link to="/User" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
          <Link to="/" onClick={handleLogout} className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/SignIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
