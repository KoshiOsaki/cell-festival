import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: '0px 0px 0px 2px #色の指定',
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          _focus: {
            boxShadow: '0px 0px 0px 3px #色の指定',
          },
        },
      },
    },
    Radio: {
      baseStyle: {
        control: {
          _focus: {
            boxShadow: '0px 0px 0px 3px #色の指定',
          },
        },
      },
    },
  },
});

export default theme;
