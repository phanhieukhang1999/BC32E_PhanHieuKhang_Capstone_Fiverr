import axios from "axios"
import { ACCESS_TOKEN, DOMAIN, TOKEN } from "../util/settings/config"

const TokenCybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY"

const baseURL = "https://fiverrnew.cybersoft.edu.vn/api/"

let token = localStorage.getItem(TOKEN)



export const api = axios.create()

api.interceptors.request.use((config) => {
    config = {
        ...config,
        headers: {
            TokenCybersoft,
            token,
            // token,
        },
        baseURL,
    }

    return config
})