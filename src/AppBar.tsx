import AppBar from '@mui/material/AppBar';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import SwitchMode from './SwitchMode';

export default function ButtonAppBar() {
  const [value, setValue] = useState();

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky" sx={{ bgcolor: 'orange', width: '100vw' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <MovieFilterIcon sx={{ fontSize: '40px' }} />
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          <Tabs
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="white"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Upcoming" />
            <Tab value="two" label="Trending" />
            <Tab value="three" label="Top Rated" />
          </Tabs>
        </Typography>
        <SwitchMode />
      </Toolbar>
    </AppBar>
    // </Box>
  );
}
