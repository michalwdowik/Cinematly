import { Box } from '@mui/material'
import { Movie } from '../MovieCard/types'
import { topRatedMovies } from '../Helpers/fetchMovies'
import TopRatedMovie from './TopRatedMovie'
import TopRatedMovieSkeleton from './TopRatedMovieSkeleton'

const TopRatedMovies = ({ loaded, onLoad }: TopRatedMoviesProps) => {
    return (
        <Box sx={topRatedMovieCardsStyles}>
            {topRatedMovies.map((movie: Movie, rankPosition: number) => (
                <>
                    <TopRatedMovie
                        key={movie.id}
                        onLoad={onLoad}
                        movie={movie}
                        rankPosition={rankPosition}
                        loaded={loaded}
                    />
                    {!loaded && <TopRatedMovieSkeleton key={movie.id} />}
                </>
            ))}
        </Box>
    )
}

export default TopRatedMovies

/* --------------------------------- STYLES --------------------------------- */
const topRatedMovieCardsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    alignContent: 'center',
}

/* --------------------------------- TYPES --------------------------------- */
type TopRatedMoviesProps = { loaded: boolean; onLoad: () => void }
