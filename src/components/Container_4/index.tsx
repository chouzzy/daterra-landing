import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, Link, useBreakpointValue, Input, Stack ,VStack, InputGroup, InputLeftAddon, Button, FormControl, HStack} from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im"
import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { useForm } from 'react-hook-form'

export function Container_4() { 

      const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm()
    
      function onSubmit(values) {
        return new Promise(() => {
          setTimeout(() => {
            fetch('/api/mail', {
               method:'post',
               body:JSON.stringify(values)
            })
          }, 2000)
        })
      }

   return (
      <>
      <Container id='#footer' maxW='100vw' bg='datBlue' color='white' p='0' m='0' centerContent>
            <Grid
              w={['90%','90%','90%','90%','']}
              py={4}
              gap={[20,8,12,0,0]}
              alignItems='baseline'
              borderBottom='1px
              solid
              #55808c'
              templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(12,1fr)','repeat(12,1fr)']}
              textAlign='center'
              color='white'
            >
               <GridItem
                 colStart={[1,1,1,1,1]}
                 colEnd={[1,1,1,3,3]}
                 my={['','','','auto','auto']}
                 mx={['auto','auto','auto','','']}
               >
                  <Image src={"static/img/daterra-logo-white-cut.png"} maxW={['100%','200px','100%','100%']} alt='Logo Daterra' />
               </GridItem>

               <GridItem pl={[0,0,0,8,8]} colStart={[1,1,1,3,3]} colEnd={[1,1,1,8,8]} my='auto'> 
                     <Flex mr='auto' textAlign='left'>
                        <Box fontSize='0.85rem' fontWeight='300'>
                           <Text fontSize='1.4rem' fontWeight='600'> Endereços  | Telefone  </Text>
                           <Text py={1}> • Rua Bernardino de Campos, 711, Higienópolis, Ribeirão Preto-SP </Text>
                           <Text py={1}> • Av. Prof. João Fiúsa, 1518, Alto da Boa Vista, Ribeirão Preto-SP </Text>
                           <Text py={1}> • Av. Dom Pedro I, 808, Ipiranga, Ribeirão Preto-SP </Text>
                           <Text py={1}> • Rua Vol. Otto G. Martins, 1395 - Centro, Sertãozinho-SP </Text>
                           <Text py={1}> • Av. Nossa Sra Aparecida, 881 - Vila Industrial, Sertãozinho-SP </Text>
                           <Text py={1}> • (16) 99179-0291 | marketing@daterra.com.br </Text>
                        </Box>
                     </Flex >
               </GridItem>

               <GridItem colStart={[1,1,1,9,9]} colEnd={[1,1,1,13,13]} pr={[0,0,0,12,12]} mt='auto'> 
                  <Stack spacing={2} w='100%' textAlign='left'>
                     <Box fontSize='1.2rem' fontWeight='600'> Envie-nos uma mensagem </Box>
                     
                     
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <Text>Empresa/ Pessoa:</Text>
                        <Input
                        color='datBlack'
                        bg='white'
                        type='name'
                        my='10px'
                        placeholder='Digite o nome de sua empresa'
                        size='sm'
                        w='100%'
                        {...register("Empresa")}
                        />
                        <Text >Assunto:</Text>
                        <Input
                        color='datBlack'
                        bg='white'
                        type='text'
                        placeholder='Assunto'
                        size='sm'
                        w='100%'
                        {...register("Assunto")}
                        />

                        <Text >Mensagem:</Text>
                        <Input
                        color='datBlack'
                        bg='white'
                        type='text'
                        placeholder='Mensagem'
                        size='sm'
                        w='100%'
                        {...register("Mensagem")}
                        />
                        
                        <Button w='100%' mt={4} bg='datGreen' type='submit'>
                           Enviar
                        </Button>
                     </form>

                  </Stack>
               </GridItem>
            </Grid>
      </Container> 
      </>
   )
}