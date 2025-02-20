import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://ai-saas-text-to-image-server.onrender.com",
    headers : {
        "Content-Type" : "application/json"
    },
    withCredentials : true
})