import { Movie } from '../types/MoviesTypes'

const fetchTopRatedMovies = async () => {
    const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=48f69edf43ba636d1b1574a2cca22035&language=en-US&page=1'
    )
    const data = await response.json()

    const fetchedMovies = data.results.slice(0, 10).map((movie: Movie) => ({
        id: `:${movie.title || movie.name}`,
        title: movie.title || movie.name,
        vote_average: movie.vote_average.toFixed(1),
        backdrop_path: movie.backdrop_path,
        overview: movie.overview,
        release_date: movie.release_date || movie.first_air_date,
        original_title: movie.original_title,
        original_language: movie.original_language,
        popularity: movie.popularity,
    }))

    return fetchedMovies
}

const topRatedMovies = await fetchTopRatedMovies()
export default topRatedMovies
