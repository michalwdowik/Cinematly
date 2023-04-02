/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import './home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StarIcon from '@mui/icons-material/Star';
import useScreenType from 'react-screentype-hook';
import { Box } from '@mui/material';

interface Movie {
  title: string;
  vote_average: number;
  popularity: number;
  overview: string;
  id: number;
  backdrop_path: string;
  release_date: string;
}

function CarouselMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const screenType = useScreenType();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=48f69edf43ba636d1b1574a2cca22035&language=en-US&page=1'
      );
      const data = await response.json();
      const movieTitles = data.results.map(
        (movie: any): Movie => ({
          title: movie.title,
          vote_average: movie.vote_average,
          popularity: movie.popularity,
          overview: movie.overview,
          id: movie.id,
          release_date: movie.release_date,
          backdrop_path: movie.backdrop_path,
        })
      );
      setMovies(movieTitles);
    }
    fetchData();
  }, []);

  return (
    <Carousel
      key={movies.length}
      autoPlay
      infiniteLoop
      className="carouselStyles"
      showStatus={false}
      showIndicators={!screenType.isMobile}
    >
      {movies.map((movie, i) => (
        <div key={i}>
          <div className="posterImage">
            <img
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.backdrop_path
              }`}
            />
          </div>
          <Box
            sx={{
              padding: { xs: '0rem', sm: '3rem', md: '4rem', lg: '5rem' },
            }}
            className="posterImage__overlay"
          >
            <Box
              sx={{
                fontSize: { xs: '24px', sm: '32px', md: '45px', lg: '55px' },
                marginLeft: { xs: '13px', sm: '0px', md: '0px' },
              }}
              className="posterImage__title"
            >
              {movie ? movie.title : ''}
            </Box>
            <Box
              sx={{
                fontSize: { xs: '17px', sm: '21px', md: '27px', lg: '33px' },
                marginLeft: { xs: '13px', sm: '0px', md: '0px' },
              }}
              className="posterImage__runtime"
            >
              {movie ? movie.release_date : ''}
              <span className="posterImage__rating">
                {movie ? movie.vote_average : ''}
                <StarIcon
                  sx={{
                    fontSize: {
                      xs: '12px',
                      sm: '12px',
                      md: '15px',
                      lg: '20px',
                      xl: '22px',
                    },
                  }}
                />
              </span>
            </Box>
            {!screenType.isMobile && (
              <Box
                sx={{
                  width: { xs: '70vh', sm: '70vh', md: '60vh', lg: '50vh' },
                }}
                className="posterImage__description"
              >
                {movie ? movie.overview : ''}
              </Box>
            )}
          </Box>
        </div>
      ))}
    </Carousel>
  );
}
export default CarouselMovies;
