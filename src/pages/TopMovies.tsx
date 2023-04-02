import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import Card from '../Card';

interface Movie {
  title: string;
  average: number;
  popularity: number;
  overview: string;
  id: number;
  backdrop_path: string;
  poster: string;
  position: number;
  release: string;
}

function TopMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=48f69edf43ba636d1b1574a2cca22035&language=en-US&page=1'
      );
      const data = await response.json();
      const movieTitles = data.results.map(
        (movie: any, index: number): Movie => ({
          title: movie.title || movie.name,
          average: movie.vote_average,
          popularity: movie.popularity,
          overview: movie.overview,
          id: movie.id,
          backdrop_path: movie.backdrop_path,
          poster: movie.poster_path,
          position: index,
          release: movie.release_date,
        })
      );
      setMovies(movieTitles);
    }
    fetchData();
  }, []);

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <ul>
        {/* {movies.map((movie: Movie) => (
          <li key={movie.id}>
            <Typography
              sx={{ color: 'white', fontWeight: 'bold' }}
              variant="h2"
            >
              {movie.title}
            </Typography>
            <Typography sx={{ color: 'white' }} variant="body1">
              Average rating: {movie.average}
            </Typography>
            <StarIcon sx={{ color: 'white' }} />
            <Typography sx={{ color: 'white' }} variant="body1">
              Position: {movie.position + 1}
            </Typography>
            <Typography sx={{ color: 'white' }} variant="body2">
              Popularity: {movie.popularity}
            </Typography>
            <Typography sx={{ color: 'white' }} variant="body2">
              {movie.overview}
            </Typography>
            <Typography sx={{ color: 'white' }} variant="body1">
              {movie.release}
            </Typography>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
              alt={movie.title}
            />
          </li>
        ))} */}
      </ul>

      <Card />
    </motion.div>
  );
}

export default TopMovies;
