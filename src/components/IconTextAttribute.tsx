import { HStack, StackDivider, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  value: number;
  remarks?: string;
}

const IconTextAttribute = ({ children, title, value, remarks }: Props) => {
  return (
    <HStack
      divider={<StackDivider marginRight={20} />}
      spacing={30}
      className="d-flex"
    >
      <HStack>
        {children}
        <Text>{title}</Text>
      </HStack>
      <HStack>
        <Text>{value}</Text>
        <Text>{remarks}</Text>
      </HStack>
    </HStack>
  );
};

export default IconTextAttribute;
