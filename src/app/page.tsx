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
      <Box mt="24px" m="auto">
        <Flex direction="column" gap="4">
          <RankPairs />
          <Heading ml="20px" mt="20px">
            Available NFT Index
          </Heading>
          <Flex
            direction="row"
            wrap="wrap"
            mt="10px"
            gap="5"
            justifyContent="space-evenly"
          >
            {NFT_CONTRACTS.map((item) => (
              <Link
                _hover={{ textDecoration: "none" }}
                w={200}
                h={200}
                key={item.address}
                href={`/collection/${item.chain.id.toString()}/${item.address}`}
              >
                <Image src={item.thumbnailUrl} />
                <Text fontSize="large" mt="5px">
                  {item.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
