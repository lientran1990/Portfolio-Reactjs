import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Link } from "@chakra-ui/layout";
import FullScreenSection from "./FullScreenSection";

const XCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card>
      <CardBody borderRadius="lg" padding={0}>
        <Image src={imageSrc} borderRadius="lg" />
        <VStack
          padding={"20px"}
          bg="white"
          mt="6"
          spacing="3"
          alignItems="flex-start"
        >
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <Link>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default XCard;
