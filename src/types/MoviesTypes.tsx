import { ReactNode } from 'react'

export interface Movie {
    id: string
    title: string
    name: string
    vote_average: number
    backdrop_path: string | null
    overview: string
    release_date: string
    first_air_date: string
    original_title?: string
    original_language?: string
}

export type MovieProps = {
    movie: Movie
}

export type CarouselOverlayProps = {
    children: ReactNode
}
