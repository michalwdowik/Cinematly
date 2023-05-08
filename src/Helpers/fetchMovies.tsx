import { Movie } from '../MovieCard/types'

export const API_KEY = '48f69edf43ba636d1b1574a2cca22035'

type MovieType =
    | 'topRated'
    | 'nowPlaying'
    | 'trending'
    | 'searched'
    | 'upcoming'

type FetchMoviesProps = {
    type: MovieType
    movieTitle?: string
}

const fetchLink = (type: MovieType, movieTitle?: string) => {
    switch (type) {
        case 'topRated':
            return `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        case 'nowPlaying':
            return `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        case 'trending':
            return `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
        case 'searched':
            return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movieTitle}`
        case 'upcoming':
            return `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

        default:
            throw new Error('Invalid movie type')
    }
}

const fetchMovies = async ({ type, movieTitle }: FetchMoviesProps) => {
    const link = fetchLink(type, movieTitle)
    const response = await fetch(link)
    const data = await response.json()
    let movies: Movie[] = []

    if (type === 'upcoming') {
        movies = data.results
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
        const thirtyDaysAgo = new Date(
            today.getTime() - 30 * 24 * 60 * 60 * 1000
        )

        const moviesFromLast30Days = movies.filter((movie: Movie) => {
            const releaseDate = new Date(movie.release_date)
            return releaseDate <= today && releaseDate >= thirtyDaysAgo
        })

        const fetchedUpcomingMovies = movies.filter((movie: Movie) => {
            const releaseDate = new Date(movie.release_date)
            return releaseDate > today
        })

        return { moviesFromLast30Days, fetchedUpcomingMovies }
    }
    movies = data.results.slice(0, 10).map((movie: Movie) => ({
        id: `:${movie.title || movie.name}`,
        title: movie.title || movie.name,
        vote_average: movie.vote_average.toFixed(2),
        backdrop_path: movie.backdrop_path,
        overview: movie.overview,
        release: movie.release_date || movie.first_air_date,
        original_title: movie.original_title,
        original_language: movie.original_language,
        poster_path: movie.poster_path,
    }))
    return movies
}

export default fetchMovies
