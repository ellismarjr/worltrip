import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "100": "#F5F8FA",
      "300": "#DADADA",
      "500": "#999999",
      "900": "#47585B",
    }
  },
  fonts: {
    heanding: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      }
    }
  }
});