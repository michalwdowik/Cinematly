import { Movie } from './MoviesTypes'

export interface TrendingMovieCardsProps {
    id: string
    title: string
    theme: string
    backdrop_path: string
    vote_average: number
}
export type CardImageProps = Pick<
    TrendingMovieCardsProps,
    'id' | 'backdrop_path'
>

export type CardDetailsProps = Pick<
    TrendingMovieCardsProps,
    'id' | 'title' | 'vote_average'
>

export type MovieImageModalProps = Pick<
    TrendingMovieCardsProps,
    'backdrop_path'
>

export type MovieTitleProps = Pick<TrendingMovieCardsProps, 'title'>

export type MovieRatingProps = Pick<TrendingMovieCardsProps, 'vote_average'>

export type TrendingMovieModalDetailsProps = {
    movie: Movie
}

export type MovieOriginalLanguageModalProps = {
    movieOriginLanguage: string
}
export type MovieOverviewModalProps = {
    movieOverview: string
}
export type MovieReleaseDateProps = {
    movieReleaseDate: string
}
export type MovieTitleModalProps = {
    movieTitle: string
    movieOriginTitle: string
}
