import { Box, Container, Flex, Grid, Heading, useBreakpointValue } from "@chakra-ui/react";

export function Catalog() {
   const catalogWidth = useBreakpointValue({
      base:'95%',
      sm:'95%',
      md:'90%',
      lg:'90%',
      xl:'90%'
   })
   const title = 'Conheça nosso catálogo'
   return (
      <>
      {/* <Box h={[0,0,0,'264px','264px']} bg='black'></Box> */}

      <Box bgImage={["static/img/leaves-3.jpg"]} bgSize='cover' bgColor={['','','','',""]} bgPosition='center' bgRepeat='no-repeat' >

         <Heading fontFamily='Andes' fontSize='3rem' py={12} color={['white','white','white','white','white']} textAlign='center' fontWeight='400'>
         {title}
         </Heading>


         <Flex pb={16} w='100%' justifyContent='center'>
         <iframe src="https://drive.google.com/file/d/142xOY3UIHPZpb-mE9cNVBS2yZkrJA9i8/preview" 
         width={catalogWidth} height="600px" allow="autoplay"></iframe>
         </Flex>
      </Box>
      </>
   )   
}