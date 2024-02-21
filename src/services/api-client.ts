import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'e9a17310966c4d6481efb93fa8d73dd8'
    }
})