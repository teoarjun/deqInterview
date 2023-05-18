import axios from "axios";
import { getBooks } from "./getBooks";


jest.mock("axios");

describe("getBooks", () => {
  const mockBooksResult = {
    totalItems: 2,
    items: [
      {
        volumeInfo: {
          authors: ['Author 1'],
          title: 'Book 1',
          publishedDate: '2023-01-01',
          description: 'Sample description',
        },
      },
      {
        volumeInfo: {
          authors: ['Author 2'],
          title: 'Book 2',
          publishedDate: '2021-01-01',
          description: '2nd Sample description',
        },
      },
    ],
  };

  it("fetches books successfully", async () => {
    const keyword = "test";
    const maxResults = "10";
    const startIndex = "0";

    jest.spyOn(axios, "get").mockResolvedValue({ data: mockBooksResult });

    const result = await getBooks(keyword, maxResults, startIndex);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(keyword));
    expect(result).toEqual(mockBooksResult);
  });
});

describe("getBooks error handling", () => {
    it("handles API error", async () => {
        const keyword = "test";
        const maxResults = "10";
        const startIndex = "0";
    
        const mockError = new Error("API error");
        jest.spyOn(axios, "get").mockRejectedValue(mockError);
    
        await expect(getBooks(keyword, maxResults, startIndex)).rejects.toThrowError(mockError);
        expect(axios.get).toHaveBeenCalledTimes(2);
        expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(keyword));
      });
  });