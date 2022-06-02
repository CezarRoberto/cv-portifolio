import type { AppProps } from 'next/app'
import {ChakraProvider, extendTheme} from "@chakra-ui/react"

import "@fontsource/nunito"

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "#ffffff",
        bg: "#181818",
      },
    },
  },
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  colors: {
    bg: "#181818",
    primary: "#5E72EB",
    lightGray: "#3D3D3D",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider theme={theme}>
    <Component {...pageProps} />
    </ChakraProvider>
  )

}

export default MyApp
