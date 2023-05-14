import { Alert, Snackbar } from '@mui/material'

const WatchlistAlert = ({ showAlert }: WatchlistAlertProps) => {
    return (
        <Snackbar open={showAlert}>
            <Alert severity="warning" sx={{ borderRadius: '1rem' }}>
                Movie already on the watchlist
            </Alert>
        </Snackbar>
    )
}

export default WatchlistAlert

/* --------------------------------- TYPES --------------------------------- */
type WatchlistAlertProps = {
    showAlert: boolean
}
