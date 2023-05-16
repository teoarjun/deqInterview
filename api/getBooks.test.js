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
const axios_1 = __importDefault(require("axios"));
const getBooks_1 = require("./getBooks");
jest.mock('axios');
axios_1.default.get = jest.fn();
const mockKeyword = "Victorian family trying to work their way up in society. With a pompous dad, an accident prone son and a story full of shenanigans, it's easy to see how it paved the way for sitcoms like 'Modern Family' and 'Schitts Creek'. Written by the brothers George and Weedon Grossmith, this is a raucous tale that gives a window to the great British serial comedy. George and Weedon Grossmith were the sons of a court reporter, who was also a part-time stage";
const apiURL = process.env.API_URL + "" + process.env.GOOGLE_API_KEY + `&q=${mockKeyword}`;
it('should return mock books data from axios get request', () => __awaiter(void 0, void 0, void 0, function* () {
    const mockMovie = {
        "totalItems": 1,
        "kind": "books#volumes",
        "items": [
            {
                "kind": "books#volume",
                "id": "6wFoEAAAQBAJ",
                "etag": "Iw9SOfqs7yo",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/6wFoEAAAQBAJ",
                "volumeInfo": {
                    "title": "The Diary of a Nobody",
                    "authors": [
                        "George Grossmith",
                        "Weedon Grossmith"
                    ],
                    "publisher": "Lindhardt og Ringhof",
                    "publishedDate": "2022-04-18",
                    "description": "'The Diary of a Nobody' is a satirical, slapstick comedy about a Victorian family trying to work their way up in society. With a pompous dad, an accident prone son and a story full of shenanigans, it's easy to see how it paved the way for sitcoms like 'Modern Family' and 'Schitts Creek'. Written by the brothers George and Weedon Grossmith, this is a raucous tale that gives a window to the great British serial comedy. George and Weedon Grossmith were the sons of a court reporter, who was also a part-time stage entertainer. Although George started out as a reporter, both him and Weedon went on to work as entertainers on stage. After they both had successful careers as actors, comics and Weedon even having art exhibited at the Royal Academy, the pair combined their skills to write 'The Diary of a Nobody'.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_13",
                            "identifier": "9788728258408"
                        },
                        {
                            "type": "ISBN_10",
                            "identifier": "8728258401"
                        }
                    ],
                    "readingModes": {
                        "text": true,
                        "image": false
                    },
                    "printType": "BOOK",
                    "categories": [
                        "Fiction"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "0.2.1.0.preview.2",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=6wFoEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=6wFoEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.co.uk/books?id=6wFoEAAAQBAJ&printsec=frontcover&dq=Victorian+family+trying+to+work+their+way+up+in+society.+With+a+pompous+dad,+an+accident+prone+son+and+a+story+full+of+shenanigans,+it%27s+easy+to+see+how+it+paved+the+way+for+sitcoms+like+%27Modern+Family%27+and+%27Schitts+Creek%27.+Written+by+the+brothers+George+and+Weedon+Grossmith,+this+is+a+raucous+tale+that+gives+a+window+to+the+great+British+serial+comedy.+George+and+Weedon+Grossmith+were+the+sons+of+a+court+reporter,+who+was+also+a+part-time+stag&hl=&cd=1&source=gbs_api",
                    "infoLink": "https://play.google.com/store/books/details?id=6wFoEAAAQBAJ&source=gbs_api",
                    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=6wFoEAAAQBAJ"
                },
                "saleInfo": {
                    "country": "GB",
                    "saleability": "FOR_SALE",
                    "isEbook": true,
                    "listPrice": {
                        "amount": 2,
                        "currencyCode": "GBP"
                    },
                    "retailPrice": {
                        "amount": 1.66,
                        "currencyCode": "GBP"
                    },
                    "buyLink": "https://play.google.com/store/books/details?id=6wFoEAAAQBAJ&rdid=book-6wFoEAAAQBAJ&rdot=1&source=gbs_api",
                    "offers": [
                        {
                            "finskyOfferType": 1,
                            "listPrice": {
                                "amountInMicros": 2000000,
                                "currencyCode": "GBP"
                            },
                            "retailPrice": {
                                "amountInMicros": 1660000,
                                "currencyCode": "GBP"
                            },
                            "giftable": true
                        }
                    ]
                },
                "accessInfo": {
                    "country": "GB",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": true,
                        "acsTokenLink": "http://books.google.co.uk/books/download/The_Diary_of_a_Nobody-sample-epub.acsm?id=6wFoEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=6wFoEAAAQBAJ&hl=&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "Written by the brothers George and Weedon Grossmith, this is a raucous tale that gives a window to the great British serial comedy. George and Weedon Grossmith were the sons of a court reporter, who was also a part-time stage entertainer."
                }
            }
        ]
    };
    // axios.get.mockResolvedValue(mockMovie)
    axios_1.default.mockResolvedValue(mockMovie);
    const response = yield (0, getBooks_1.getBooks)(mockKeyword);
    expect(axios_1.default.get).toHaveBeenCalledTimes(1);
    expect(axios_1.default.get).toHaveBeenCalledWith(apiURL);
    expect(response).toEqual(mockMovie);
}));
it('should handle API errors', () => __awaiter(void 0, void 0, void 0, function* () {
    // Mocking Axios get request with an error
    const mockError = new Error('API error');
    axios_1.default.mockRejectedValue(mockError);
    try {
        // Your actual API call
        yield axios_1.default.get(apiURL);
    }
    catch (error) {
        expect(error).toEqual(mockError);
        expect(axios_1.default.get).toHaveBeenCalledWith(apiURL);
    }
}));
