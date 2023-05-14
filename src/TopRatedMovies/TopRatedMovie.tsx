import { Box } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import TopRatedMovieHeadings from './TopRatedMovieHeadings'
import TopRatedMovieHovered from './TopRatedMovieDetails'
import { Movie } from '../MovieCard/types'

const TopRatedMovie = ({ movie, rankPosition }: TopRatedMovieProps) => {
    return (
        <Box className="topRatedMovie">
            <TopRatedMovieRank rankPosition={rankPosition} />
            <TopRatedMovieHeadings movie={movie} />
            <TopRatedMovieImage
                title={movie.title}
                backdrop_path={movie.backdrop_path}
            />
            <TopRatedMovieHovered movie={movie} />
        </Box>
    )
}

export default TopRatedMovie

const TopRatedMovieRank = ({ rankPosition }: TopRatedMovieRankProps) => {
    return <Box className="topRatedMovieRankPosition">{rankPosition + 1}</Box>
}

const TopRatedMovieImage = ({
    backdrop_path,
    title,
}: TopRatedMovieImageProps) => {
    return (
        <LazyLoadImage
            alt={`${title}`}
            className="topRatedMovie__img--hover"
            src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
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
