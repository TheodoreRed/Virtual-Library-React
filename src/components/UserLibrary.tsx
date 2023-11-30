import { useContext } from "react";
import "./UserLibrary.css";
import UserContext from "../context/UserContext";
import BookItem from "./BookItem";

// TODO: Add dropdown/popup for filtering
// favorite, read, unread, wishlist
const UserLibrary = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2>Library</h2>
      <ul className="UserLibrary">
        {user?.library.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
      </ul>
    </>
  );
};

export default UserLibrary;
