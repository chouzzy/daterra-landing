import { Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { GiChemicalDrop, GiChemicalBolt } from "react-icons/gi";

export function IconGrid(IconGridData) {
   return (
            <GridItem textAlign='center' color='datBlue'>
               <Flex justifyContent='center' alignItems='center' p={2} color={IconGridData.color}> {IconGridData.icon}</Flex>
               <Text mx='auto' maxW='200px' py={2} fontSize='1rem' fontWeight='500'> {IconGridData.description}</Text>
            </GridItem>
   )   
}