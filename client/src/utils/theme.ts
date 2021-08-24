import { createTheme } from '@material-ui/core/styles';

// TODO: configure material theme
const theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    type: 'dark',
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    grey: {
      50: '#F7F7F7',
      100: '#F2F2F2',
      200: '#D8D8D8',
      300: '#9F9F9F',
      400: '#737273',
      500: '#787678',
      600: '#5E5D5E',
      700: '#464546',
      800: '#2E2D2E',
      900: '#141414',
    },
    primary: {
      light: '#262626', // 100
      main: '#1D1D1D', // 400
      dark: '#030303', // 800
      contrastText: '#F7F7F7',
      50: '#292929',
      100: '#262626',
      200: '#232323',
      300: '#202020',
      400: '#1D1D1D',
      500: '#1B1B1B',
      600: '#090909',
      700: '#060606',
      800: '#030303',
      900: '#000000',
    },
    secondary: {
      light: '#89a2d8',
      main: '#5974A6',
      dark: '#294977',
      contrastText: '#F7F7F7',
    },
    error: {
      light: '#BB6D6F',
      main: '#A64E50',
      dark: '#843E40',
      contrastText: '#F7F7F7',
    },
    warning: {
      light: '#D6A55C',
      main: '#CC8E33',
      dark: '#A37229',
      contrastText: '#F7F7F7',
    },
    info: {
      light: '#6178AD',
      main: '#4A5F8F',
      dark: '#394A6F',
      contrastText: '#F7F7F7',
    },
    success: {
      light: '#50A58A',
      main: '#3F826D',
      dark: '#2F6051',
      contrastText: '#F7F7F7',
    },
    text: {
      primary: 'rgba(247, 247, 247, 1)',
      secondary: 'rgba(247, 247, 247, 0.6)',
      disabled: 'rgba(247, 247, 247, 0.4)',
      hint: 'rgba(247, 247, 0.4)',
    },
    divider: 'rgba(247, 247, 247, 0.2)',
    background: {
      default: '#121212',
      paper: '#FAFAFA',
    },
    action: {
      active: 'rgba(247, 247, 247, 0.54)',
      hover: 'rgba(247, 247, 247, 0.4)',
      hoverOpacity: 0.04,
      selected: 'rgba(247, 247, 247, 0.08)',
      selectedOpacity: 0.08,
      focus: 'rgba(247, 247, 247, 0.12)',
      focusOpacity: 0.12,
      disabled: 'rgba(247, 247, 247, 0.26)',
      disabledOpacity: 0.12,
      disabledBackground: 'rgba(247, 247, 247, 0.12)',
      activatedOpacity: 0.12,
    },
  },
  shadows: [
    'none',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 4px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 6px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 8px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 10px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 2px 12px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 2px 14px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 2px 16px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 2px 18px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 2px 20px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 2px rgba(0, 0, 0, 0.12)',
  ],
  typography: {
    // Global Font Styles
    fontFamily: [
      'Raleway',
      '"Titillium Web"',
      '"GFS Orpheus Sans"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    htmlFontSize: 16,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // Individual Font Styles for each element
    h1: {
      fontFamily: '"Titillium Web" ,"Roboto", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '4rem',
      lineHeight: '6rem',
      '@media (max-width:960px) and (min-width:600px)': {
        fontSize: '3.5rem',
        lineHeight: '5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
        lineHeight: '3.5rem',
      },
    },
    h2: {
      fontFamily: '"Titillium Web" ,"Roboto", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: '4rem',
      '@media (max-width:960px) and (min-width:600px)': {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
        lineHeight: '2rem',
      },
    },
    h3: {
      fontFamily: '"Raleway" ,"Roboto", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '2.5rem',
      lineHeight: '3.5rem',
      '@media (max-width:960px) and (min-width:600px)': {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
        lineHeight: '2.5rem',
      },
    },
    h4: {
      fontFamily: '"Titillium Web" ,"Roboto", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '2.5rem',
      lineHeight: '3.5rem',
      '@media (max-width:960px) and (min-width:600px)': {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
        lineHeight: '2.5rem',
      },
    },
    // Regular Body
    body1: {
      fontFamily: '"GFS Orpheus Sans" ,"Roboto", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      '@media (max-width:960px) and (min-width:600px)': {
        fontSize: '1.125rem',
        lineHeight: '1.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1rem',
        lineHeight: '1.25rem',
      },
    },
    // MetaData
    body2: {
      fontFamily: '"GFS Orpheus Sans" ,"Roboto", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: '1.25rem',
      '@media (max-width:960px) and (min-width:600px)': {
        fontSize: '1rem',
        lineHeight: '1.125rem',
      },
      '@media (max-width:600px)': {
        fontSize: '0.85rem',
        lineHeight: '1rem',
      },
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

export default theme;
