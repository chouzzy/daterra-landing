import {AppProps} from 'next/app'
import {ChakraProvider, extendTheme, Heading} from '@chakra-ui/react'

import { theme } from '../../styles/theme'
import { Global } from '@emotion/react'
// import Fonts from './Fonts'


function MyApp({Component, pageProps}: AppProps) {
   return (
      
      <>
         <ChakraProvider theme={theme}>
         <Global
            styles={`
               /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */

               /* latin */
               @font-face {
                  font-family: 'Andes';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('fonts/AndesBook.woff2') format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               @font-face {
                  font-family: 'Andes';
                  font-style: normal;
                  font-weight: 600;
                  font-display: swap;
                  src: url('fonts/AndesMedium.woff2') format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               @font-face {
                  font-family: 'Andes';
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                  src: url('fonts/AndesBold.woff2') format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               `} />
            <Component {...pageProps}/>
         </ChakraProvider>
      </>
   ) 
}

export default MyApp