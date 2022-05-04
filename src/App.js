import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feeds from './components/Feeds';
import RightBar from './components/RightBar';
import { Box, Stack } from '@mui/material';

function App() {
   return (
      <Box className="App">
         <Navbar />
         <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
         >
            <Sidebar />
            <Feeds />
            <RightBar />
         </Stack>
      </Box>
   );
}

export default App;
