import { useContext } from "react";
import "./Header.css";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="Header">
      <Link to="/">
        <h1>Virtual Library App</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={`/${user?.uid}`}>Welcome, {user?.displayName}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
