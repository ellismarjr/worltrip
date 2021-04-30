import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1440}
      height="25"
      alignItems="center"
      justifyContent="center"
      marginX="auto"
      paddingY="10"
      bg="white"
    >
      <Image
        src="/logo.png"
      />
    </Flex>
  );
}