import { useContext } from "react";
import "./UserProfile.css";
import UserContext from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="UserProfile">
      <h2>Library</h2>
      <div className="addBookBtnContainer">
        <button>Add Book</button>
      </div>
    </div>
  );
};

export default UserProfile;
