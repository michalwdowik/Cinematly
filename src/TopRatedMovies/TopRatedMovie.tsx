import { Box } from '@mui/material'
import TopRatedMovieHeadings from './TopRatedMovieHeadings'
import { Movie } from '../MovieCard/types'
import TopRatedMovieDetails from './TopRatedMovieDetails'

const TopRatedMovie = ({ movie, rankPosition }: TopRatedMovieProps) => {
    return (
        <Box className="top-rated-movie">
            <TopRatedMovieRank rankPosition={rankPosition} />
            <TopRatedMovieHeadings movie={movie} />
            <TopRatedMovieImage
                title={movie.title}
                backdrop_path={movie.backdrop_path}
            />
            <TopRatedMovieDetails movie={movie} />
        </Box>
    )
}

export default TopRatedMovie

const TopRatedMovieRank = ({ rankPosition }: TopRatedMovieRankProps) => {
    return (
        <Box className="top-rated-movie-rank-position">{rankPosition + 1}</Box>
    )
}

const TopRatedMovieImage = ({
    backdrop_path,
    title,
}: TopRatedMovieImageProps) => {
    return (
        <img
            alt={`${title}`}
            className="top-rated-movie__img--hover"
            src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
        />
    )
}

/* --------------------------------- TYPES --------------------------------- */
type TopRatedMovieProps = {
    movie: Movie
    rankPosition: number
}

type TopRatedMovieImageProps = {
    backdrop_path: string | null
    title: string
}

type TopRatedMovieRankProps = Pick<TopRatedMovieProps, 'rankPosition'>
