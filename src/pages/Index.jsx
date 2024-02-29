import React from "react";
import { Box, Container, Heading, Text, UnorderedList, ListItem, Code, Divider, Image, Button, Link } from "@chakra-ui/react";
import { FaRocket, FaBook, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={4} textAlign="center">
        GPT-Engineer Installation Guide
      </Heading>
      <Image src="https://images.unsplash.com/photo-1702360600584-f0b358502192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGluc3RhbGxhdGlvbnxlbnwwfHx8fDE3MDkyMTQyNTV8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={6} />

      <Text fontSize="lg" mb={4}>
        Follow these steps to get started with GPT-Engineer and deploy your first project.
      </Text>

      <Heading size="md" mb={2}>
        Prerequisites
      </Heading>
      <UnorderedList mb={4}>
        <ListItem>Ensure you have the latest version of Node.js and npm installed.</ListItem>
        <ListItem>Basic knowledge of command line operations and JavaScript.</ListItem>
        <ListItem>Access to a terminal or command prompt.</ListItem>
      </UnorderedList>

      <Heading size="md" mb={2}>
        Installation Steps
      </Heading>
      <UnorderedList mb={4}>
        <ListItem>
          Open your terminal and run <Code>npm install -g gpt-engineer</Code>
        </ListItem>
        <ListItem>
          Verify the installation by running <Code>gpt-engineer --version</Code>
        </ListItem>
        <ListItem>
          Create a new project by running <Code>gpt-engineer init my-first-project</Code>
        </ListItem>
        <ListItem>
          Navigate into your project with <Code>cd my-first-project</Code>
        </ListItem>
        <ListItem>
          Install project dependencies by running <Code>npm install</Code>
        </ListItem>
      </UnorderedList>

      <Heading size="md" mb={2}>
        Deployment
      </Heading>
      <UnorderedList mb={4}>
        <ListItem>
          Build your project by running <Code>npm run build</Code>
        </ListItem>
        <ListItem>
          Deploy your project using <Code>npm run deploy</Code> or your preferred deployment service.
        </ListItem>
      </UnorderedList>

      <Divider my={6} />

      <Box textAlign="center">
        <Heading size="md" mb={2}>
          Need Help?
        </Heading>
        <Text mb={4}>Check out the documentation or reach out to the community for support.</Text>
        <Button leftIcon={<FaBook />} colorScheme="teal" mr={2}>
          Documentation
        </Button>
        <Button as={Link} href="https://github.com" isExternal leftIcon={<FaGithub />} colorScheme="gray">
          Github Repo
        </Button>
      </Box>

      <Box textAlign="center" mt={10}>
        <Button rightIcon={<FaRocket />} colorScheme="blue" size="lg">
          Deploy your first project
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
