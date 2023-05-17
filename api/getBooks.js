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
exports.getBooks = void 0;
const axios_1 = __importDefault(require("axios"));
const getBooks = (keyword, maxResults, startIndex) => __awaiter(void 0, void 0, void 0, function* () {
    let apiURL = process.env.API_URL + "" + process.env.GOOGLE_API_KEY + `&q=${keyword}`;
    if (startIndex) {
        apiURL += `&startIndex=${startIndex}`;
    }
    if (maxResults) {
        apiURL += `&maxResults=${maxResults}`;
    }
    const data = yield axios_1.default.get(apiURL);
    return data;
});
exports.getBooks = getBooks;
