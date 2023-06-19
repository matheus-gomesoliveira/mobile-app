import axios from "axios";

const ApiManager = axios.create({
    baseURL:"http://localhost:3344/",
    responseType:'json',
    withCredentials:true
})

export default ApiManager