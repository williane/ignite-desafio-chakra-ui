import { Box, Flex, Heading } from '@chakra-ui/react';

export function BannerContinent() {
    return (
        <Box as="div"
            backgroundImage="url('/BannerEuropa.png')"
            backgroundSize='cover'
            backgroundPosition={'center center'}
            w="100%"
            h={['150px', '150px', '500px']}
        >
            <Flex
                w="100%"
                h="100%"
                maxWidth={1160}
                mx="auto"
                direction="column"
                justifyContent={["center", "center", "end"]}
                alignItems={["center", "center", "start"]}
            >
                <Heading as="h1"
                    color='gray.150'
                    fontWeight={500}
                    mb={[0, 0, "60px"]}
                    px={10}
                    >
                    Europa
                </Heading>
            </Flex>
        </Box>
    );
}