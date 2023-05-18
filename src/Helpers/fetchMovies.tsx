import axios from 'axios'
import { Movie, MovieCategory } from '../MovieCard/types'
import createMovie from './createMovie'
import getLink from './getLink'
import sortMoviesByReleaseDate from './sortMoviesByReleaseDate'
import getFilteredMovies from './getFilteredMovies'

const fetchMovies = async ({
    movieCategory,
    movieTitle,
}: FetchMoviesProps): Promise<Movie[]> => {
    const link = getLink(movieCategory, movieTitle)
    const response = await axios.get(link)
    const { results } = response.data

    let movies: Movie[] = results.map((movie: Movie) => createMovie(movie))

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

/* --------------------------------- TYPES --------------------------------- */

type FetchMoviesProps = {
    movieCategory: MovieCategory
    movieTitle?: string
}
