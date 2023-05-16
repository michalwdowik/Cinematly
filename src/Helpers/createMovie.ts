import { Movie } from '../MovieCard/types'

const createMovie = (movie: Movie): Movie => ({
    id: `:${movie.title || movie.name}`,
    name: movie.name,
    release_date: movie.release_date,
    title: movie.title || movie.name,
    vote_average: Number(movie.vote_average.toFixed(2)),
    backdrop_path: movie.backdrop_path,
    overview: movie.overview,
    release: movie.release_date || movie.first_air_date || movie.release,
    original_title: movie.original_title,
    original_language: movie.original_language,
    poster_path: movie.poster_path,
    popularity: movie.popularity,
    first_air_date: movie.first_air_date,
})

export default createMovie
