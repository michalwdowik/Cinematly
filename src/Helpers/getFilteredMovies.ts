import { Movie } from '../MovieCard/types'

const getFilteredMovies = (
    movies: Movie[],
    isMovieJustReleased: boolean
): Movie[] => {
    const today = new Date()
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)

    const filteredMovies = movies.filter((movie: Movie) => {
        const releaseDate = new Date(movie.release)
        if (isMovieJustReleased) {
            return releaseDate <= today && releaseDate >= thirtyDaysAgo
        }
        return releaseDate > today
    })

    return filteredMovies
}

export default getFilteredMovies
