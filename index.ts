import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
import { getBooks } from "./api/getBooks"
dotenv.config();

const app: Express = express();
const PORT = 3003;

app.use(express.json());

app.get('/', (req: Request, res: Response)=>{
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.get('/search', async(req: Request, res: Response)=>{
  const keyword = req.query.keyword
  if(keyword) {
    const books = await getBooks(keyword.toString())
    console.log("books", books.data)
    res.status(200);
    res.send(books.data)
  } else {
    res.status(404);
    res.send("No data found");
  }
});

app.listen(PORT, (error) => {
  if (!error)
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
  else
    console.log("Error occurred, server can't start", error);
}
);