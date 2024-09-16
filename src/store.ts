import { create } from "zustand";

interface WeatherQuery {
    cityName?: string;
    units?: string;

}

interface WeatherQueryStore {
    weatherQuery: WeatherQuery
    setCityName: (text: string) => void;
    setUnits: (unit: string) => void;
}

const useWeatherQueryStore = create<WeatherQueryStore>(set => ({
    weatherQuery: {
        cityName: "Gilgit",
        units: 'imperial'
    },
    setCityName: (text) => set( store => ({weatherQuery: {...store.weatherQuery, cityName: text}})),
    setUnits: (unit) => set( store => ({weatherQuery: {...store.weatherQuery, units: unit}})),
}))

export default useWeatherQueryStore