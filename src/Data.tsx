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

  const movieTitles = data.results.slice(0, 10).map((movie: Movie) => ({
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

export interface Actor {
  name: string;
  overview: string;
  vote_average: number;
  profile_path: string;
  known_for: string;
}

async function fetchFamousPeople() {
  const response = await fetch(
    'https://api.themoviedb.org/3/person/popular?api_key=48f69edf43ba636d1b1574a2cca22035&language=en-US&page=1'
  );
  const data = await response.json();

  const actors = data.results.slice(0, 10).map((actor: Actor) => ({
    name: actor.name,
    overview: actor.known_for[0].overview,
    vote_average: actor.known_for[0].vote_average,
    profile_path: actor.profile_path,
    known_for: actor.known_for[0].name || actor.known_for[0].title,
  }));

  return actors;
}

export const famousPeople = await fetchFamousPeople();
