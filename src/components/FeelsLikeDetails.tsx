import { Box, HStack, Spinner, Text } from "@chakra-ui/react";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import { WiBarometer, WiCloudyWindy, WiHumidity } from "react-icons/wi";
import useWeather from "../hooks/useWeather";

const FeelsLikeDetails = () => {
  const { data, isLoading } = useWeather();

  if (!data) return <Spinner />;
  if (isLoading) return <Spinner />;
  return (
    <Box marginLeft={10} margin={5}>
      <Text>Feels like {data.main.feels_like}&deg;</Text>

      <HStack spacing={10}>
        <Box>
          <HStack marginY={5}>
            <TiArrowDownThick />
            <Text>{data.main.temp_min}&deg;</Text>
          </HStack>
          <HStack>
            <WiHumidity />
            <Text fontWeight="bold">Humidity</Text>
          </HStack>
          <HStack>
            <WiCloudyWindy />
            <Text fontWeight="bold">Wind</Text>
          </HStack>
          <HStack>
            <WiBarometer />
            <Text fontWeight="bold">Pressure</Text>
          </HStack>
        </Box>
        <Box>
          <HStack marginY={5}>
            <TiArrowUpThick />
            <Text>{data.main.temp_max}&deg;</Text>
          </HStack>
          <HStack>
            <Text>{data.main.humidity}</Text>
            <Text>%</Text>
          </HStack>
          <HStack>
            <Text>{data.wind.speed}</Text>
            <Text>Kph</Text>
          </HStack>
          <HStack>
            <Text>{data.main.pressure}</Text>
            <Text>hPa</Text>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default FeelsLikeDetails;
