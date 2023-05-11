import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import FormControlLabel from '@mui/material/FormControlLabel'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { TransitionGroup } from 'react-transition-group'
import { Box } from '@mui/material'
import { Movie, MovieProps } from '../MovieCard/types'
import { useWatchlistContext } from './WatchlistContext'
import WatchlistMovie from './WatchlistMovie'

const WatchlistMovies = () => {
    const { watchlist } = useWatchlistContext()

    return (
        <List>
            <TransitionGroup component={null}>
                {watchlist.map((movie: Movie) => (
                    <ListItem key={movie.id}>
                        <Collapse in key={movie.id}>
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
                    </ListItem>
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

/* --------------------------------- STYLES --------------------------------- */
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
