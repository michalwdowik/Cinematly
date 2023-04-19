import { Movie } from '../types/MoviesTypes'

const fetchNowPlayingMovies = async () => {
    const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=48f69edf43ba636d1b1574a2cca22035&language=en-US&page=1'
    )
    const data = await response.json()
    const movieTitles = data.results.map((movie: Movie) => ({
        title: movie.title,
        vote_average: movie.vote_average,
        overview: movie.overview,
        id: movie.id,
        release_date: movie.release_date,
        backdrop_path: movie.backdrop_path,
    }))
    return movieTitles
}

const nowPlayingMovies = await fetchNowPlayingMovies()
export default nowPlayingMovies
