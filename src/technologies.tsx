import {
  Grid,
  GridItem,
  VStack,
  Image,
  Text,
  Box,
  BoxProps,
  TextProps,
} from "@chakra-ui/react";
import { technologies } from "./AllData";

import { AnimateSharedLayout, motion } from "framer-motion";

const Technologies = () => {
  const MotionBox = motion<BoxProps>(Box);
  return (
    <>
      <Grid
        templateColumns={{
          md: "repeat(3, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap={10}
      >
        {technologies.map((tech) => {
          return (
            <MotionBox whileHover={{ scale: 1.02 }}>
              <GridItem height="100%" p="5" bgColor="gray.900" rounded="xl">
                <VStack align={"start"}>
                  <Image
                    height={"50px"}
                    rounded={"2xl"}
                    objectFit={"cover"}
                    src={tech.images}
                  />
                  <Text fontSize={25} textColor="white">
                    {tech.techname}
                  </Text>
                  <Text textColor="white" fontSize={15}>
                    {tech.uses}
                  </Text>
                </VStack>
              </GridItem>
            </MotionBox>
          );
        })}
      </Grid>
    </>
  );
};

export default Technologies;
