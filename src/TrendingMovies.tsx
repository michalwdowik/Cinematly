import React, { useState, useEffect } from 'react';

interface Movie {
  title: string;
  average: number;
  popularity: number;
  overview: string;
  id: number;
  backdrop_path: string;
}

function TrendingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/all/day?api_key=48f69edf43ba636d1b1574a2cca22035'
      );
      const data = await response.json();
      const movieTitles = data.results.map(
        (movie: any): Movie => ({
          title: movie.title || movie.name,
          average: movie.vote_average,
          popularity: movie.popularity,
          overview: movie.overview,
          id: movie.id,
          backdrop_path: movie.backdrop_path,
        })
      );
      setMovies(movieTitles);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {movies.map((movie: Movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>Average rating: {movie.average}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>{movie.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
        </li>
      ))}
    </ul>
  );
}

export default TrendingMovies;
