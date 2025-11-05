import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#1976d2' : '#90caf9' // blue / soft blue
      },
      secondary: {
        main: mode === 'light' ? '#9c27b0' : '#ce93d8' // purple / pinkish
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e'
      }
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
      h1: {
        fontSize: '2rem'
      }
    },
    spacing: 8, // 1 spacing unit = 8px
    shape: {
      borderRadius: 10
    }
  });
