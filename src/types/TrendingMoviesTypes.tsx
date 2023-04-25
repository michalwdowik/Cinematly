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
    title: string
    releaseDate: string
    originLanguage: string
    overview: string
    originTitle: string
}

export type MovieOriginalLanguageModalProps = Pick<
    TrendingMovieModalDetailsProps,
    'originLanguage'
>
export type MovieOverviewModalProps = Pick<
    TrendingMovieModalDetailsProps,
    'overview'
>
export type MovieReleaseDateProps = Pick<
    TrendingMovieModalDetailsProps,
    'releaseDate'
>
export type MovieTitleModalProps = Pick<
    TrendingMovieModalDetailsProps,
    'title' | 'originTitle'
>
