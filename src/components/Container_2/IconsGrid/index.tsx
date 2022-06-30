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
      {icon: <GiHealthPotion fontSize='3rem'/>, color:'white', description:'Há 35 anos cuidando de você '},
      {icon: <GiSpiralBottle fontSize='3rem'/>, color:'white', description:'Linha completa com mais de 70 produtos'},
      {icon: <FaMoneyBillWave fontSize='3rem'/>, color:'white', description:'Conquiste sua independência financeira'},
      {icon: <VscGraphLine fontSize='3rem'/>, color:'white', description:'Margem de lucro de pelo menos 50%'},
      {icon: <RiCustomerService2Fill fontSize='3rem'/>, color:'white', description:'Atendimento humanizado'},
      {icon: <FaHandHoldingUsd fontSize='3rem'/>, color:'white', description:'Mais de 70.000 unidades vendidas por ano'},
      {icon: <IoMdStopwatch fontSize='3rem'/>, color:'white', description:'Flexibilidade: seja você mesmo seu próprio chefe!'},
      {icon: <BiRocket fontSize='3rem'/>, color:'white', description:'Campanhas e ações de vendas'},
   ]

   return (
      <Grid templateRows={['repeat(1,1fr)']} gap={8} bg='gray.700' p={[8,8,8,16,16]} alignItems='center'>

         <Grid gap={8} templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)','repeat(4,1fr)']} textAlign='center'> 
            {GridMap.map(item => {
               return (
                  <IconGrid icon={item.icon} color={item.color} description={item.description} />
            )})}
         </Grid>

      </Grid>
   )   
}