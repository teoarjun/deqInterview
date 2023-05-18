import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
import cors from "cors"
import { getBooks } from "./api/getBooks"
dotenv.config();

export const app: Express = express();
const PORT = 3003;

app.use(express.json());

// use it before all route definitions
app.use(cors());

app.get('/', (req: Request, res: Response)=>{
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.get('/search', async(req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  const keyword = req.query.keyword
  const startIndex = req.query.startIndex?.toString()
  const maxResults = req.query.maxResults?.toString()
  if(keyword) {
    const books = await getBooks(keyword.toString(), maxResults, startIndex)
    res.status(200);
    res.send(books)
  } else {
    res.status(404);
    res.send("No data found");
  }
});

export const server = app.listen(PORT, () => {
  /* istanbul ignore next */
  console.log("Server is Successfully Running, and App is listening on port " + PORT);
})
.on('error', (error: Error) => {
  /* istanbul ignore next */
  console.log("Error occurred, server can't start", error);
});