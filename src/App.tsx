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
} from "@chakra-ui/react";
import React from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import Nav from "./navbar";
import { Box, type BoxProps } from "@chakra-ui/layout";

import { motion, AnimatePresence } from "framer-motion";
import Card from "./card";
import { WebsiteImages } from "./imageData";

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

  return (
    <>
      <Box bgColor={"black"}>
        <Box mb={14} bgColor={"black"}>
          <Flex onMouseEnter={() => setCounter(false)} bgColor={"transparent"}>
            <Container id="top" maxW={"7xl"} bgColor={"transparent"}>
              <Box
                zIndex={10}
                px={{ base: 0, md: 10 }}
                mt={counter == false ? "2%" : "0"}
                position={"fixed"}
                maxW={"7xl"}
                w={"full"}
              >
                <Nav counterIndex={counter} />
              </Box>

              <Container
                px={{ md: 10, base: 0 }}
                height={{ md: "xl", base: "lg" }}
                maxW={"7xl"}
              >
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
                    Design stunning <br />
                    interactive products
                    <br />
                    <Text
                      fontWeight={"semibold"}
                      opacity={0.5}
                      fontSize={{ base: "5xl", sm: "5xl", md: "7xl" }}
                    >
                      with your team
                    </Text>
                  </Heading>
                  <Button
                    variant={"solid"}
                    maxW={"230px"}
                    fontWeight={"semibold"}
                    fontSize={{ md: "lg", base: "md" }}
                    py={{ md: 7, base: 6 }}
                    bgColor={"white"}
                    rounded={"2xl"}
                  >
                    Get started - it's free
                  </Button>
                </Stack>
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
                          Websites
                        </Tab>

                        <Tab
                          _focus={{ boxShadow: "none" }}
                          ml={"10"}
                          p="0"
                          fontSize={{ md: "lg", base: "md" }}
                          fontWeight={"semibold"}
                          textColor={"gray.400"}
                          _selected={{ color: "white" }}
                        >
                          Apps
                        </Tab>
                      </TabList>
                    </Tabs>
                    <Spacer />
                    <Button
                      as={"a"}
                      fontSize={{ md: "lg", base: "md" }}
                      fontWeight={"semibold"}
                      variant={"link"}
                      href={"#"}
                      textColor={"gray.400"}
                    >
                      Open hall of Web
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
                        {/* <Grid
                          templateColumns={{
                            md: "repeat(2, 1fr)",
                            base: "repeat(1, 1fr)",
                          }}
                          gap={10}
                        >
                          <GridItem>
                            <Card
                              imageLink={
                                "https://cdn.dribbble.com/users/3636379/screenshots/17474202/media/7f91ede84ee77ec384dd2de4f3afa063.png?compress=1&resize=1"semibold"x1200&vertical=top"
                              }
                            />
                          </GridItem>
                          <GridItem>
                            <Card
                              imageLink={
                                "https://cdn.dribbble.com/users/7072315/screenshots/17470913/media/e1418615313d76feebba92a9b815af80.png?compress=1&resize=1"semibold"x1200&vertical=top"
                              }
                            />
                          </GridItem>
                          <GridItem>
                            <Card
                              imageLink={
                                "https://cdn.dribbble.com/users/7412964/screenshots/17480970/media/10cc49cd53435fd468355d79b02b656b.png?compress=1&resize=1"semibold"x1200&vertical=top"
                              }
                            />
                          </GridItem>
                          <GridItem>
                            <Card
                              imageLink={
                                "https://cdn.dribbble.com/users/2080514/screenshots/17471821/media/71bc61b2d3a7c7382993bfb79ba420e3.jpg?compress=1&resize=1"semibold"x1200&vertical=top"
                              }
                            />
                          </GridItem>
                        </Grid> */}
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
                      </Center>
                    </Box>
                  </HStack>
                </VStack>
              </Flex>
            </Container>
          </Flex>
        </Box>
        <Flex bgColor={"white"}>
          <Container p={{ md: 14, base: 5 }} maxW={"7xl"} bgColor={"gray"}>
            <Stack as={Box} textAlign={"left"} spacing={{ base: 8, md: 14 }}>
              <Heading
                fontWeight={"semibold"}
                textColor="black"
                fontSize={{ base: "5xl", sm: "5xl", md: "7xl" }}
                // lineHeight={"110%"}
              >
                I have Experience <br />
                in working with these
                <br />
              </Heading>
            </Stack>
            <Grid
              templateColumns={{
                md: "repeat(2, 1fr)",
                base: "repeat(1, 1fr)",
              }}
              gap={4}
            >
              <GridItem>
                <MotionBox
                  w={{ md: "2xl", base: "full" }}
                  rounded="3xl"
                  bgColor="red.300"
                >
                  <Image
                    rounded={"2xl"}
                    objectFit={"cover"}
                    // height={{ md: "2xl", base: "xs" }}
                    src={WebsiteImages[index]}
                  />
                </MotionBox>
              </GridItem>
              <GridItem></GridItem>
            </Grid>
          </Container>
        </Flex>
        <Button
          as="a"
          href={"#top"}
          position={"fixed"}
          rounded="full"
          bottom={"10"}
          right={"10"}
        >
          <ArrowUpIcon my="2px" />
        </Button>
      </Box>
    </>
  );
}
