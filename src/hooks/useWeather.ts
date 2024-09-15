import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

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
    const apiClient = new APIClient<Weather>(cityName)

    return useQuery({
        queryKey: ['weather', cityName, units],
        queryFn: () => apiClient.get({
            params: {
                units: units
            }
        })
    })
}

export default useWeather