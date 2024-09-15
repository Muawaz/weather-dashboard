import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5",
    params: {
        appid: "37bf712b4a2574d0115543929236cae2",
    }
})

export default axiosInstance
