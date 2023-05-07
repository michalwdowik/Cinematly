export interface TrendingMovieCardsProps {
    id: string
    title: string
    theme: string
    backdrop_path: string
    vote_average: number
}

export type CardDetailsProps = Pick<
    TrendingMovieCardsProps,
    'id' | 'title' | 'vote_average'
>
