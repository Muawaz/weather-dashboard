import { Box, HStack, Text } from "@chakra-ui/react";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import { WiCloudyWindy, WiHumidity } from "react-icons/wi";
import IconTextAttribute from "./IconTextAttribute";
import useWeather from "../hooks/useWeather";

const FeelsLikeDetails = () => {
  useWeather()
  return (
    <Box>
      <Text>Feels like {weather.main.feels_like}&deg;</Text>
      <HStack>
        <IconTextAttribute value={37} remarks="&deg;">
          <TiArrowUpThick />
        </IconTextAttribute>

        <IconTextAttribute value={29} remarks="&deg;">
          <TiArrowDownThick />
        </IconTextAttribute>
      </HStack>

      <IconTextAttribute title="Humidity" value={29} remarks="%">
        <WiHumidity />
      </IconTextAttribute>

      <IconTextAttribute title="Wind" value={9} remarks="Kph">
        <WiCloudyWindy />
      </IconTextAttribute>

      <IconTextAttribute title="Pressure" value={1017} remarks="hPa">
        <WiHumidity />
      </IconTextAttribute>
    </Box>
  );
};

export default FeelsLikeDetails;
