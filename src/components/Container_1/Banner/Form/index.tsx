import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, Text, VStack } from "@chakra-ui/react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";


export function Form(formData) {
   return (

            <Flex bg='white' justifyContent='center' boxShadow='lg' 
            w={['80%','75%','500px','80%','64%']} mx='auto' borderRadius={2} p={4}>

               <VStack textAlign='left' w='100%' spacing={8}>

                  <Heading fontFamily='Andes' textAlign='center' fontWeight='300' fontSize='1.8rem' mx='auto'> {formData.title}</Heading>

                  <FormControl isRequired>
                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='first-name'> {formData.name}</FormLabel>
                  <Input p={2} placeholder='Digite seu nome' />
                  
                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='telephone'> {formData.number}</FormLabel>
                  <InputGroup>
                  <InputLeftElement pointerEvents='none' children={<BsTelephoneFill color='gray' />}/>
                  <Input type='tel' placeholder='Digite seu número' />
                  </InputGroup>

                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='e-mail'> {formData.email}</FormLabel>
                  <InputGroup>
                  <InputLeftElement pointerEvents='none' children={<IoIosMail fontSize='1.4rem' color='gray' />}/>
                  <Input type='mail' placeholder='Digite seu e-mail' />
                  </InputGroup>

                  </FormControl>

                  <Button color='white' borderRadius={3} w='100%' _hover={{bg:'datBlue', transition:'360ms'}} mx='auto' bg='datGreen'>
                     {formData.buttonText}
                  </Button>

               </VStack>
            </Flex>
   )}