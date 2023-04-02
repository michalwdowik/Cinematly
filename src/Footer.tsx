import { Box, Typography } from '@mui/material';
import React from 'react';
import AnimationIcon from '@mui/icons-material/Animation';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        marginTop: '100px',
        marginBottom: '40px',
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          padding: 0,
          display: 'flex',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <AnimationIcon sx={{ fontSize: '55px', color: 'white' }} />
      </Typography>
      <Box sx={{ display: 'flex', gap: { xs: '10px', md: '90px' } }}>
        <Button
          sx={{
            color: 'white',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#000000',
              opacity: 0.5,
            },
          }}
          to="/"
          component={Link}
        >
          Upcoming
        </Button>
        <Button
          sx={{
            color: 'white',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#000000',
              opacity: 0.5,
            },
          }}
          to="/"
          component={Link}
        >
          Top Rated
        </Button>
        <Button
          sx={{
            color: 'white',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#000000',
              opacity: 0.5,
            },
          }}
          to="/"
          component={Link}
        >
          Favourites
        </Button>
      </Box>
      <Typography variant="body2" sx={{ color: 'gray' }}>
        © 2023 Cinematly
      </Typography>
    </Box>
  );
}
