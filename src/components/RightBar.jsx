import { Box } from '@mui/material';
import React from 'react';

const RightBar = () => {
   return (
      <Box
         bgcolor="gold"
         flex={2}
         p={2}
         sx={{ display: { xs: 'none', md: 'block' } }}
      >
         RightBar
      </Box>
   );
};

export default RightBar;
