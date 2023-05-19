import {
  Box,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import bootstrapimg from "../../public/assets/images/bootstrap.jpeg";
import reactimg from "../../public/assets/images/react.png";
import htmlimg from "../../public/assets/images/html.png";
import scssimg from "../../public/assets/images/scss.png";
import cssimg from "../../public/assets/images/css.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const slider = () => {
  const sliderData = [
    {
      title: "slider 1",
      description: "This is card 1",
      img: bootstrapimg,
    },
    {
      title: "slider 2",
      description: "This is card 2",
      img: reactimg,
    },
    {
      title: "slider 3",
      description: "This is card 3",
      img: htmlimg,
    },
    {
      title: "slider 4",
      description: "This is card 4",
      img: scssimg,
    },
    {
      title: "slider 4",
      description: "This is card 4",
      img: cssimg,
    },
  ];
  return (
    <Box
      height={{ base: "100%", sm: "100%", md: "100%" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"blackAlpha.400"}
      py={"120px"}
      border={"1px solid red"}>
      <Container
        h={"100%"}
        maxW={{
          base: "container.sm",
          sm: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          {sliderData.map((slider, index) => {
            
            return (
              <SwiperSlide>
                <Card p={4} bg={"none"}>
                  <CardHeader p={2} display={"flex"} justifyContent={"center"}>
                    <Box>
                      <Image h={"50"} src={slider.img.src} alt="Dan Abramov" />
                    </Box>
                  </CardHeader>
                  <CardBody p={2} display={"flex"} justifyContent={"center"}>
                    {/* <Heading size="md"> {slider.title}</Heading> */}
                  </CardBody>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};
export default slider;
