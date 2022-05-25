import { Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa';

interface TravelTypeProps {
    icon: string;
    text: string;
    title: string;
}

export function TravelType({ icon, text, title }: TravelTypeProps) {
    const isMobile = useBreakpointValue({
        base: false,
        md: true
    });

    return (
        <Flex direction={['row', 'row', 'column']} align="center" justify="center">
          { isMobile ? <Image src={icon} title={title} mx="auto" /> : <Icon as={FaCircle} color='#FFBA08' mx={2} /> }
          <Text fontSize="24px" fontWeight="500">{text}</Text>
        </Flex>
    );
}