import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'gray.800',
      },
      '.md': {
        h2: {
          fontSize: '1.75em',
          lineHeight: '1.225',
          position: 'relative',
          padding: '0.6em',
          background: '#c7f2e3',
          mb: '4',
        },
        p: {
          fontSize: 'sm',
          lineHeight: '1.4',
        },
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
