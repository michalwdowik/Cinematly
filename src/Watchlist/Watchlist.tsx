import { Box, Typography } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import WatchlistMovies from './WatchlistMovies'
import { useWatchlistContext } from './WatchlistContext'
import CallToActionLabel from '../Components/CallToActionLabel'

type WatchlistProps = {
    toggleWatchlist: () => void
    showWatchlist: boolean
}
const Watchlist = ({ toggleWatchlist, showWatchlist }: WatchlistProps) => {
    const { watchlist } = useWatchlistContext()
    const watchlistIsEmpty = watchlist.length === 0

    return (
        <>
            <Box
                sx={watchlistStyles}
                className={`${
                    showWatchlist ? 'watchlistShow' : 'watchlistHide'
                }`}
            >
                <WatchlistHeading />
                <AccessAlarmIcon sx={accessAlarmIconStyles} />
                <WatchlistMovies />
                {watchlistIsEmpty && (
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
    return <Typography sx={watchlistHeadingStyles}>Watchlist</Typography>
}

const WatchlistBackgroundOverlay = ({
    toggleWatchlist,
    showWatchlist,
}: WatchlistProps) => {
    return showWatchlist ? (
        <Box sx={overlayStyles} onClick={toggleWatchlist} />
    ) : null
}

/* --------------------------------- STYLES --------------------------------- */
const watchlistHeadingStyles = {
    fontWeight: '600',
    fontSize: '3rem',
    paddingTop: '1rem',
    paddingLeft: '2.6rem',
    zIndex: '100',
    color: `black`,
    opacity: '85%',
    width: '100%',
}

const watchlistStyles = {
    background: 'rgba( 255, 255, 255, 0.45 )',
    backdropFilter: 'blur( 20px )',
    position: 'absolute',
    bottom: '80px',
    right: '2px',
    width: '450px',
    maxHeight: '600px',
    overflowY: 'auto',
    borderRadius: '2.5rem',
    zIndex: '9999',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    scrollbarWidth: 'none',
    overflow: 'scroll',
    minHeight: '200px',
    '@media (max-width:767px)': {
        maxWidth: '90vw',
    },
}

const accessAlarmIconStyles = {
    position: 'fixed',
    top: '0',
    right: '0',
    margin: '2rem',
    fontSize: '2rem',
}

const overlayStyles = {
    position: 'fixed',
    backgroundColor: 'black',
    opacity: '50%',
    top: '70px',
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
}
