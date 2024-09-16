import { Image, Spinner } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  WiCloudy,
  WiCloudyGusts,
  WiDayHaze,
  WiDaySunny,
  WiFog,
  WiNightAltPartlyCloudy,
  WiNightPartlyCloudy,
  WiRainMix,
  WiSmoke,
  WiThunderstorm,
} from "react-icons/wi";

interface Props {
  weather_id?: number;
}

const WeatherIcons = ({ weather_id }: Props) => {
  if (!weather_id) return <Spinner />;

  const iconMap: { [key: number]: IconType } = {
    211: WiThunderstorm,
    500: WiRainMix,
    701: WiFog,
    711: WiSmoke,
    721: WiDayHaze,
    800: WiDaySunny,
    801: WiCloudyGusts,
    802: WiNightAltPartlyCloudy,
    803: WiNightPartlyCloudy,
    804: WiCloudy,
  };
  return <Image boxSize="150" as={iconMap[weather_id]} color="gray" />;
};

export default WeatherIcons;
