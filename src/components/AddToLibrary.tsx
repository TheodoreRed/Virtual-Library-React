import { FormEvent, useState } from "react";
import "./AddToLibrary.css";
import GoogleBook from "../models/GoogleBook";
import { getBooksBySearch } from "../services/googleBookApi";

const AddToLibrary = () => {
  const [searchedBooks, setSearchedBooks] = useState<GoogleBook[]>([]);
  const [query, setQuery] = useState<string>("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    getBooksBySearch(query).then((res) => setSearchedBooks(res));
  };
  console.log(searchedBooks);

  return (
    <div className="AddToLibrary">
      <h2>Search Books</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="query">Search</label>
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Go</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Publisher</th>
            <th>Thumbnail</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {searchedBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.volumeInfo.title}</td>
              <td>{book.volumeInfo.authors.join(", ")}</td>
              <td>{book.volumeInfo.publisher}</td>

              <td>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={`Cover of ${book.volumeInfo.title}`}
                />
              </td>
              <td>
                <button>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddToLibrary;
