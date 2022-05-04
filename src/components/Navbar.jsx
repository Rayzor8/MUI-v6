import {
   AppBar,
   Stack,
   Toolbar,
   Typography,
   InputBase,
   Badge,
   Avatar,
   Menu,
   MenuItem,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useState } from 'react';
import DataArrayIcon from '@mui/icons-material/DataArray';
import MailIcon from '@mui/icons-material/Mail';
import { FlashOnOutlined, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
   backgroundColor: 'midnightblue',
   justifyContent: 'space-between',
   color: 'white',
});

const StyledSearchBar = styled('div')(({ theme }) => ({
   backgroundColor: 'white',
   borderRadius: theme.shape.borderRadius,
   width: '40%',
   padding: '0 10px',
}));

const IconContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   gap: '1rem',
   alignItems: 'center',
   cursor: 'pointer',
}));

const Navbar = () => {
   const [anchorElUser, setAnchorElUser] = React.useState(null);
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };
   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <>
         <AppBar position="sticky">
            <StyledToolbar>
               <Stack direction="row" spacing={1} alignItems="center">
                  <DataArrayIcon color="primary" />
                  <Typography
                     variant="h5"
                     sx={{ display: { xs: 'none', md: 'block' } }}
                  >
                     Rayzor.dev
                  </Typography>
               </Stack>
               <StyledSearchBar>
                  <InputBase name="Search" placeholder="Search Here..." />
               </StyledSearchBar>
               <IconContainer>
                  <Badge badgeContent={4} color="primary">
                     <MailIcon />
                  </Badge>
                  <Badge badgeContent={4} color="primary">
                     <Notifications />
                  </Badge>
                  <Avatar
                     sx={{ width: '30px', height: '30px' }}
                     src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=150&fit=max"
                     onClick={handleOpenUserMenu}
                  />
                  <Menu
                     sx={{ mt: { xs: '35px', md: '45rpx' } }}
                     id="menu-appbar"
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     anchorEl={anchorElUser}
                  >
                     <Stack>
                        <MenuItem>John</MenuItem>
                        <MenuItem>John</MenuItem>
                        <MenuItem>John</MenuItem>
                     </Stack>
                  </Menu>
               </IconContainer>
            </StyledToolbar>
         </AppBar>
      </>
   );
};

export default Navbar;
