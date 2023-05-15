import { Box } from '@mui/material'
import TopRatedMovieHeadings from './TopRatedMovieHeadings'
import TopRatedMovieHovered from './TopRatedMovieDetails'
import { Movie } from '../MovieCard/types'

const TopRatedMovie = ({
    movie,
    rankPosition,
    onLoad,
    loaded,
}: TopRatedMovieProps) => {
    return (
        <Box sx={{ display: loaded ? '' : 'none' }} className="topRatedMovie">
            <TopRatedMovieRank rankPosition={rankPosition} />
            <TopRatedMovieHeadings movie={movie} />
            <TopRatedMovieImage
                title={movie.title}
                backdrop_path={movie.backdrop_path}
                onLoad={onLoad}
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
    onLoad,
}: TopRatedMovieImageProps) => {
    return (
        <img
            alt={`${title}`}
            className="topRatedMovie__img--hover"
            src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
            onLoad={onLoad}
        />
    )
}

/* --------------------------------- TYPES --------------------------------- */
type TopRatedMovieProps = {
    movie: Movie
    rankPosition: number
    onLoad: () => void
    loaded: boolean
}

type TopRatedMovieImageProps = {
    backdrop_path: string | null
    title: string
    onLoad: () => void
}

type TopRatedMovieRankProps = Pick<TopRatedMovieProps, 'rankPosition'>
