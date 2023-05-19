import { Box } from "@chakra-ui/react";
import Herosection from "@/src/component/herosection";
import Card from "@/src/component/Card";
import Slider from "@/src/component/slider";

export default function Home() {
  return (
    <Box >
    <div >
      <Herosection/>
      <Slider/>
      <Card/>
     
    </div>
    </Box>
  );
}
