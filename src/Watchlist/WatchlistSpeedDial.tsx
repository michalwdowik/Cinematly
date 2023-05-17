import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { Box } from '@mui/material'
import { useWatchlistContext } from './WatchlistContext'
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
        <Box className="watchlistSpeedDial">
            <Tooltip
                placement="left-start"
                TransitionComponent={Zoom}
                title="Add, remove, and mark movies as watched."
            >
                <Badge
                    className={`watchlistBadge ${
                        animateAdd && 'animateAddToWatchlist'
                    }`}
                    showZero
                    color="warning"
                    badgeContent={watchlist.length}
                >
                    <WatchlistSpeedDialButton
                        toggleWatchlist={toggleWatchlist}
                    />
                </Badge>
            </Tooltip>
            {showWatchlist && (
                <Portal id="watchlist">
                    <Watchlist
                        showWatchlist={showWatchlist}
                        toggleWatchlist={toggleWatchlist}
                    />
                </Portal>
            )}
        </Box>
    )
}

export default WatchlistSpeedDial

const WatchlistSpeedDialButton = ({
    toggleWatchlist,
}: WatchlistSpeedDialButtonProps) => {
    return (
        <button
            type="button"
            className="fab"
            onClick={toggleWatchlist}
            aria-label="watchlist"
        >
            <AccessAlarmIcon />
        </button>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type WatchlistSpeedDialButtonProps = {
    toggleWatchlist: () => void
}
