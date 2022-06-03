import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import EducationCard from "../components/EducationCard";


export default function Education() {
  return (
    <Box textAlign="center" maxW="550px" margin="auto" mb="200px">
      <Heading as="h2" fontSize="x-large" mb={6}>
        Education
      </Heading>
      <Text mb={20} fontSize={["12px", "14px"]}>
        Where and when I have studied to achieved my qualifications
      </Text>
      <VStack maxW="600px" w="100%" spacing="60px" margin="auto">
        <EducationCard
          uni="State University Of Maranhão"
          course="Bachelor of Computer Engineer"
          grade="1st Class"
          timePeriod="Feb 2018 - Nov 2023"
          status="Not completed"
        />
        <EducationCard
          uni="ICBEU - English Course"
          course="Learn to speak English"
          grade="1st Class"
          timePeriod="Feb 2007 - June 2017"
          status="Completed"
        />
      </VStack>
    </Box>
  );
}