import { Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, Select, useBreakpointValue, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";


export function Form(formData) {

   const [states, setStates] = useState([]);
   const [cities, setCities] = useState([]);
   const [able, setAble] = useState(true);

   let [city, setCity] = useState('')
   let [state, setState] = useState('')

   useEffect(() => {
      const fetchStates = async () => {
        const statesList = await axios(
          'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
        );

        let statesListPivot = []

        console.log(statesList.data)
        statesList.data.map(item => {
            statesListPivot.push(item.sigla)})
        console.log(statesListPivot)
        setStates(statesListPivot.sort());
      }

      const fetchCities = async (state) => {
      if (state != '') {
         const citiesList = await axios(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/microrregioes`,
         );
         let citiesListPivot = []

         console.log(citiesList.data)
         citiesList.data.map(item => {
             citiesListPivot.push(item.nome)})
         console.log(citiesListPivot)
         setCities(citiesListPivot.sort());
      };
      }
  
      fetchStates();
      fetchCities(state)
    }, [state]);

   useEffect( () => {
      if ((state != '')) {
         setAble(false)
      } else {
         setAble(true)
      }
      console.log('change')
      console.log(state)
   }, [state])

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

                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='e-mail'> Estado e Cidade</FormLabel>
                  <InputGroup>
                  <Select id='country' onChange={ (e) => setState(e.target.value)}  placeholder='UF'>
                     {states.map(item => {
                        return (
                           <option key={item}>{item}</option>
                     )})}
                  </Select>
                  <Select isDisabled={able} id='city' onChange={ (e) => setCity(e.target.value)} placeholder='Cidade'>
                        {cities.map(item => {

                           return (
                              <option key={item}>{item}</option>
                        )})}
                  </Select>
                  </InputGroup>
                  </FormControl>

                  <Button color='white' borderRadius={3} w='100%' _hover={{bg:'datBlue', transition:'360ms'}} mx='auto' bg='datGreen'>
                     {formData.buttonText}
                  </Button>

               </VStack>
            </Flex>
   )}