import { ReactNode, useState } from "react";
import UserContext from "./UserContext";
import User from "../models/User";
import GoogleBook from "../models/GoogleBook";

interface Props {
  children: ReactNode;
}

const robinsonCrusoe: GoogleBook = {
  kind: "books#volume",
  id: "lIllEAAAQBAJ",
  etag: "h2l0vJd46M8",
  selfLink: "https://www.googleapis.com/books/v1/volumes/lIllEAAAQBAJ",
  volumeInfo: {
    title: "Robinson Crusoe",
    authors: ["Daniel Defoe"],
    publisher: "이새의나무",
    description:
      "Robinson Crusoe was presented as a true autobiography of a castaway marooned for 28 years on an uninhabited island. The book’s plot is believed to be based on the story of the real-life castaway Alexander Selkirk. And is first published on 25 April 1719. It was been considered one of the first English novels.",
    industryIdentifiers: [
      {
        type: "ISBN_13",
        identifier: "9791191943375",
      },
    ],
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=lIllEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=lIllEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    categories: ["Fiction"],
  },
  saleInfo: {
    country: "US",
    saleability: "FOR_SALE",
    isEbook: true,
  },
  accessInfo: {
    country: "US",
    viewability: "PARTIAL",
    epub: {
      isAvailable: true,
    },
    pdf: {
      isAvailable: true,
    },
    webReaderLink:
      "http://play.google.com/books/reader?id=lIllEAAAQBAJ&hl=&source=gbs_api",
  },
};

const defaultUser: User = {
  uid: "123",
  displayName: "User123",
  photoURL: "default-photo-url.jpg",
  registeredAt: new Date(),
  darkTheme: false,
  library: [
    robinsonCrusoe,
    robinsonCrusoe,
    robinsonCrusoe,
    robinsonCrusoe,
    robinsonCrusoe,
    robinsonCrusoe,
  ],
};

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(defaultUser);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
