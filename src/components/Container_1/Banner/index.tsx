import { Flex, Grid, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import { Form } from "./Form";


export function Banner() {
   const isDesktopVersion = useBreakpointValue({
      base:false,
      sm:false,
      md:false,
      lg:true,
      xl:true,
   })

   const promoTitle = 'Comece a ganhar dinheiro antes de investir!'
   const promoSubtitle = 'Consulte as condições da sua região com nossa equipe.*'
   return (
      <Grid
        templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(2,1fr)']}
        bgImage={['static/img/leaves-3.jpg','static/img/leaves-3.jpg','static/img/leaves-3.jpg','static/img/model.jpg','static/img/model.jpg']}
        bgRepeat='no-repeat'
        m='0'
        minH={['','','','100vh','100vh']}
        p='0'
        bgPosition={['center','center','center','left','left']}
        bgSize={['cover','cover','cover','auto','']}
      >

         { isDesktopVersion?
         <>
         <Box mt='auto' fontFamily='andes'>

         <Text mr='auto' fontWeight='600' maxW='500px' lineHeight={1.2} px={12} pb={2} color='white' fontSize='2rem' mt='auto'> {promoTitle}</Text>
         <Text mr='auto' fontWeight='300' maxW='500px' lineHeight={1.2} px={12} pb={6} color='white' fontSize='0.9rem' mt='auto'> {promoSubtitle} </Text>
         </Box>

         <Flex alignItems='center' color='gray.600'>
         <Form title='SEJA UMA CONSULTORA' name='Nome' number='Número' email='E-mail' residencia='Cidade e Estado' buttonText='Enviar' />
         </Flex>
         </>

         :

         <>
         <Flex my={[24,16,16,0,0]}  alignItems='center' color='gray.600'>
         <Form title='SEJA UMA CONSULTORA' name='Nome' number='Número' email='E-mail' buttonText='Enviar' />
         </Flex>

         <Box mt='auto' fontFamily='andes'>

         <Text mr='auto' fontWeight='600' maxW='500px' lineHeight={1.2} px={12} pb={2} color='white' fontSize={['1.3rem','1.64rem','2rem','2rem','2rem']} mt='auto'> {promoTitle}</Text>
         <Text mr='auto' fontWeight='300' maxW='500px' lineHeight={1.2} px={12} pb={6} color='white' fontSize='0.9rem' mt='auto'>{promoSubtitle}</Text>
         </Box>

         </>
         }
         
      </Grid>
   )   
}