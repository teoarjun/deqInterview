import axios from "axios";
import { BooksResult } from "./BooksModel";

export const getBooks = async (
  keyword: string,
  maxResults: string | undefined,
  startIndex: string | undefined
): Promise<BooksResult> => {
  let apiURL = process.env.API_URL + "" + process.env.GOOGLE_API_KEY + `&q=${keyword}`;
  if (startIndex) {
    apiURL += `&startIndex=${startIndex}`;
  }
  if (maxResults) {
    apiURL += `&maxResults=${maxResults}`;
  }
  const response = await axios.get<BooksResult>(apiURL);
  return response.data;
};