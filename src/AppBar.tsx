import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AnimationIcon from '@mui/icons-material/Animation';
import { createTheme, Tab, Tabs, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import useScreenType from 'react-screentype-hook';
import SwitchMode from './SwitchMode';
import TemporaryDrawer from './TemporaryDrawer';

const pages = ['Upcoming', 'Trending', 'Top Movies'];

function ResponsiveAppBar() {
  const screenType = useScreenType();

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[900],
      },
    },
  });
  const [value, setValue] = React.useState<string>(pages[0]);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ bgcolor: 'orange' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <AnimationIcon sx={{ fontSize: '65px' }} />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton> */}
              {screenType.isMobile || screenType.isTablet ? (
                <TemporaryDrawer pages={pages} />
              ) : (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <AnimationIcon sx={{ fontSize: '65px' }} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Tabs
                value={value}
                onChange={(e, val) => setValue(val)}
                indicatorColor="primary"
                textColor="primary"
              >
                {pages.map((page) => (
                  <Tab
                    label={page}
                    value={page}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  />
                ))}
              </Tabs>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <SwitchMode />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
