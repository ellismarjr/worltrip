import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex width="100%" padding={32} justifyContent="space-around"
    >

      <Flex
        flexDirection="column"
        justifyContent="center"
        cursor="pointer"
      >
        <Image src="/cocktail.png" />
        <Text
          fontSize={24}
          fontWeight="semibold"
          color="gray.900"
          marginTop="6"
        >Praia</Text>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        cursor="pointer"
      >
        <Image src="/surf.png" />
        <Text
          fontSize={24}
          fontWeight="semibold"
          color="gray.900"
          marginTop="6"
        >Praia</Text>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        cursor="pointer"
      >
        <Image src="/building.png" />
        <Text
          fontSize={24}
          fontWeight="semibold"
          color="gray.900"
          marginTop="6"
        >Moderno</Text>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        cursor="pointer"
      >
        <Image src="/museum.png" />
        <Text
          fontSize={24}
          fontWeight="semibold"
          color="gray.900"
          marginTop="6"
        >Clássico</Text>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        cursor="pointer"
      >
        <Image src="/earth.png" />
        <Text
          fontSize={24}
          fontWeight="semibold"
          color="gray.900"
          marginTop="6"
        >e mais...</Text>
      </Flex>
    </Flex>
  );
}