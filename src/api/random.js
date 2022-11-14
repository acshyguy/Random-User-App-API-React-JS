
import axios from "axios";

export const random = axios.create({
    baseURL: 'https://randomuser.me/api',
    dataType: "json"
    // Headers: {

    // }
})