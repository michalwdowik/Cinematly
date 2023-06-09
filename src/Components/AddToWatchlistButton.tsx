import WatchLaterIcon from '@mui/icons-material/WatchLater'
import { Movie } from '../MovieCard/types'
import { useWatchlistContext } from '../Watchlist/WatchlistContext'
import '../Styles/watch-later-button.css'

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
        <button
            type="button"
            className={`watch-later-button ${
                absolute && 'watch-later-button-absolute'
            } ${styles}`}
            onClick={handleAddToWatchlist}
        >
            <WatchLaterIcon sx={{ fontSize: '1.2rem' }} />
            Add to watchlist
        </button>
    )
}

export default AddToWatchlistButton

/* --------------------------------- TYPES --------------------------------- */
type AddToWatchlistButtonProps = {
    absolute: boolean
    styles?: string
    movie: Movie
}
