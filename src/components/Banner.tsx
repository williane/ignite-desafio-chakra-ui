import { Box, Flex, Text, Heading, Image } from '@chakra-ui/react';

export function Banner() {
    return (
        <Box as="div" backgroundImage="url('/Background.png')" backgroundSize='cover' backgroundPosition={'center center'} h={335} w="100%">
            <Flex
                w="100%"
                maxWidth={1160}
                mx="auto"
                justifyContent="space-between"
            >
            <Flex direction="column" h={335} padding={4} justifyContent="center">
                <Heading as="h1" color='gray.150' mb={4}>5 Continentes, <br /> infinitas possibilidades.</Heading>
                <Text as="h3" fontSize="20px" color='gray.300'>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </Flex>
            <Flex direction="column" h={335} mt="70px">
                <Image boxSize="417px" objectFit='contain' src="/Airplane.png" display={['none', 'none', 'block']} />
            </Flex>
            </Flex>
        </Box>
    );
}