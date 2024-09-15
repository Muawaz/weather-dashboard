import { Box, HStack, Spinner, Text } from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";
import WeatherIcons from "./WeatherIcons";

const CurrentCity = () => {
  const { data, isLoading } = useWeather();
  if (!data) return <Spinner />;

  if (isLoading) return <Spinner />;
  return (
    <HStack>
      <Box marginLeft={10} marginBottom={5}>
        <Text fontSize="xl" fontWeight="bold">
          {data.name}
        </Text>
        <WeatherIcons weather_id={data.weather[0].id} />
        <Text>{data.weather[0].main}</Text>
      </Box>
      <Text fontSize={80}>{data.main.temp.toFixed(0)}&deg;</Text>
    </HStack>
  );
};

export default CurrentCity;
