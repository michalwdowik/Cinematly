import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import FormControlLabel from '@mui/material/FormControlLabel'
import { TransitionGroup } from 'react-transition-group'
import { Box } from '@mui/material'
import { Movie, MovieProps } from '../MovieCard/types'
import { useWatchlistContext } from './WatchlistContext'
import WatchlistMovie from './WatchlistMovie'

const WatchlistMovies = () => {
    const { watchlist } = useWatchlistContext()

    return (
        <TransitionGroup>
            {watchlist.map((movie: Movie) => (
                <Collapse in key={movie.id}>
                    <Box className="watchlistRow">
                        <FormControlLabel
                            control={<WatchlistMovieCheckbox movie={movie} />}
                            label={<WatchlistMovie movie={movie} />}
                        />
                    </Box>
                    <WatchlistMovieDivider />
                </Collapse>
            ))}
        </TransitionGroup>
    )
}

export default WatchlistMovies

const WatchlistMovieCheckbox = ({ movie }: MovieProps) => {
    const { removeMovieFromWatchlist } = useWatchlistContext()

    return (
        <Checkbox
            sx={{
                '&.Mui-checked': {
                    color: '#ff7703',
                },
            }}
            className="watchlistMovieCheckbox"
            onChange={() => removeMovieFromWatchlist(movie)}
        />
    )
}

const WatchlistMovieDivider = () => {
    return <Box className="watchlistMovieDivider" />
}
