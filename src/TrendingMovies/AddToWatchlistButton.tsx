import { Button } from '@mui/material'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import { watchLaterButtonSx } from '../ComponentStyles/TrendingMoviesStyles'

const AddToWatchlistButton = () => {
    return (
        <Button
            variant="contained"
            startIcon={<WatchLaterIcon />}
            sx={watchLaterButtonSx}
        >
            Add to watchlist
        </Button>
    )
}

export default AddToWatchlistButton
