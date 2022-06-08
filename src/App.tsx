// import Head from "next/head";
import {
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  createIcon,
  Spacer,
  Center,
  Image,
  Tab,
  TabList,
  Tabs,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import Nav from "./navbar";
import { Box, type BoxProps } from "@chakra-ui/layout";

import { motion, AnimatePresence } from "framer-motion";
import Card from "./card";
import { WebsiteImages } from "./AllData";
import Technologies from "./technologies";

export default function App() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [counter, setCounter] = React.useState(false);
  const MotionBox = motion<BoxProps>(Box);
  const [selected, setSelected] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  setTimeout(() => {
    changeIndex();
  }, 5000);
  function changeIndex() {
    index < 3 ? setIndex(index + 1) : setIndex(0);
  }
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");
  return (
    <>
      <Box bgColor={"black"}>
        <Box mb={14} bgColor={"black"}>
          <Flex onMouseEnter={() => setCounter(false)} bgColor={"transparent"}>
            <Container
              px={{ md: 0, base: 0 }}
              id="top"
              maxW={"7xl"}
              bgColor={"black"}
            >
              <Box
                zIndex={10}
                px={{ base: 0, md: 10 }}
                mt={{ md: counter == false ? "2%" : "0", base: "0" }}
                position={"fixed"}
                maxW={"7xl"}
                w={"full"}
              >
                <Nav counterIndex={counter} />
              </Box>

              <Container
                px={{ md: 10, base: 5 }}
                height={{ md: "xl", base: "lg" }}
                maxW={"7xl"}
              >
                <HStack spacing={10}>
                  <Stack
                    as={Box}
                    textAlign={"left"}
                    spacing={{ base: 8, md: 14 }}
                    pt={{ base: 20, md: "12%" }}
                  >
                    <Heading
                      fontWeight={"semibold"}
                      textColor="white"
                      fontSize={{ base: "5xl", sm: "5xl", md: "7xl" }}
                      // lineHeight={"110%"}
                    >
                      Raunak Singh
                      {/* <br />
                      interactive products */}
                      <br />
                      <Text
                        fontWeight={"semibold"}
                        opacity={0.5}
                        fontSize={{ base: "5xl", sm: "5xl", md: "7xl" }}
                      >
                        Designer {"&"} <br></br> Front-end Developer
                      </Text>
                    </Heading>
                    <Grid
                      width="30%"
                      templateColumns={{
                        md: "repeat(2, 1fr)",
                        base: "repeat(2, 1fr)",
                      }}
                      gap={{ md: 0, base: 2 }}
                    >
                      <GridItem>
                        <Button
                          variant={"solid"}
                          maxW={"150px"}
                          fontWeight={"semibold"}
                          fontSize={{ md: "lg", base: "md" }}
                          py={{ md: 7, base: 6 }}
                          bgColor={"white"}
                          rounded={"2xl"}
                        >
                          View all work
                        </Button>
                      </GridItem>
                      <GridItem>
                        <Button
                          variant={"solid"}
                          maxW={"150px"}
                          fontWeight={"semibold"}
                          fontSize={{ md: "lg", base: "md" }}
                          py={{ md: 7, base: 6 }}
                          bg={"black"}
                          rounded={"2xl"}
                          color={"white"}
                          _hover={{ bg: "white", color: "black" }}
                        >
                          Resume
                        </Button>
                      </GridItem>
                    </Grid>
                  </Stack>
                  <Image
                    hidden={isLargerThan400 ? false : true}
                    top={55}
                    color={"blue"}
                    width={"sm"}
                   rounded={"full"}
                    verticalAlign={"center"}
                    position={"relative"}
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQF7yBvK2__dMw/profile-displayphoto-shrink_800_800/0/1648180138251?e=1660176000&v=beta&t=QrddHDaiqsMTqLRn3zzAHN1jr6DsYx0LHaFcA8fjLfM"
                  ></Image>
                </HStack>
              </Container>
            </Container>
          </Flex>
          <Flex
            onMouseEnter={() => setCounter(true)}
            mt={"3%"}
            bgColor={"transparent"}
          >
            <Container
              maxW={"7xl"}
              px={{ base: 4, md: 14 }}
              bgColor={"transperant"}
            >
              <Flex flex={1} justifyContent={"center"}>
                <VStack width={"full"}>
                  <HStack width={"full"}>
                    <Tabs
                      onChange={(index) => setTabIndex(index)}
                      variant="unstyled"
                    >
                      <TabList>
                        <Tab
                          _focus={{ boxShadow: "none" }}
                          p="0"
                          fontSize={{ md: "lg", base: "md" }}
                          fontWeight={"semibold"}
                          textColor={"gray.400"}
                          _selected={{ color: "white" }}
                        >
                          Apps
                        </Tab>

                        <Tab
                          _focus={{ boxShadow: "none" }}
                          ml={{ md: "10", base: "5" }}
                          p="0"
                          fontSize={{ md: "lg", base: "md" }}
                          fontWeight={"semibold"}
                          textColor={"gray.400"}
                          _selected={{ color: "white" }}
                        >
                          Websites
                        </Tab>
                      </TabList>
                    </Tabs>
                    <Spacer />
                    <Button
                      textDecoration={"underline"}
                      as={"a"}
                      fontSize={{ md: "lg", base: "md" }}
                      fontWeight={"semibold"}
                      variant={"link"}
                      href={"#"}
                      textColor={"gray.400"}
                    >
                      {tabIndex == 0 ? "Show all Websites" : "show all Apps"}
                    </Button>
                  </HStack>
                  <HStack width={"full"} pb={"5"} bgColor="transparent">
                    <Box
                      mt={{ md: "1%", base: "5%" }}
                      width={"full"}
                      bgColor="transparent"
                      // height={{ md: "2xl", base: "xs" }}
                      flex={1}
                      rounded={"2xl"}
                    >
                      <Center>
                        {tabIndex == 0 ? (
                          <Grid
                            templateColumns={{
                              md: "repeat(2, 1fr)",
                              base: "repeat(2, 1fr)",
                            }}
                            gap={{ md: 10, base: 2 }}
                          >
                            <GridItem>
                              <Card imageLink={WebsiteImages[0]} />
                            </GridItem>
                            <GridItem>
                              <Card imageLink={WebsiteImages[1]} />
                            </GridItem>
                            <GridItem>
                              <Card imageLink={WebsiteImages[2]} />
                            </GridItem>
                            <GridItem>
                              <Card imageLink={WebsiteImages[3]} />
                            </GridItem>
                          </Grid>
                        ) : (
                          <MotionBox
                            w="full"
                            height={{ md: "2xl", base: "xs" }}
                            animate={{ x: 0 }}
                            initial={{ x: -10 }}
                            // transition={{ duration: "0.3" }}
                          >
                            <Image
                              rounded={"2xl"}
                              w="full"
                              objectFit={"cover"}
                              height={{ md: "2xl", base: "xs" }}
                              src={WebsiteImages[index]}
                            />
                          </MotionBox>
                        )}
                      </Center>
                    </Box>
                  </HStack>
                </VStack>
              </Flex>
            </Container>
          </Flex>
        </Box>
        <Flex bgColor={"black"}>
          <Container p={{ md: 14, base: 5 }} maxW={"7xl"} bgColor={"black"}>
            <Stack as={Box} textAlign={"left"} spacing={{ base: 8, md: 14 }}>
              <Heading
                fontWeight={"semibold"}
                textColor="white"
                fontSize={{ base: "5xl", sm: "5xl", md: "7xl" }}
              >
                I have worked with
                <br />
              </Heading>
              <Technologies />
            </Stack>
          </Container>
        </Flex>
        <Button
          as="a"
          href={"#top"}
          position={"fixed"}
          rounded="full"
          bottom={{ md: "10", base: "2" }}
          right={{ md: "10", base: "2" }}
        >
          <ArrowUpIcon my="2px" />
        </Button>
      </Box>
    </>
  );
}
