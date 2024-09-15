import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import useWeatherQueryStore from "../store";

export interface Weather {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number
  };
  wind: {
    speed: number
  }
  weather: [
    {
      id: number;
      main: string;
    }
  ];
}

const useWeather = () => {
    const weatherQuery = useWeatherQueryStore(s => s.weatherQuery)    
    const apiClient = new APIClient<Weather>(weatherQuery.cityName!)
    return useQuery({
        queryKey: ['weather', weatherQuery.cityName, weatherQuery.units],
        queryFn: () => apiClient.get({
            params: {
                units: weatherQuery.units
            }
        })
    })
}

export default useWeather