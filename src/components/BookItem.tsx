import { Link } from "react-router-dom";
import GoogleBook from "../models/GoogleBook";
import "./BookItem.css";

interface Props {
  book: GoogleBook | null;
}
// I need to add a favorite button
// add dropdown with read, unread, wishlist
const BookItem = ({ book }: Props) => {
  return (
    <li className="BookItem">
      <div className="BookCover">
        <Link to={`/book/${book?.id}`}>
          <img
            src={book?.volumeInfo.imageLinks?.thumbnail}
            alt={book?.volumeInfo.title}
          />
        </Link>
      </div>
      <div className="BookDetailsContainer">
        <h3>{book?.volumeInfo.title}</h3>
        <p>{book?.volumeInfo.authors.join(", ")}</p>
      </div>
    </li>
  );
};

export default BookItem;
