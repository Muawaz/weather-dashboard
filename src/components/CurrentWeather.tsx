import { Box, SimpleGrid } from "@chakra-ui/react";
import CurrentCity from "./CurrentCity";
import FeelsLikeDetails from "./FeelsLikeDetails";
import LabelSwitch from "./LabelSwitch";

const CurrentWeather = () => {
  
  return (
    <Box backgroundColor="aqua" borderRadius={10} marginY={20}>
      <LabelSwitch />
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <CurrentCity />
        <FeelsLikeDetails />
      </SimpleGrid>
    </Box>
  );
};

export default CurrentWeather;
