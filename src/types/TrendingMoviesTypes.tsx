export interface TrendingMovieCardsProps {
    id: string
    title: string
    theme: string
    backdrop_path: string
    vote_average: number
}
export type CardImageProps = {
    id: string
    backdrop_path: string
}
export type CardDetailsProps = {
    id: string
    title: string
    vote_average: number
}

export type MovieHeadingModalProps = {
    voteAverage: number
    title: string
    id: string
}

export type MovieImageModalProps = {
    backdropPath: string
}
export type MovieTitleProps = {
    title: string
}
export type MovieRatingProps = {
    vote_average: number
}

export type TrendingMovieModalDetailsProps = {
    title: string
    releaseDate: string
    originLanguage: string
    overview: string
    originTitle: string
}
export type MovieTitleModalProps = {
    title: string
    originTitle: string
}
export type MovieReleaseDateProps = {
    releaseDate: string
}
export type MovieOriginalLanguageModalProps = {
    originLanguage: string
}
export type MovieOverviewModalProps = {
    overview: string
}
