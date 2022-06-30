import { useDisclosure, Box, Button, Collapse, useBreakpointValue, Grid, GridItem, Image, Heading, Text, VStack, Flex, Link, HStack} from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

import { RiWhatsappFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";

export function SocialMedia(media_content) {
   return (
      <>
         <Link href={media_content.mediaLink}  _hover={{textDecoration:'none'}}>
               <Text color={media_content.color} _hover={{color:'datGreen', transition:'360ms'}} textAlign='center'>
                  {media_content.icon}
               </Text>
         </Link>
      </>
      )}