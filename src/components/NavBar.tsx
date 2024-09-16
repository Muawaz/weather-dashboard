import { Heading, HStack } from "@chakra-ui/react";
import ColorSwitchMode from "./ColorSwitchMode";

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Heading color='whitesmoke'>ReactWeather</Heading>
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
