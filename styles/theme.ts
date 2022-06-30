import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  
   fonts: {
      heading: 'Heebo',
      body: 'Heebo',
   },
   colors: {
      datKidBlue: "#516BA5",
      datGreen:"#b8d432",
      datGray: "#d1d3d4",
      datBlue:"#2596be",
      datCyan:"#28bec7",
      datBlack:"#333030",
   },
   styles: {
     global: {
       // styles for the `body`
        body: {
          bgColor:'gray.700',
          color: 'gray.900',
          },
       // styles for the `a`
        a: {
          // color: 'teal.500',
          _hover: {
            textDecoration: 'none',
          },
        },
     },
   },
 })