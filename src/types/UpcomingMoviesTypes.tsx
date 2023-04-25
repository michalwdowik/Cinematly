import { ReactNode } from 'react'
import { Movie } from './MoviesTypes'

export type UpcomingMovieProps = {
    movies: Movie[]
    movie: Movie
}
export type UpcomingMoviesProps = Pick<UpcomingMovieProps, 'movies'>

export type UpcomingMovieImageProps = {
    backdrop_path: string | null
}

export type UpcomingMovieTitleProps = {
    title: string
    originTitle: string | undefined
}
export type UpcomingMovieReleaseDateProps = {
    releaseDate: string
}
export type UpcomingMovieOriginLanguageProps = {
    originLanguage: string | undefined
}
export type UpcomingMovieOverviewProps = {
    overview: string
}
export type UpcomingMovieHeadingProps = {
    voteAverage: number
    title: string
    id: string
}

export type TimelineWrapperProps = {
    movies: Movie[]
    movie: Movie
    children: ReactNode
}
