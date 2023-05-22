/* eslint-disable react/jsx-props-no-spreading */
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { Backdrop, Box, Fab, Grow, Modal } from '@mui/material'
import { useWatchlistContext } from './WatchlistContext'
import useWatchlistButtonAnimation from '../Hooks/useWatchlistButtonAnimation'
import Watchlist from './Watchlist'
import useModalLogic from '../Hooks/useShowModal'

const WatchlistSpeedDial = () => {
    const { watchlist } = useWatchlistContext()

    const animateAdd = useWatchlistButtonAnimation(watchlist)
    const { showModal, closeModal, openModal } = useModalLogic()

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
                        showModal={showModal}
                        closeModal={closeModal}
                        openModal={openModal}
                    />
                </Badge>
            </Tooltip>

            <Modal
                open={showModal}
                container={() => document.getElementById('watchlist')}
                sx={{ zIndex: '5' }}
                onClose={closeModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Grow
                    in={showModal}
                    style={{
                        transformOrigin: '100% 100% 0',
                        position: 'fixed',
                        bottom: '7rem',
                        right: '1.2rem',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        willChange: 'transform',
                    }}
                    {...(showModal ? { timeout: 500 } : {})}
                >
                    <div>
                        <Watchlist />
                    </div>
                </Grow>
            </Modal>
        </Box>
    )
}

export default WatchlistSpeedDial

const WatchlistSpeedDialButton = ({
    openModal,
    showModal,
    closeModal,
}: WatchlistSpeedDialButtonProps) => {
    const mainThemeColor = import.meta.env.VITE_MAIN_THEME_COLOR
    const mainThemeColorSecondary = import.meta.env
        .VITE_MAIN_THEME_COLOR_SECONDARY

    return (
        <Fab
            type="button"
            className="fab"
            onClick={showModal ? closeModal : openModal}
            aria-label="watchlist"
            sx={{
                bgcolor: mainThemeColor,
                color: 'white',
                '&:hover': { bgcolor: mainThemeColorSecondary },
            }}
        >
            <AccessAlarmIcon />
        </Fab>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type WatchlistSpeedDialButtonProps = {
    openModal: () => void
    showModal: boolean
    closeModal: () => void
}
