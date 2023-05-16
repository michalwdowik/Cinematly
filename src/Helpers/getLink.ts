import { MovieCategory } from '../MovieCard/types'

const API_KEY = import.meta.env.VITE_API_KEY as string
const baseUrl = 'https://api.themoviedb.org/3'
const queryParams = `api_key=${API_KEY}&language=en-US&page=1`

const getLink = (movieCategory: MovieCategory, movieTitle?: string): string => {
    switch (movieCategory) {
        case 'topRated':
            return `${baseUrl}/movie/top_rated?${queryParams}`
        case 'nowPlaying':
            return `${baseUrl}/movie/now_playing?${queryParams}`
        case 'trending':
            return `${baseUrl}/trending/all/day?${queryParams}`
        case 'searched':
            return `${baseUrl}/search/movie?${queryParams}&include_adult=false&query=${movieTitle}`
        case 'upcoming':
        case 'justReleased':
            return `${baseUrl}/movie/upcoming?${queryParams}`

        default:
            throw new Error('Invalid movie type')
    }
}

export default getLink
