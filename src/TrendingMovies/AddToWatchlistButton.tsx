import { Button } from '@mui/material'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import {
    watchLaterButtonSx,
    watchLaterButtonSxAbsolute,
} from '../ComponentStyles/TrendingMoviesStyles'
import { Movie } from '../types/MoviesTypes'
import { useWatchlistContext } from '../Helpers/Watchlist'

export type AddToWatchlistButtonProps = {
    absolute: boolean
    styles?: string
    movie: Movie
}
const AddToWatchlistButton = ({
    absolute,
    styles,
    movie,
}: AddToWatchlistButtonProps) => {
    const { addToWatchlist } = useWatchlistContext()

    const handleAddToWatchlist = () => {
        addToWatchlist(movie)
    }
    return (
        <Button
            className={styles}
            variant="contained"
            startIcon={<WatchLaterIcon />}
            sx={
                absolute
                    ? { ...watchLaterButtonSx, ...watchLaterButtonSxAbsolute }
                    : watchLaterButtonSx
            }
            onClick={handleAddToWatchlist}
        >
            Add to watchlist
        </Button>
    )
}

export default AddToWatchlistButton
