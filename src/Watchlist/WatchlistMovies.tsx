import { Box, Checkbox, Collapse, FormControlLabel, List } from '@mui/material'
import { TransitionGroup } from 'react-transition-group'
import { Movie, MovieProps } from '../MovieCard/types'
import { useWatchlistContext } from './WatchlistContext'
import WatchlistMovie from './WatchlistMovie'

const WatchlistMovies = () => {
    const { watchlist } = useWatchlistContext()

    return (
        <List>
            <TransitionGroup>
                {watchlist.map((movie: Movie) => (
                    <Collapse key={movie.id}>
                        <Box sx={watchlistRowStyles}>
                            <FormControlLabel
                                control={
                                    <WatchlistMovieCheckbox movie={movie} />
                                }
                                label={<WatchlistMovie movie={movie} />}
                            />
                        </Box>
                        <WatchlistMovieDivider />
                    </Collapse>
                ))}
            </TransitionGroup>
        </List>
    )
}

export default WatchlistMovies

const WatchlistMovieCheckbox = ({ movie }: MovieProps) => {
    const { removeMovieFromWatchlist } = useWatchlistContext()

    return (
        <Checkbox
            sx={watchlistMovieCheckboxStyles}
            onChange={() => removeMovieFromWatchlist(movie)}
        />
    )
}

const WatchlistMovieDivider = () => {
    return <Box sx={watchlistMovieDividerStyles} />
}

const watchlistRowStyles = {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: '1rem',
    paddingBottom: '0.5rem',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
}

const watchlistMovieCheckboxStyles = {
    '&.Mui-checked': {
        color: '#ff9800',
    },
}

const watchlistMovieDividerStyles = {
    width: '80%',
    height: '0.5px',
    margin: 'auto',
    border: '1px black solid',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: '5%',
    marginY: '0.4rem',
}
