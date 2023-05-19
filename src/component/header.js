import {
  Box,
  Container,
  Flex,
  Image,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Link from 'next/link';
import { MailOutlined , InstagramOutlined , GithubOutlined , LinkedinOutlined } from "@ant-design/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container
        maxW={{
          base: "container.sm",
          sm: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        <Flex>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={'wrap'}
            w={"100%"}
            p={2}>
            <Box fontSize={"20px"} display={"flex"}>
              <MailOutlined />
              <Text ms={"2"} fontSize={"12px"}>
                vishpatel1595@gmail.com
              </Text>
            </Box>
            <Box display={"flex"} alignItems={'center'} justifyContent={'space-between'}>
              <UnorderedList display={'flex'} m={0} p={0} >
                <ListItem me={4} listStyleType={'none'}> <Link href={'#'}> <GithubOutlined /> </Link></ListItem>
                <ListItem me={4} listStyleType={'none'}> <Link href={'#'}> <InstagramOutlined /> </Link></ListItem>
                <ListItem me={4} listStyleType={'none'}> <Link href={'#'}><LinkedinOutlined /> </Link> </ListItem>
               
              </UnorderedList>
              <Button onClick={toggleColorMode}>
                {colorMode === "Dark" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default header;
