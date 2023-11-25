import GoogleBook from "../models/GoogleBook";
import "./BookItem.css";

interface Props {
  book: GoogleBook;
}

const BookItem = ({ book }: Props) => {
  return (
    <div className="BookItem">
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors}</p>
      <p>{book.volumeInfo.description}</p>
    </div>
  );
};

export default BookItem;
