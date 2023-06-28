import axios from "axios";

const ApiManager = axios.create({
    baseURL:"http://10.0.2.2:3344/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials:true
})

export default ApiManager