import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Education from '../sections/Education'
import Experience from '../sections/Experience'
import Footer from '../sections/Footer'
import Header from '../sections/Header'
import Intro from '../sections/Intro'
import Project from '../sections/Project'

const Home: NextPage = () => {
  return (
    <Box maxW="1200px" margin="auto" px={8}>
      <Head>
        <title> Cezar Rodrigues - Full-Stack Developer</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Intro />
      <Experience />
      <Education />
      <Project />
      <Footer />
    </Box>
  )
}

export default Home
