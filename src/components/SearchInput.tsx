import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdMyLocation } from "react-icons/md";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box marginTop={20}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            onSearch(ref.current.value);
            ref.current.value = "";
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<Search2Icon />} />
          <InputRightElement children={<MdMyLocation />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search your City..."
            variant="filled"
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
