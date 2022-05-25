import { Flex, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
    const { asPath } = useRouter();
    const notHomePage = asPath !== '/';

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1160}
            h={100 }
            mx="auto"
            alignItems="center"
        >
            { notHomePage &&
            <Link href="/">
                <a>
                    <Icon as={RiArrowLeftSLine} fontSize="32px" />
                </a>
            </Link> }
           <Image src="/Logo.png" width={184} height={45} mx="auto" />
        </Flex>
    );
}