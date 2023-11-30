import axios from "axios";
import GoogleBook from "../models/GoogleBook";

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

export const getBooksBySearch = (search: string): Promise<GoogleBook[]> => {
  return axios
    .get(`${baseUrl}volumes?q=${encodeURIComponent(search)}`)
    .then((res) => res.data.items);
};

export const getBookById = (bookId: string): Promise<GoogleBook> => {
  return axios
    .get(`${baseUrl}volumes/${encodeURIComponent(bookId)}`)
    .then((res) => res.data);
};
