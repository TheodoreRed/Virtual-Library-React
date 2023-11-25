import GoogleBook from "../models/GoogleBook";
import "./BookItem.css";

interface Props {
  book: GoogleBook;
}

// Define what a book will display as
// This is where BookDetails, Add, and Remove button will be
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
