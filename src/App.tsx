import { Box, Grid, GridItem } from "@chakra-ui/react";
import CurrentWeather from "./components/CurrentWeather";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";

function App() {
  // const [searchText, setSearchText] = useState("Lahore");
  return (
    <Grid>
      <GridItem bg="dodgerblue" paddingRight={2} paddingLeft={2}>
        {/* <Show above="lg"> */}
        <Box>
          <NavBar />
          <SearchInput />
          <CurrentWeather />
        </Box>
        {/* </Show> */}
      </GridItem>
    </Grid>
  );
}

export default App;
