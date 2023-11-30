import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import { useContext } from "react";
import UserContext from "./context/UserContext";
import BookDetails from "./components/BookDetails";
import AddToLibrary from "./components/AddToLibrary";

function App() {
  const { user } = useContext(UserContext);

  if (user?.darkTheme) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:displayName/library" element={<UserProfile />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/:displayName/library/add" element={<AddToLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
