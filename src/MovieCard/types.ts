export interface Movie {
    id: string
    title: string
    name: string
    vote_average: number
    backdrop_path: string | null
    poster_path?: string | null
    overview: string
    release_date: string
    release: string
    first_air_date: string
    original_title: string
    original_language: string
    popularity: number
    position?: number
}

export type MovieProps = {
    movie: Movie
}
