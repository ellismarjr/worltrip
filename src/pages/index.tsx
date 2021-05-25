import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';


SwiperCore.use([Pagination, Navigation]);

import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";


export default function Home() {
  return (
    <Flex height="100vh" flexDirection="column">
      <Header />
      <Image src="/home_banner.png" height={370} maxWidth="100vw" />
      <Flex
        position="absolute"
        top="48"
        width="100%"
      >
        <Flex
          width="100%"
          paddingX="32"
          justifyContent="space-between"
        >
          <Box>
            <Text
              fontSize={36}
              fontWeight="bold"
              color="gray.100"
            >
              5 Continentes, <br />
            infinitas possibilidades.
          </Text>
            <Text
              marginTop="4"
              fontSize={20}
              color="gray.300"
            >
              Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
          </Box>
          <Image
            src="/airplane.png"
            alignSelf="flex-end"
          />
        </Flex>
      </Flex>

      <Flex paddingX={32} flexDirection="column">
        <TravelTypes />

        <Divider borderBottomWidth={1}
          borderColor="gray.900" width="24" alignSelf="center" />
        <Text alignSelf="center"
          marginTop="8"
          fontSize="36"
          fontWeight="medium"
          color="gray.900"
          textAlign="center"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Flex>
          <Swiper
            className="mySwiper"
            pagination={true}
            slidesPerView={1}
            spaceBetween={50}
            navigation={true}
          >
            <SwiperSlide>
              <Image src="/north_america.png" maxWidth="100vw" />
              <Box position="absolute">
                <Text fontWeight="bold" fontSize="48" color="#FFF">América do Norte</Text>
                <Text color="gray.300" fontSize="24" fontWeight="bold">Lindos arranha-céus.</Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/south_america.png" maxWidth="100vw" />
              <Box position="absolute">
                <Text fontWeight="bold" fontSize="48" color="#FFF">América do Sul</Text>
                <Text color="gray.300" fontSize="24" fontWeight="bold">Venha conhecer o litoral sul-americano.</Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/asia.png" maxWidth="100vw" />
              <Box position="absolute">
                <Text fontWeight="bold" fontSize="48" color="#FFF">Ásia</Text>
                <Text color="gray.300" fontSize="24" fontWeight="bold">Um continente multicultural.</Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/europe.png" maxWidth="100vw" />
              <Box position="absolute">
                <Text fontWeight="bold" fontSize="48" color="#FFF">Europa</Text>
                <Text color="gray.300" fontSize="24" fontWeight="bold">O continente mais antigo.</Text>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </Flex>

  )
}
