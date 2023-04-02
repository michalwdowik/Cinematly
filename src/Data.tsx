export interface Movie {
  id: string;
  title: string;
  name: string;
  vote_average: number;
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  first_air_date: string;
  original_title?: string;
  original_language?: string;
}

async function fetchData() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=48f69edf43ba636d1b1574a2cca22035'
  );
  const data = await response.json();

  const movieTitles = data.results.map((movie: Movie) => ({
    id: `:${movie.title || movie.name}`,
    title: movie.title || movie.name,
    vote_average: movie.vote_average.toFixed(2),
    backdrop_path: movie.backdrop_path,
    overview: movie.overview,
    release: movie.release_date || movie.first_air_date,
    original_title: movie.original_title,
    original_language: movie.original_language,
  }));

  return movieTitles;
}

export const items = await fetchData();
