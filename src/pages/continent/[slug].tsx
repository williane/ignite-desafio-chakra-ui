import { Box, Flex, Grid, Heading, Image, GridItem, Text, Tooltip, Icon } from '@chakra-ui/react';
import { FiAlertCircle } from 'react-icons/fi';
import { BannerContinent } from '../../components/BannerContinent';
import { Header } from '../../components/Header';


export default function Continent() {
    return (
        <Flex direction="column">
          <Header />
          <BannerContinent />

          <Flex
            mx="auto"
            w="100%"
            maxWidth="1160px"
            p="4"
            my={10}
          >
            <Grid
                w="100%"
                templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
                gap={4}
            >
                <GridItem textAlign="justify">
                    <Text>
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                </GridItem>
                <GridItem>
                    <Flex justifyContent="space-around">
                        <Box textAlign="center">
                            <Heading color="yellow.600">50</Heading>
                            <Text fontWeight="700">países</Text>
                        </Box>
                        <Box textAlign="center">
                            <Heading color="yellow.600">60</Heading>
                            <Text fontWeight="700">línguas</Text>
                        </Box>
                        <Box textAlign="center">
                            <Heading color="yellow.600">27</Heading>
                            <Tooltip label="27 das Cidades mais visitadas do mundo">
                            <Text fontWeight="700">cidades +100 <Icon as={FiAlertCircle} /></Text>
                            </Tooltip>
                            
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
          </Flex>
          <Flex
            mx="auto"
            w="100%"
            maxWidth="1160px"
            p="4"
            direction="column"
          >
            <Box mb={8}>
                <Heading as="h1" fontSize="xl">Cidades +100</Heading>
            </Box>
            <Box>
                <Grid
                    templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
                    gap={4}
                    alignItems="center"
                    justifyContent="center"
                    px={8}
                >
                    <GridItem>
                        <Box borderRadius="4px" overflow="hidden">
                            <Image src="/londres.jpg" h="170px" w="100%" />
                            <Flex p="6" align="center" justify="space-between" bg="white">
                                <Flex direction="column">
                                    <Heading fontSize="xl" fontWeight="500">Londres</Heading>
                                    <Text mt="3" fontSize="md" color="gray.500">Reino Unido</Text>
                                </Flex>
                                <Image src='/reino-unido.png' w="30px" h="30px" borderRadius="50%" objectFit="cover" />
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box borderRadius="4px" overflow="hidden">
                            <Image src="/londres.jpg" h="170px" w="100%" />
                            <Flex p="6" align="center" justify="space-between" bg="white">
                                <Flex direction="column">
                                    <Heading fontSize="xl" fontWeight="500">Londres</Heading>
                                    <Text mt="3" fontSize="md" color="gray.500">Reino Unido</Text>
                                </Flex>
                                <Image src='/reino-unido.png' w="30px" h="30px" borderRadius="50%" objectFit="cover" />
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box borderRadius="4px" overflow="hidden">
                            <Image src="/londres.jpg" h="170px" w="100%" />
                            <Flex p="6" align="center" justify="space-between" bg="white">
                                <Flex direction="column">
                                    <Heading fontSize="xl" fontWeight="500">Londres</Heading>
                                    <Text mt="3" fontSize="md" color="gray.500">Reino Unido</Text>
                                </Flex>
                                <Image src='/reino-unido.png' w="30px" h="30px" borderRadius="50%" objectFit="cover" />
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box borderRadius="4px" overflow="hidden">
                            <Image src="/londres.jpg" h="170px" w="100%" />
                            <Flex p="6" align="center" justify="space-between" bg="white">
                                <Flex direction="column">
                                    <Heading fontSize="xl" fontWeight="500">Londres</Heading>
                                    <Text mt="3" fontSize="md" color="gray.500">Reino Unido</Text>
                                </Flex>
                                <Image src='/reino-unido.png' w="30px" h="30px" borderRadius="50%" objectFit="cover" />
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box borderRadius="4px" overflow="hidden">
                            <Image src="/londres.jpg" h="170px" w="100%" />
                            <Flex p="6" align="center" justify="space-between" bg="white">
                                <Flex direction="column">
                                    <Heading fontSize="xl" fontWeight="500">Londres</Heading>
                                    <Text mt="3" fontSize="md" color="gray.500">Reino Unido</Text>
                                </Flex>
                                <Image src='/reino-unido.png' w="30px" h="30px" borderRadius="50%" objectFit="cover" />
                            </Flex>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
          </Flex>
        </Flex>
    );
}