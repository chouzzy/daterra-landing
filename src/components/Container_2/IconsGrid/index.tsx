import { Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { GiHealthPotion, GiSpiralBottle } from "react-icons/gi";
import { BiRocket} from "react-icons/bi";
import { VscGraphLine } from "react-icons/vsc";
import { RiCustomerService2Fill} from "react-icons/ri";
import { IoMdStopwatch} from "react-icons/io";
import { FaPumpSoap, FaMoneyBillWave, FaMicroscope, FaHandHoldingUsd, FaRocket} from "react-icons/fa";
import { IconGrid } from "./IconGrid";

export function IconsGrid() {
   const GridMap = [
      {id:1,icon: <GiHealthPotion fontSize='3rem'/>, color:'datBlue', description:'Há 34 anos cuidando de você '},
      {id:2,icon: <GiSpiralBottle fontSize='3rem'/>, color:'datBlue', description:'Linha de tratamento com mais de 70 produtos'},
      {id:3,icon: <FaMoneyBillWave fontSize='3rem'/>, color:'datBlue', description:'Conquiste sua independência financeira'},
      {id:4,icon: <VscGraphLine fontSize='3rem'/>, color:'datBlue', description:'Margem de lucro de pelo menos 50%'},
      {id:5,icon: <RiCustomerService2Fill fontSize='3rem'/>, color:'datBlue', description:'Atendimento humanizado'},
      {id:6,icon: <FaHandHoldingUsd fontSize='3rem'/>, color:'datBlue', description:'Mais de 70.000 unidades vendidas por ano'},
      {id:7,icon: <IoMdStopwatch fontSize='3rem'/>, color:'datBlue', description:'Flexibilidade: seja você mesmo seu próprio chefe!'},
      {id:8,icon: <BiRocket fontSize='3rem'/>, color:'datBlue', description:'Campanhas e ações de vendas'},
   ]

   return (
      <Grid templateRows={['repeat(1,1fr)']} gap={8} bg='gray.100' p={[8,8,8,16,16]} alignItems='center'>

         <Grid gap={8} templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)','repeat(4,1fr)']} textAlign='center'> 
            {GridMap.map(item => {
               return (
                  <IconGrid key={item.id} icon={item.icon} color={item.color} description={item.description} />
            )})}
         </Grid>

      </Grid>
   )   
}