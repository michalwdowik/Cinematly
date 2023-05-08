import { Movie } from '../MovieCard/types'

export type TrendingMovieProps = Pick<
    Movie,
    'id' | 'title' | 'backdrop_path' | 'vote_average'
>

export type TrendingMovieDetailsProps = Omit<
    TrendingMovieProps,
    'backdrop_path'
>
