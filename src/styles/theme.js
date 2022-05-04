import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
   palette: {
      primary: {
         main: '#00FF00',
      },
      secondary: {
         main: '#000a40',
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 600,
         md: 900,
         lg: 1200,
         xl: 1536,
      },
   },
});
