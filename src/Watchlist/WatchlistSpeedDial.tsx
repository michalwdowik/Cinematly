import Badge from '@mui/material/Badge'
import Fab from '@mui/material/Fab'
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'
import { useContext } from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { Box } from '@mui/material'
import { useWatchlistContext } from './WatchlistContext'
import { ThemeContext } from '../Contexts/ThemeContext'
import useEscapeKeyPress from '../Hooks/useEscapeKeyPress'
import useWatchlistButtonAnimation from '../Hooks/useWatchlistButtonAnimation'
import useShowWatchlist from '../Hooks/useShowWatchlist'
import Watchlist from './Watchlist'
import Portal from '../Components/Portal'

const WatchlistSpeedDial = () => {
    const { watchlist } = useWatchlistContext()
    const { showWatchlist, setShowWatchlist, toggleWatchlist } =
        useShowWatchlist()
    const animateAdd = useWatchlistButtonAnimation(watchlist)
    useEscapeKeyPress(showWatchlist, setShowWatchlist)

    return (
        <Box sx={watchlistSpeedDialStyles}>
            <Tooltip
                placement="left-start"
                TransitionComponent={Zoom}
                title="Add, remove, and mark movies as watched."
            >
                <Badge
                    className={animateAdd ? 'animateAddToWatchlist' : ''}
                    showZero
                    sx={watchlistBadgeStyles}
                    color="warning"
                    badgeContent={watchlist.length}
                >
                    <WatchlistSpeedDialButton
                        toggleWatchlist={toggleWatchlist}
                    />
                </Badge>
            </Tooltip>
            <Portal id="watchlist">
                <Watchlist
                    showWatchlist={showWatchlist}
                    toggleWatchlist={toggleWatchlist}
                />
            </Portal>
        </Box>
    )
}

export default WatchlistSpeedDial

const WatchlistSpeedDialButton = ({
    toggleWatchlist,
}: WatchlistSpeedDialButtonProps) => {
    const { mainThemeColor, mainThemeColorSecondary } = useContext(ThemeContext)
    return (
        <Fab
            sx={fabStyles(mainThemeColor, mainThemeColorSecondary)}
            onClick={toggleWatchlist}
            aria-label="watchlist"
        >
            <AccessAlarmIcon />
        </Fab>
    )
}

/* --------------------------------- STYLES --------------------------------- */
const fabStyles = (mainThemeColor: string, mainThemeColorSecondary: string) => {
    return {
        backgroundColor: mainThemeColor,
        color: 'white',
        zIndex: '-1',
        transition: '0.4s all ease-in-out',
        '&:hover': {
            backgroundColor: mainThemeColorSecondary,
        },
    }
}

const watchlistSpeedDialStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '9999',
}

export const watchlistBadgeStyles = {
    right: '10px',
    zIndex: '9999',
    transition: '0.4s all ease-in-out',
    '&:hover': {
        scale: '1.2',
    },
}

/* --------------------------------- TYPES --------------------------------- */
type WatchlistSpeedDialButtonProps = {
    toggleWatchlist: () => void
}
