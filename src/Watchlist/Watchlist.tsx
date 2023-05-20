import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { Box } from '@mui/material'
import WatchlistMovies from './WatchlistMovies'
import { useWatchlistContext } from './WatchlistContext'
import CallToActionLabel from '../Components/CallToActionLabel'
import '../Styles/watchlist.css'

const Watchlist = () => {
    const { watchlist } = useWatchlistContext()
    const isWatchlistEmpty = watchlist.length === 0

    return (
        <Box className="watchlist">
            <WatchlistHeading />
            <WatchlistMovies />
            {isWatchlistEmpty && (
                <CallToActionLabel
                    message="Add some movies..."
                    textSize="1.5rem"
                    textColor="black"
                />
            )}
        </Box>
    )
}

export default Watchlist

const WatchlistHeading = () => {
    return (
        <Box component="span" className="watchlistHeading">
            <span className="watchlistHeadingText">Watchlist</span>
            <AccessAlarmIcon
                sx={{ fontSize: '2.2rem' }}
                className="accessAlarmIcon"
            />
        </Box>
    )
}
