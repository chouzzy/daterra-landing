import { useDisclosure, Box, Button, Collapse, useBreakpointValue, Grid, GridItem, Image, Heading, Text, VStack, Flex, Link, HStack} from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

import { RiWhatsappFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { SocialMedia } from "./Social Media";

export function Modal() {
   const socialMediaLinks = {
      'instagram':'https://www.instagram.com/farmaciadaterra/',
      'facebook':'https://www.facebook.com/daterraoficial?ref=hl',
      'linkedin':'https://br.linkedin.com/company/daterra---farm%C3%A1cia-de-manipula%C3%A7%C3%A3o-e-cosm%C3%A9ticos',
      'whatsapp':'https://wa.me/5516992469499'
   }
   const { isOpen, onToggle } = useDisclosure()
   return (
      <>
         <Button w='64px' right='0' mr={[8,8,12,0,12]} top='0' mt={[14,16,16,16,16]} position='absolute' bg='datCyan' color='white' onClick={onToggle}>MENU</Button>
         <Collapse in={isOpen} animateOpacity>
            <Box
               w='100vw'
               color='datBlue'
               rounded='md'
               shadow='md'
            >
               <VStack fontFamily='Heebo' fontSize='1.2rem' pt={4}>

                  <Link href='/' _hover={{textDecoration:'none'}}>
                     <Flex  _hover={{color:'datGreen', transition:'360ms'}}>Seja uma consultora</Flex>
                  </Link>

                  <Link href='https://loja.daterra.com.br/' _hover={{textDecoration:'none'}}>
                     <Flex  _hover={{color:'datGreen', transition:'360ms'}}>Visite nossa loja!</Flex>
                  </Link>

                  <HStack p={2} fontSize='1.6rem' spacing={3} textAlign='center' borderTop='1px solid #b8d432' w='72vw' justifyContent='center'>

                        <SocialMedia color='#E1306C' icon={<BsInstagram/>} mediaLink={socialMediaLinks.instagram}/>
                        <SocialMedia color='#4267B2' icon={<ImFacebook2/>} mediaLink={socialMediaLinks.facebook}/>
                        <SocialMedia color='#4267B2' icon={<SiLinkedin/>} mediaLink={socialMediaLinks.linkedin}/>
                        <SocialMedia color='#25D366' icon={<RiWhatsappFill/>} mediaLink={socialMediaLinks.whatsapp}/>
                  </HStack>
               </VStack>
            </Box>
         </Collapse>
         </>
      )}