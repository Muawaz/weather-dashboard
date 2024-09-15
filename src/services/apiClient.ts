import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5",
    params: {
        appid: "37bf712b4a2574d0115543929236cae2",
    }
})

class APIClient<T> {
    endpoint: string;

    constructor (cityName: string, units: string)  {
        const url = 'weather?q='
        this.endpoint = `${url}${cityName}&units=${units}`
    }

    get = () =>  {
        return axiosInstance
        .get<T>(this.endpoint)
        .then(res => res.data)

    }
}

export default APIClient
