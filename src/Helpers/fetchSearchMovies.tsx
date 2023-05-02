import { Movie } from '../types/MoviesTypes'

const fetchSearchMovies = async (movieTitle: string) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=48f69edf43ba636d1b1574a2cca22035&language=en-US&page=1&include_adult=false&query=${movieTitle}`
    )
    const data = await response.json()

    const fetchedMovies = data.results.map((movie: Movie) => ({
        id: `:${movie.title || movie.name}`,
        title: movie.title || movie.name,
        vote_average: movie.vote_average.toFixed(1),
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path,
        overview: movie.overview,
        release_date: movie.release_date || movie.first_air_date,
        original_title: movie.original_title,
        original_language: movie.original_language,
        popularity: movie.popularity,
    }))

    return fetchedMovies
}

export default fetchSearchMovies
