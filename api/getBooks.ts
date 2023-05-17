import axios from "axios"

export const getBooks = async (keyword: string, maxResults: string | undefined, startIndex: string | undefined) => {
    let apiURL = process.env.API_URL + "" + process.env.GOOGLE_API_KEY + `&q=${keyword}`
    if(startIndex) {
        apiURL += `&startIndex=${startIndex}`
    }
    if(maxResults) {
        apiURL += `&maxResults=${maxResults}`
    }
    const data = await axios.get(apiURL)
    return data
}