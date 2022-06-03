import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import Arrow from "../components/Arrow";
import Job from "../components/Job";

export default function Experience() {
  return (
    <Box textAlign="center" maxW="550px" margin="auto" mb="200px">
      <Heading as="h2" fontSize="x-large" mb={6}>
        Experience
      </Heading>
      <Text mb={20} fontSize={["12px", "14px"]}>
      Full-Stack Developer specialising in React and Node.js. Available to work with the modern versions of the library with a deep knowledge of manipulating javascript and storage data.
      Experienced with a variety of libraries, tools and frameworks for render http request, manage RESTful and dealing with storage data and autmated testing. Also, have experience to deploy and 
      work with coitainer using docker
      </Text>
      <VStack w="100%" spacing="30px">
        <Job
          title="UEMA Intership"
          timePeriod="MAR 2019 TO PRESENT"
          description="Part of a team developing a website using platforms such as WordPress for interfaces and developed a API REST to manage a mobile app used for the institution"
        />
        <Arrow />
        <Job
          title="Back-End Chat2Desk"
          timePeriod="FEB 2022 TO PRESENT"
          description="Working with a team developing and management a API that uses externals api such as MetaAPI Developer to help our clients reaching their goals and improve their productiviy"
        /> 
      </VStack>
    </Box>
  );
}