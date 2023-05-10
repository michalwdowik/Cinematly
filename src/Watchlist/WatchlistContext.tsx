/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { Alert, Snackbar } from '@mui/material'
import { Movie } from '../MovieCard/types'

const WatchlistContext = createContext<WatchlistContextType>({
    watchlist: [],
    addToWatchlist: () => {},
    removeMovieFromWatchlist: () => {},
    showAlert: false,
})

export const WatchlistContextProvider = ({
    children,
}: WatchlistContextProviderType): JSX.Element => {
    const [watchlist, setWatchlist] = useState<Movie[]>([])
    const [showAlert, setShowAlert] = useState(false)

    const addToWatchlist = (movie: Movie) => {
        if (!watchlist.some((m) => m.id === movie.id)) {
            setWatchlist([...watchlist, movie])
        } else {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 2000)
        }
    }

    const removeMovieFromWatchlist = (movie: Movie) => {
        setTimeout(() => {
            setWatchlist(watchlist.filter((m) => movie.id !== m.id))
        }, 1000)
    }

    const value = useMemo(
        () => ({
            watchlist,
            showAlert,
            addToWatchlist,
            removeMovieFromWatchlist,
        }),
        [watchlist]
    )

    return (
        <>
            <Snackbar open={showAlert}>
                <Alert severity="warning" sx={{ borderRadius: '1rem' }}>
                    Movie already on the watchlist
                </Alert>
            </Snackbar>
            <WatchlistContext.Provider value={value}>
                {children}
            </WatchlistContext.Provider>
        </>
    )
}

export const useWatchlistContext = () => {
    const context = useContext(WatchlistContext)
    if (!context) throw Error('You`re missing WatchlistContextProvider')
    return context
}

/* --------------------------------- TYPES --------------------------------- */
type WatchlistContextProviderType = {
    children: ReactNode
}
type WatchlistContextType = {
    watchlist: Movie[]
    addToWatchlist: (movie: Movie) => void
    removeMovieFromWatchlist: (movie: Movie) => void
    showAlert: boolean
}
