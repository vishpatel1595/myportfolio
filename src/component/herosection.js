import { Box, Container, Image, Flex, Text, Heading , Button } from "@chakra-ui/react";
import userimg from "../../public/assets/images/user.png";

const herosection = () => {
  return (
    <Box height={{ base: "100%", sm: "100%" , md:`calc(100vh - 4rem)` }} py={{base:'8' , md:16}}  display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}>
      <Container  
      h={'100%'}
        maxW={{
          base: "container.sm",
          sm: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
        height={"100%"}>
        <Flex h={'100%'}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}>
          <Box>
            <Image
              borderRadius={"50%"}
              w={"150px"}
              h={"150px"}
              src={userimg.src}
              alt="Dan Abramov"
            />
          </Box>
          <Text mt={2}>Hi, I am Vishal </Text>
          <Heading fontSize={{base:'28px', sm:'28px', md:'36px' , lg:'36px'}} px={{base:'4' , lg:'16'}} textTransform={'capitalize'} textAlign={'center'}>
          "Code that catches the eye,<br></br> design that catches the heart."
          </Heading>
          <Button colorScheme='gray' mt={'6'}>My Portfolio</Button>
        </Flex>
      </Container>
    </Box>
  );
};
export default herosection;
