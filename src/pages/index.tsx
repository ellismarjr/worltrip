import { Flex, Image } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex height="100vh" flexDirection="column">
      <Header />
      <Image src="/home_banner.png" height={335}/>
    </Flex>

  )
}
