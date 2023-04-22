import { ReactNode } from 'react'

export interface Movie {
    id: string
    title: string
    name?: string
    vote_average: number
    backdrop_path: string | null
    overview: string
    release_date: string
    first_air_date?: string
    original_title?: string
    original_language?: string
    popularity?: number
    position: number
}

export type MovieProps = {
    movie: Movie
}

export type CarouselOverlayProps = {
    children: ReactNode
}

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
