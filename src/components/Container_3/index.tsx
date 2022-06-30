import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import { AboutGrid } from "./AboutGrid";
import { Catalog } from "./Catalog";

export function Container_3() {
   return (
      <Container maxW='100vw' minH='50vh' m='0' px={0} >
         <Catalog/>
      </Container>
   )   
}