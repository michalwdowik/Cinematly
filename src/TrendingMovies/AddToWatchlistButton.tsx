import { Button } from '@mui/material'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import {
    watchLaterButtonSx,
    watchLaterButtonSxAbsolute,
} from '../ComponentStyles/TrendingMoviesStyles'

export type AddToWatchlistButtonProps = {
    absolute: boolean
    styles?: string
}
const AddToWatchlistButton = ({
    absolute,
    styles,
}: AddToWatchlistButtonProps) => {
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
        >
            Add to watchlist
        </Button>
    )
}

export default AddToWatchlistButton
