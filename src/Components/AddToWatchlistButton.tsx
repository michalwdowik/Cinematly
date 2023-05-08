import { Button } from '@mui/material'
import WatchLaterIcon from '@mui/icons-material/WatchLater'

import { Movie } from '../types/MoviesTypes'
import useThemeColors from '../Hooks/useThemeColors'
import { useWatchlistContext } from '../Watchlist/WatchlistContext'

const AddToWatchlistButton = ({
    absolute,
    styles,
    movie,
}: AddToWatchlistButtonProps) => {
    const { addToWatchlist } = useWatchlistContext()
    const { mainThemeColorSecondary } = useThemeColors()

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
                    ? {
                          ...watchLaterButtonStyles(mainThemeColorSecondary),
                          ...watchLaterButtonStylesAbsolute,
                      }
                    : watchLaterButtonStyles(mainThemeColorSecondary)
            }
            onClick={handleAddToWatchlist}
        >
            Add to watchlist
        </Button>
    )
}

export default AddToWatchlistButton

const watchLaterButtonStyles = (mainThemeColorSecondary: string) => {
    return {
        transitionDuration: '0.3s',
        backgroundColor: 'orange',
        borderRadius: '30px',
        margin: 'auto',
        width: 'auto',
        fontSize: '11px',
        zIndex: '1',
        overflow: 'visible',
        '&:hover': {
            backgroundColor: mainThemeColorSecondary,
        },
    }
}

const watchLaterButtonStylesAbsolute = {
    position: 'absolute',
    top: '-2rem',
    right: '0px',
    alignSelf: 'end',
}

type AddToWatchlistButtonProps = {
    absolute: boolean
    styles?: string
    movie: Movie
}