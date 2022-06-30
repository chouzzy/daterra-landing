import { Container } from "@chakra-ui/react";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

export function Container_1() {
   return (
      <Container bg='linear-gradient(180deg, #2596be, #239bcd)' maxW='100vw' minH='100vh' m='0' p='0'>
         <Navbar/>
         <Banner/>
      </Container>
   )   
}