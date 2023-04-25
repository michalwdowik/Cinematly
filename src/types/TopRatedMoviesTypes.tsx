import { Movie } from './MoviesTypes'

export type TopRatedMovieProps = {
    movie: Movie
    rankPosition: number
}

export type TopRatedMovieImageProps = {
    backdrop_path: string | null
    title: string
}

export type TopRatedMovieRankProps = Pick<TopRatedMovieProps, 'rankPosition'>

export type TopRatedMovieRatingProps = {
    vote_average: number
}
export type TopRatedMovieTitleProps = Pick<TopRatedMovieImageProps, 'title'>

export type TopRatedMovieReleaseDateProps = {
    release_date: string
}
