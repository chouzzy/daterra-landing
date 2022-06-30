import { Container, Grid, useBreakpointValue } from "@chakra-ui/react";
import { IconsGrid } from "./IconsGrid";

export function Container_2() {
   const isDesktopVersion = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: true,
      xl: true
   })
   return (
      <>
      {isDesktopVersion?
      <Container bg='white' maxW='100vw' minH='50vh' m='0' p='0'>
            <IconsGrid/>
      </Container>
         :
         ''
      }
      </>
   )   
}