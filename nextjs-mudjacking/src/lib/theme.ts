import { extendTheme } from '@chakra-ui/next-js'

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f3ff',
      100: '#b3d9ff',
      200: '#80bfff',
      300: '#4da6ff',
      400: '#1a8cff',
      500: '#4A90E2',
      600: '#3a73b8',
      700: '#2a568f',
      800: '#1a3966',
      900: '#0a1c3d',
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        orange: {
          bg: 'orange.500',
          color: 'white',
          _hover: {
            bg: 'orange.600',
          },
        },
      },
    },
  },
})