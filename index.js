"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const getBooks_1 = require("./api/getBooks");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3003;
app.use(express_1.default.json());
var cors = require('cors');
// use it before all route definitions
// app.use(cors());
app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to root URL of Server");
});
app.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const keyword = req.query.keyword;
    if (keyword) {
        const books = yield (0, getBooks_1.getBooks)(keyword.toString());
        console.log("books", books.data);
        res.status(200);
        res.send(books.data);
    }
    else {
        res.status(404);
        res.send("No data found");
    }
}));
app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
});
