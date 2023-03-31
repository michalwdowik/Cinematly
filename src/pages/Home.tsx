import { Grid, Typography } from '@mui/material';
import React from 'react';
import CarouselMovies from '../CarouselMovies';
// import NavBar from '../NavBar';

export default function Home() {
  return (
    <div>
      <Grid container item>
        <CarouselMovies />
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '20px', md: '25px', lg: '30px' },
            width: { xs: '77%', sm: '70%', md: '60%', lg: '50%' },
            margin: '20px auto',
            textAlign: 'center',
            opacity: '80%',
            color: 'white',
            transition: 'background 0.25s, color 0.25s',
            '&:hover': {
              backgroundColor: '#000',
              color: '#fc9803',
            },
          }}
          variant="h5"
        >
          &quot; Hollywood is a place where they will pay you a thousand dollars
          for a kiss and fifty cents for your soul &ldquo;
          <Typography
            sx={{
              fontStyle: 'italic',
              margin: 3,
              color: 'gray',
              fontSize: { xs: '12px', md: '16px' },
            }}
            variant="subtitle2"
          >
            ~ Quoted in Marilyn Monroe in Her OwnWords (1990)
          </Typography>
        </Typography>
        {/* <TopMovies /> */}
      </Grid>
    </div>
  );
}
