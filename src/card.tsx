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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";
import { WebsiteImages } from "./AllData";

function Card({ imageLink }: { imageLink: any }) {
  const MotionBox = motion<BoxProps>(Box);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef();
  const cryptlertImgs = [
    {
      img: "https://github.com/Raunak-Taabish/crypto_alert/blob/main/lib/home.jpg?raw=true",
    },
    {
      img: "https://github.com/Raunak-Taabish/crypto_alert/blob/main/lib/crypto.jpg?raw=true",
    },
    {
      img: "https://github.com/Raunak-Taabish/crypto_alert/blob/main/lib/alerts.jpg?raw=true",
    },
    {
      img: "https://github.com/Raunak-Taabish/crypto_alert/blob/main/lib/news.jpg?raw=true",
    },
  ];

  return (
    <>
      <MotionBox
        cursor={"pointer"}
        rounded="3xl"
        w={{ base: "full" }}
        height={{ md: "xl", base: "xs" }}
        bgColor="transparent"
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.02 }}
        onClick={onOpen}
      >
        <Image
          alt="click to open"
          objectFit={"cover"}
          rounded="3xl"
          w={{ md: "xl", base: "full" }}
          height={{ md: "xl", base: "xs" }}
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
          <ModalHeader py="3">
            {/* <Button maxW={"xl"} rounded={"3xl"} py={3} variant="ghost">
              visit website <ExternalLinkIcon mx="2px" />
            </Button> */}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody p="0">
            <Flex flex={1} justifyContent="center">
              <VStack>
                {imageLink ==
                "https://github.com/Raunak-Taabish/crypto_alert/blob/main/lib/home.jpg?raw=true" ? (
                  <Grid
                    templateColumns={{
                      md: "repeat(4, 1fr)",
                      base: "repeat(2, 1fr)",
                    }}
                    gap={{ md: 10, base: 2 }}
                  >
                    {cryptlertImgs.map((img) => {
                      console.log(img.img);
                      return (
                        <GridItem>
                          <Image
                            // position={"center"}
                            objectFit={"cover"}
                            rounded="xl"
                            height={{ md: "xl", base: "xs" }}
                            src={img.img}
                          />
                        </GridItem>
                      );
                    })}
                  </Grid>
                ) : (
                  <Image
                    // position={"center"}
                    objectFit={"cover"}
                    rounded="xl"
                    height={{ md: "xl", base: "xs" }}
                    src={imageLink}
                  />
                )}
                <Box bg="blue" color="white" maxW="5xl" w="5xl">
                  hello
                </Box>
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Card;
