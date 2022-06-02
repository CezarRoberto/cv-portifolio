import { Flex, Heading } from '@chakra-ui/react';

import { motion } from 'framer-motion';
import ScrollIndicator from '../components/ScrollIndicator';

export default function Intro() {
  const MotionHeading = motion(Heading);
  return (
    <Flex flexDirection="column" w="full" height="85vh" justifyContent="center">
      <MotionHeading
        as="h3"
        color="primary"
        fontSize={['12px', '12px', '14px']}
        letterSpacing="wide"
        fontWeight="bold"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        FULL-STACK DEVELOPER
      </MotionHeading>
      <MotionHeading
        as="h1"
        fontSize={['38px', '54px', '74px']}
        letterSpacing="wide"
        mb={2}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5
        }}
      >
        Cezar Rodrigues
      </MotionHeading>
      <MotionHeading
        as="h2"
        fontSize={['14px', '18px', '20px']}
        letterSpacing="wide"
        fontWeight="normal"
        mb={20}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5 }}
      >
        Developing with React, Typescript, Next.js, Express, Docker & More
      </MotionHeading>
      <ScrollIndicator />
    </Flex>
  );
}