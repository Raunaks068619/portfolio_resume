import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import {
  Box,
  BoxProps,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  TextProps,
  useDisclosure,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Center,
  Image,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";

function Card({ imageLink }: { imageLink: any }) {
  const MotionBox = motion<BoxProps>(Box);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef();

  return (
    <>
      <MotionBox
        // cursor={"pointer"}
        //onClick={}
        rounded="3xl"
        w={{ md: "xl", base: "full" }}
        height={{ md: "md", base: "xs" }}
        bgColor="white"
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.02 }}
        onClick={onOpen}
      >
        <Image
          objectFit={"cover"}
          rounded="3xl"
          w={{ md: "xl", base: "full" }}
          height={{ md: "md", base: "xs" }}
          src={imageLink}
        />
      </MotionBox>

      <Modal
        size={"full"}
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent m={5} rounded={"3xl"}>
          <ModalHeader textAlign={"center"} py="0">
            <Button maxW={"xl"} rounded={"3xl"} py={3} variant="ghost">
              visit website <ExternalLinkIcon mx="2px" />
            </Button>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody p="0">
            <Flex>
              <VStack>
                <Image
                  objectFit={"cover"}
                  rounded="3xl"
                  w={"full"}
                  src={imageLink}
                />
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Card;
