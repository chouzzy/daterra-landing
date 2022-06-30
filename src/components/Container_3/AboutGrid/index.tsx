import { Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Catalog } from "../Catalog";

export function AboutGrid() {
   const title = 'Somos a Daterra e será uma honra trabalhar com você!'
   const subtitle = 'Cada ser é único e singular. Todos com seus problemas e felicidades individuais. Sabendo disso, a daterra trabalha com o foco de ser um meio de solução para esses problemas'

   return (

      <Grid bg='white' boxShadow='lg' templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(2,1fr)']} py={24} color='#333030' alignItems='center'>
         <GridItem  textAlign={['center','center','center','left','left']} py={8} px={[12,12,12,12,24]}>

            <Heading fontSize='2.4rem' fontFamily='Andes' py={4} color='datGreen' fontWeight='400'>
               {title}
            </Heading>

            <Text fontSize='1.1rem' color='datBlack' py={4}> {subtitle} </Text>

         </GridItem>


         <GridItem py={8} px={8}>
         <iframe width="100%" height="341px" src="https://www.youtube.com/embed/Khg27HTFJ-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
         </GridItem>
      </Grid>
   )   
}