import { useEffect, useState } from "react";
import "./App.css";
import { getBooksBySearch } from "./services/googleBookApi";
import GoogleBook from "./models/GoogleBook";
import BookItem from "./components/BookItem";

function App() {
  const [books, setBooks] = useState<GoogleBook[]>([]);

  useEffect(() => {
    getBooksBySearch("Blueberry").then((res) => setBooks(res));
  });
  // Conditionally render the UserProfile component or the LoginSignup
  // Depending on if they are logged in
  return (
    <div className="App">
      {books.map((book) => {
        return <BookItem book={book} />;
      })}
    </div>
  );
}

export default App;
