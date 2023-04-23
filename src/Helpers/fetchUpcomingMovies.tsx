import { Movie } from '../types/MoviesTypes'

const fetchUpcomingMovies = async () => {
    const response = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=48f69edf43ba636d1b1574a2cca22035&language=en-US&page=1'
    )
    const data = await response.json()

    const upcomingMovies = data.results
        .map((movie: Movie) => ({
            id: `:${movie.title || movie.name}`,
            title: movie.title || movie.name,
            vote_average: movie.vote_average.toFixed(2),
            backdrop_path: movie.backdrop_path,
            overview: movie.overview,
            release_date: movie.release_date || movie.first_air_date,
            original_title: movie.original_title,
            original_language: movie.original_language,
        }))
        .sort((a: Movie, b: Movie) => {
            const releaseDateA = new Date(a.release_date)
            const releaseDateB = new Date(b.release_date)
            return releaseDateA.getTime() - releaseDateB.getTime()
        })

    const today = new Date()
    const upcomingMoviesUpToToday = upcomingMovies.filter((movie: Movie) => {
        const releaseDate = new Date(movie.release_date)

        const isFromCurrentMonthOrFuture =
            releaseDate.getMonth() >= today.getMonth() &&
            releaseDate.getFullYear() >= today.getFullYear()
        return isFromCurrentMonthOrFuture && releaseDate <= today
    })

    const upcomingMoviesFromFuture = upcomingMovies.filter((movie: Movie) => {
        const releaseDate = new Date(movie.release_date)
        return releaseDate > today
    })

    return { upcomingMoviesUpToToday, upcomingMoviesFromFuture }
}

const { upcomingMoviesUpToToday, upcomingMoviesFromFuture } =
    await fetchUpcomingMovies()
export { upcomingMoviesUpToToday, upcomingMoviesFromFuture }
