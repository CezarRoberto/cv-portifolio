import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../sections/Header'
import Intro from '../sections/Intro'

const Home: NextPage = () => {
  return (
    <Box maxW="1200px" margin="auto" px={8}>
      <Head>
        <title> Cezar Rodrigues - Full-Stack Developer</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Intro />
    </Box>
  )
}

export default Home
