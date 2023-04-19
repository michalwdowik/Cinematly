import { Movie } from '../types/MoviesTypes'

const fetchTrendingMovies = async () => {
    const response = await fetch(
        'https://api.themoviedb.org/3/trending/all/day?api_key=48f69edf43ba636d1b1574a2cca22035'
    )
    const data = await response.json()

    const movieTitles = data.results.slice(0, 10).map((movie: Movie) => ({
        id: `:${movie.title || movie.name}`,
        title: movie.title || movie.name,
        vote_average: movie.vote_average.toFixed(2),
        backdrop_path: movie.backdrop_path,
        overview: movie.overview,
        release: movie.release_date || movie.first_air_date,
        original_title: movie.original_title,
        original_language: movie.original_language,
    }))

    return movieTitles
}

const trendingMovies = await fetchTrendingMovies()
export default trendingMovies
