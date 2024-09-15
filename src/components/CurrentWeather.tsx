import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import CurrentCity from "./CurrentCity";
import FeelsLikeDetails from "./FeelsLikeDetails";
import LabelSwitch from "./LabelSwitch";
import { useState } from "react";
import useWeather from "../hooks/useWeather";

interface Props {
  searchCity: string;
}

const CurrentWeather = ({ searchCity }: Props) => {
  const [units, setUnits] = useState("imperial");
  const { data, isLoading } = useWeather(searchCity, units);
  if (!data) return <Spinner />;
  return (
    <Box backgroundColor="aqua" borderRadius={10} marginY={20}>
      <LabelSwitch units={units} onSetUnits={setUnits} />
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <CurrentCity data={data} isLoading={isLoading} />
        <FeelsLikeDetails />
      </SimpleGrid>
    </Box>
  );
};

export default CurrentWeather;
