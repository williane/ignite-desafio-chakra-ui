import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            150: '#F5F8FA',
            300: '#DADADA',
            600: '#999999',
            700: '#47585B',
        },
        yellow: {
            600: '#FFBA08'
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: '#F5F8FA',
                color: 'gray.700'
            }
        }
    }
});