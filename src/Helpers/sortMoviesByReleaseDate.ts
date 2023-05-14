import { Movie } from '../MovieCard/types'

const sortMoviesByReleaseDate = (movies: Movie[]): Movie[] => {
    return movies.sort((a: Movie, b: Movie) => {
        const releaseDateA = new Date(a.release_date)
        const releaseDateB = new Date(b.release_date)
        return releaseDateA.getTime() - releaseDateB.getTime()
    })
}
export default sortMoviesByReleaseDate
