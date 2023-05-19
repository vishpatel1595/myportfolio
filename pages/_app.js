import { ChakraProvider } from "@chakra-ui/react";
import Header from "../src/component/header.js";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider >
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}