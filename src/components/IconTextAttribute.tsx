import { HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  value: number;
  remarks?: string;
}

const IconTextAttribute = ({ children, title, value, remarks }: Props) => {
  return (
    <HStack>
      {children}
      {title ? <Text fontWeight="bold">{title}</Text> : ""}
      <Text>{value}</Text>
      {remarks ? <Text>{remarks}</Text> : ""}
    </HStack>
  );
};

export default IconTextAttribute;
