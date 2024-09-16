import axios, { AxiosRequestConfig } from "axios";
const apiKey = import.meta.env.VITE_API_KEY;


const axiosInstance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5",
    params: {
        appid: apiKey
        ,
    }
})

class APIClient<T> {
    endpoint: string;

    constructor (cityName: string)  {
        const url = 'weather?q='
        this.endpoint = `${url}${cityName}`
    }

    get = (config?: AxiosRequestConfig) =>  {
        return axiosInstance
        .get<T>(this.endpoint, config)
        .then(res => res.data)

    }
}

export default APIClient
