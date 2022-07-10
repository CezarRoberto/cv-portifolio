import { Box, Heading, Text, SimpleGrid, Link } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
export default function Projects() {
  return (
    <Box mb="120px" textAlign="center">
      <Heading as="h2" fontSize="x-large" mb={6}>
        My Projects
      </Heading>
      <Text fontSize={["12px", "14px"]} maxW="600px" margin="auto" mb={20}>
        Some projects I've been working on recently.
      </Text>
      <SimpleGrid columns={[1, 1, 3]} spacing="30px">
        <ProjectCard
          title="Bank API System"
          description="Bank API deployed on Heroku which can be used to create companies, clients and transactions"
          githubLink="https://github.com/CezarRoberto/BankSystem"
          demoLink="https://bank-system5.herokuapp.com/api-docs/"
          technologies={["Node.Js", "Express", "Typescript", "Prisma", "Docker"]}
        />
        <ProjectCard
          title="WebAgency - Landing Page"
          description="A project cloning a designed figma to create a landing page"
          githubLink="https://github.com/CezarRoberto/Web-Agency"
          demoLink="https://web-agency-lake.vercel.app"
          technologies={["Chakra Ui", "Next.js", "Typescript"]}
        />
        <ProjectCard
          title="Championship API - Games and Teams"
          description="A project to manage and create championships that gives random winner"
          githubLink="https://github.com/CezarRoberto/championship"
          demoLink="https://github.com/CezarRoberto/championship"
          technologies={["Node.Js", "Prisma", "Typescript", "Docker"]}
        />
      </SimpleGrid>
      <Box mt={3} textAlign="right" fontSize="12px" fontWeight="bold">
        <Link href="https://github.com/CezarRoberto" target="_blank">
          View more on Github {">"}
        </Link>
      </Box>
    </Box>
  );
}