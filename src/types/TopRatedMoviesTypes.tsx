import { Movie } from './MoviesTypes'

export type TopRatedMovieProps = {
    movie: Movie
    rankPosition: number
}

export type TopRatedMovieImageProps = {
    backdrop_path: string | null
    title: string
}

export type TopRatedMovieRankProps = {
    rankPosition: number
}
export type TopRatedMovieRatingProps = {
    vote_average: number
}
export type TopRatedMovieTitleProps = {
    title: string
}
export type TopRatedMovieReleaseDateProps = {
    release_date: string
}
