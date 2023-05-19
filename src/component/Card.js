import {Box , Container ,SimpleGrid , Card, CardHeader, CardBody, CardFooter , Heading , Button, Text } from '@chakra-ui/react'
const card = () => {
    const cardData = [
        { title: 'Card 1', description: 'This is card 1' },
        { title: 'Card 2', description: 'This is card 2' },
        { title: 'Card 3', description: 'This is card 3' },
        { title: 'Card 4', description: 'This is card 4' },
      ];
return(
    <Box height={{ base: "100%", sm: "100%" , md:'100%' }} py={{base:'70px' , md:'140px'}}  display={"flex"}
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
<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
{cardData.map((card, index) => (
  <Card>
    <CardHeader>
      <Heading size='md'> {card.title}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{card.description}.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
))}
  {/* <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card> */}
</SimpleGrid>
</Container>

</Box>);

}

export default card;