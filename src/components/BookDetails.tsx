import { useContext, useEffect, useState } from "react";
import GoogleBook from "../models/GoogleBook";
import "./BookDetails.css";
import { getBookById } from "../services/googleBookApi";
import { Link, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";

const BookDetails = () => {
  const [book, setBook] = useState<GoogleBook | null>(null);

  const { user } = useContext(UserContext);

  const { bookId } = useParams();

  useEffect(() => {
    if (bookId) {
      getBookById(bookId).then((res) => setBook(res));
    }
  }, [bookId]);

  return (
    <div className="BookDetails">
      <div className="topSection">
        <div className="thumbnailContainer">
          <img
            src={book?.volumeInfo.imageLinks?.thumbnail}
            alt={book?.volumeInfo.title}
            className="thumbnail"
          />
        </div>
        <div className="bookInfo">
          <h2>{book?.volumeInfo.title}</h2>
          <h3>{book?.volumeInfo.authors.join(", ")}</h3>
          <p>
            <strong>Publisher:</strong> {book?.volumeInfo.publisher}
          </p>
        </div>
      </div>
      <p className="bookDescription">{book?.volumeInfo.description}</p>

      <div className="backBtnContainer">
        <Link to={`/${user?.displayName}/library`}>
          <button>Library</button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
