import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "../services/apiClient";

export interface Weather {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
  };
  weather: [
    {
      id: number;
      main: string;
    }
  ];
}


  

const useWeather = (cityName: string, units: string) => {
    const apiClient = new APIClient<Weather>(cityName, units)
}
//     {
//     const [isLoading, setLoading] = useState(false);
//     const [data, setData] = useState<Weather>();
//     useEffect(() => {
//         const controller = new AbortController();
//         setLoading(true);
//         axiosInstance
//         .get<Weather>(`weather?q=${cityName}&units=${units}`, {
//             signal: controller.signal,
//         })
//         .then((res) => {
//             setData(res.data);
//             setLoading(false);
//         })
//         .catch((err) => {
//             if (err instanceof CanceledError) return;
//             console.log("error : ", err);
//             setLoading(false);
//         });
//     }, [cityName, units]);

//     return {data, isLoading}

// }

export default useWeather