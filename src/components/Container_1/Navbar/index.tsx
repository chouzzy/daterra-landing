import { Button, useBreakpointValue, Grid, GridItem, Image, Text} from "@chakra-ui/react"
import {Link as Slink} from 'react-scroll'
import { Modal } from "./Modal";

export function Navbar() {
   const isMobile = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
   })
   return (
         <Grid
            py={2}
            position='relative'
            bg='white'
            boxShadow='lg'
            templateColumns={['','','','repeat(12,1fr)','repeat(12,1fr)']}
            fontFamily='Andes'
            textAlign='center'
            bgColor='white.50'
            alignItems='end'
         >

         <GridItem mr={['auto','','','','']} ml={[4,4,'','-10px',16]}  colStart={[0,0,1,2,1]} colEnd={[0,0,3,3,4]}>
            <Image mx='auto' src='static/img/daterra-logo.png' maxW={['144px','164px','164px','164px']} alt='Dan Abramov'/>
         </GridItem>

         {isMobile?
            <Modal/>
         : 
         <>
            <GridItem colStart={[3,3,3,3,4]} colEnd={[10,10,10,10,11]} mb={2.5}>
                  <Text fontSize='1.45rem' color='datCyan'fontStyle='italic'>O toque de beleza que faltava no seu dia</Text>
            </GridItem>

            <GridItem colStart={[10,10,10,10,11]} colEnd={12} mb={2} >
               <Slink to='#form' spy={true} smooth={true} offset={-50} duration={500}>
                  <Button borderRadius={3} _hover={{boxShadow:'lg'}} bg='datBlue' fontSize='0.9rem' color='white'>SEJA UMA CONSULTORA</Button>
               </Slink>
            </GridItem>

            {/* <GridItem colStart={11} colEnd={13} mb={2}>
                  <Button borderRadius={3} _hover={{boxShadow:'lg'}} bg='datGreen' color='white'>Loja Daterra</Button>
            </GridItem> */}
            </>
         }
         </Grid>
   )
}