import axios from "axios"

export const getBooks = async (keyword: string) => {
    const apiURL = process.env.API_URL + "" + process.env.GOOGLE_API_KEY + `&q=${keyword}`
    const data = await axios.get(apiURL)
    return data
}