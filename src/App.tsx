import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";

function App() {
  const [searchText, setSearchText] = useState("Lahore");
  return (
    <Grid>
      <GridItem bg="dodgerblue" padding="10px">
        {/* <Show above="lg"> */}
        <Box>
          <NavBar />
          <SearchInput onSearch={setSearchText} />
          <CurrentWeather searchCity={searchText} />
        </Box>
        {/* </Show> */}
      </GridItem>
    </Grid>
  );
}

export default App;
