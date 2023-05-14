import axios from 'axios'
import { Movie, MovieCategory } from '../MovieCard/types'
import createMovieObject from './createMovieObject'
import fetchLink from './fetchLink'
import sortMoviesByReleaseDate from './sortMoviesByReleaseDate'

const fetchMovies = async ({
    movieCategory,
    movieTitle,
}: FetchMoviesProps): Promise<Movie[]> => {
    const link = fetchLink(movieCategory, movieTitle)
    const response = await axios.get(link)
    const { results } = response.data

    let movies: Movie[] = results.map((movie: Movie) =>
        createMovieObject(movie)
    )

    const isMovieUpcoming = movieCategory === 'upcoming'
    const isMovieJustReleased = movieCategory === 'justReleased'

    if (isMovieUpcoming || isMovieJustReleased) {
        const sortedMovies = sortMoviesByReleaseDate(movies)
        const filteredMovies = getFilteredMovies(
            sortedMovies,
            isMovieJustReleased
        )
        movies = filteredMovies
    }
    if (!isMovieJustReleased && !isMovieUpcoming) {
        movies = movies.slice(0, 10)
    }

    return movies
}

export default fetchMovies

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

const fetchMovieByCategory = async (
    movieCategory: MovieCategory
): Promise<Movie[]> => {
    return fetchMovies({ movieCategory })
}

export const nowPlayingMovies: Movie[] = await fetchMovieByCategory(
    'nowPlaying'
)
export const upcomingMovies: Movie[] = await fetchMovieByCategory('upcoming')
export const justReleasedMovies: Movie[] = await fetchMovieByCategory(
    'justReleased'
)
export const topRatedMovies: Movie[] = await fetchMovieByCategory('topRated')
export const trendingMovies: Movie[] = await fetchMovieByCategory('trending')

/* --------------------------------- TYPES --------------------------------- */

type FetchMoviesProps = {
    movieCategory: MovieCategory
    movieTitle?: string
}
