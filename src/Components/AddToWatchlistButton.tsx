import Button from '@mui/material/Button'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import { useContext } from 'react'
import { Movie } from '../MovieCard/types'
import { useWatchlistContext } from '../Watchlist/WatchlistContext'
import { ThemeContext } from './ThemeContext'

const AddToWatchlistButton = ({
    absolute,
    styles,
    movie,
}: AddToWatchlistButtonProps) => {
    const { addToWatchlist } = useWatchlistContext()
    const { mainThemeColorSecondary, mainThemeColor } = useContext(ThemeContext)
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
                          ...watchLaterButtonStyles(
                              mainThemeColorSecondary,
                              mainThemeColor
                          ),
                          ...watchLaterButtonStylesAbsolute,
                      }
                    : watchLaterButtonStyles(
                          mainThemeColorSecondary,
                          mainThemeColor
                      )
            }
            onClick={handleAddToWatchlist}
        >
            Add to watchlist
        </Button>
    )
}

export default AddToWatchlistButton

/* --------------------------------- STYLES --------------------------------- */
const watchLaterButtonStyles = (
    mainThemeColorSecondary: string,
    mainThemeColor: string
) => {
    return {
        transitionDuration: '0.3s',
        backgroundColor: mainThemeColor,
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

/* --------------------------------- TYPES --------------------------------- */
type AddToWatchlistButtonProps = {
    absolute: boolean
    styles?: string
    movie: Movie
}
