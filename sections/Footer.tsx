import {
    Box,
    Heading,
    Link,
    Text,
    Flex,
    Divider,
    Icon,
  } from "@chakra-ui/react";
  import {FaLinkedin, FaGithubSquare, FaTwitter } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <Box textAlign="center">
        <Heading as="h2" fontSize="x-large" mb={20}>
          Want to get in touch?
        </Heading>
        <Text fontSize="14px">
          Feel free to drop me an email -{" "}
          <Link color="primary" href="mailto:cezarrobertorodrigues50@gmail.com">
            cezarrobertorodrigues50@gmail.com
          </Link>
        </Text>
        <Divider
          w={["120px", "280px"]}
          my={20}
          mx="auto"
          orientation="horizontal"
        />
        <Flex w="200px" mx="auto" justify="space-between" mb={20}>
          <Link
            href="https://twitter.com/cez_rodrigues"
            target="_blank"
          >
            <Icon
              as={FaTwitter}
              cursor="pointer"
              _hover={{ color: "primary" }}
              transition="0.3s ease-out"
              h="25px"
              w="25px"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/c%C3%A9zar-rodrigues-538653211"
            target="_blank"
          >
            <Icon
              as={FaLinkedin}
              cursor="pointer"
              _hover={{ color: "primary" }}
              transition="0.3s ease-out"
              h="25px"
              w="25px"
            />
          </Link>
          <Link href="https://github.com/CezarRoberto" target="_blank">
            <Icon
              as={FaGithubSquare}
              cursor="pointer"
              _hover={{ color: "primary" }}
              transition="0.3s ease-out"
              h="25px"
              w="25px"
            />
          </Link>
        </Flex>
      </Box>
    );
  }