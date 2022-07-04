import { Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, Select, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";


export function Form(formData) {

   const [states, setStates] = useState([]);
   const [cities, setCities] = useState([]);
   const [able, setAble] = useState(true);
   let emailData = {}

   let [city, setCity] = useState('')
   let [state, setState] = useState({'Estado':''})

   useEffect(() => {
      const fetchStates = async () => {
        const statesList = await axios(
          'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
        );

        let statesListPivot = []

        statesList.data.map(item => {
            statesListPivot.push(item.sigla)})
        setStates(statesListPivot.sort());
      }

      const fetchCities = async (state) => {
      if (state != {}) {
         const citiesList = await axios(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state['Estado']}/microrregioes`,
         );
         let citiesListPivot = []

         citiesList.data.map(item => {
             citiesListPivot.push(item.nome)})
         setCities(citiesListPivot.sort());
      };
      }
  
      fetchStates();
      fetchCities(state)
    }, [state]);

   useEffect( () => {
      if ((state['Estado'] != '' )) {
         setAble(false)
      } else {
         setAble(true)
      }
   }, [state])

   const [disable, setDisable] = useState(false)
   const [color, setColor] = useState('datGreen')
   const [sentText, setSentText] = useState('Enviar')

   const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm()
  
    function onSubmit(values) {
      setDisable(true)
      setColor('datBlue')
      setSentText('Enviado ✔')
      emailData = {...values, ...state}
      return new Promise(() => {
        setTimeout(() => {
         fetch('/api/mail', {
            method:'post',
            body:JSON.stringify(emailData)
         })
       }, 2000)
      })
    }

   return (

            <Flex id='#form' bg='white' justifyContent='center' boxShadow='lg' 
            w={['80%','75%','500px','80%','64%']} mx='auto' borderRadius={2} p={4}>

               <VStack textAlign='left' w='100%' spacing={8}>

                  <Heading fontFamily='Andes' textAlign='center' fontWeight='300' fontSize='1.8rem' mx='auto'> {formData.title}</Heading>

                     <FormControl isRequired>
                        <form onSubmit={handleSubmit(onSubmit)}>
                     <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='first-name'> {formData.name}</FormLabel>
                     <Input p={2} placeholder='Digite seu nome' {...register("Nome")} />
                     
                     <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='telephone'> {formData.number}</FormLabel>
                     <InputGroup>
                     <InputLeftElement pointerEvents='none' children={<BsTelephoneFill color='gray' />}/>
                     <Input type='tel' placeholder='Digite seu número' {...register("Numero")} />
                     </InputGroup>

                     <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='e-mail'> {formData.email}</FormLabel>
                     <InputGroup>
                     <InputLeftElement pointerEvents='none' children={<IoIosMail fontSize='1.4rem' color='gray' />}/>
                     <Input type='mail' placeholder='Digite seu e-mail' {...register("E-mail")} />
                     </InputGroup>

                     <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='e-mail'> Estado e Cidade</FormLabel>
                     <InputGroup>
                     <Select id='country' onChange={ (e) => setState({'Estado':e.target.value})}  placeholder='UF'>
                        {states.map(item => {
                           return (
                              <option key={item}>{item}</option>
                        )})}
                     </Select>
                     <Select isDisabled={able} id='city' onChange={ (e) => setCity(e.target.value)} placeholder='Cidade' {...register("Cidade")}>
                           {cities.map(item => {

                              return (
                                 <option key={item}>{item}</option>
                           )})}
                     </Select>
                     </InputGroup>
                     

                        <Button
                        borderRadius={3}
                        mt={8}
                        w='100%'
                        _hover={{bg:'datBlue',
                        transition:'360ms'}}
                        mx='auto'
                        cursor='pointer'
                        bg={color}
                        disabled={disable}
                        type='submit'
                        color='white'
                        >
                           {sentText}
                        </Button>
                     </form>
                  </FormControl>

               </VStack>
            </Flex>
   )}