import User from "../models/User";
import "./UserProfile.css";

interface Props {
  user: User;
}

// The UserLibrary will be here
const UserProfile = ({ user }: Props) => {
  return (
    <div className="UserProfile">
      <h2>Welcome, {user.displayName ? user.displayName : "user"}!</h2>
      <p>Library</p>
    </div>
  );
};

export default UserProfile;
