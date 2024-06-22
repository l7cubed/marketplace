"use client";

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import RankPairs from "@/components/RankPairs";

export default function Home() {
  return (
    <Flex>
      <Box mt="2px" m="auto">
        <Flex direction="column" gap="1">
          <RankPairs />
        </Flex>
      </Box>
    </Flex>
  );
}
