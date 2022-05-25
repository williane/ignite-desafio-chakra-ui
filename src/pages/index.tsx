import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />

      <Flex as="hr" bgColor='gray.700' w={['60px', '90px']} h="4px" mx='auto' />

      <Heading fontWeight={500} textAlign='center' py='52px'>
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>

      <Flex w="100%" maxWidth="1160px" h={["250px", "450px"]} mx="auto" mb="24">
        <Swiper
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          style={{ flex: '1' }}
        >
          <SwiperSlide>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              bgImage="url(/ContinentImage.png)"
              bgSize="cover"
              textAlign="center"
              >
              <Link href="/continent/europe">
                <a>
                  <Heading color="gray.150">Europa</Heading>
                  <Text  color="gray.300">O continente mais antigo.</Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              bgImage="url(/ContinentImage.png)"
              bgSize="cover"
              textAlign="center"
              >
              <Link href="/continente/europa">
                <a>
                  <Heading color="gray.150">Europa</Heading>
                  <Text  color="gray.300">O continente mais antigo.</Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  )
}
