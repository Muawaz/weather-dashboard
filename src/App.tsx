import { Box, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import CurrentWeather from "./components/CurrentWeather";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";
import bg from "./assets/pexels-jplenio-1118873.jpg";
function App() {
  const { colorMode } = useColorMode();
  return (
    <Grid h="100vh" w="100%">
      <GridItem
        backgroundImage={colorMode === "light" ? bg : ""}
        backgroundSize="contain"
        // backgroundPosition="center"
        // backgroundRepeat="no-repeat"
        paddingRight={2}
        paddingLeft={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w="80%">
          <NavBar />
          <SearchInput />
          <CurrentWeather />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
