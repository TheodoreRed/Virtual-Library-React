import { Link } from "react-router-dom";
import UserLibrary from "./UserLibrary";
import "./UserProfile.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="UserProfile">
      <UserLibrary />
      <div className="addBookBtnContainer">
        <Link to={`/${user?.displayName}/library/add`}>
          <button>Add Book</button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
