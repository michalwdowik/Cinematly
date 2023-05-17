import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { Box } from '@mui/material'
import WatchlistMovies from './WatchlistMovies'
import { useWatchlistContext } from './WatchlistContext'
import CallToActionLabel from '../Components/CallToActionLabel'

type WatchlistProps = {
    toggleWatchlist: () => void
    showWatchlist: boolean
}
const Watchlist = ({ toggleWatchlist, showWatchlist }: WatchlistProps) => {
    const { watchlist } = useWatchlistContext()
    const isWatchlistEmpty = watchlist.length === 0

    return (
        <>
            <Box
                className={`watchlist ${
                    showWatchlist ? 'watchlistShow' : 'watchlistHide'
                }`}
            >
                <WatchlistHeading />
                <AccessAlarmIcon className="accessAlarmIcon" />
                <WatchlistMovies />
                {isWatchlistEmpty && (
                    <CallToActionLabel
                        message="Add some movies..."
                        textSize="1.5rem"
                        textColor="black"
                    />
                )}
            </Box>

            <WatchlistBackgroundOverlay
                showWatchlist={showWatchlist}
                toggleWatchlist={toggleWatchlist}
            />
        </>
    )
}

export default Watchlist

const WatchlistHeading = () => {
    return <span className="watchlistHeading">Watchlist</span>
}

const WatchlistBackgroundOverlay = ({
    toggleWatchlist,
    showWatchlist,
}: WatchlistProps) => {
    return showWatchlist ? (
        <Box className="overlay" onClick={toggleWatchlist} />
    ) : null
}
