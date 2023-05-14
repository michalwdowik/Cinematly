/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { Movie } from '../MovieCard/types'
import WatchlistAlert from '../Components/WatchlistAlert'

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

    const isMovieOnWatchlist = (movieId: string) =>
        watchlist.some((movie) => movie.id === movieId)

    const addToWatchlist = (movie: Movie) => {
        if (!isMovieOnWatchlist(movie.id)) {
            setWatchlist([...watchlist, movie])
        } else {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 2000)
        }
    }

    const removeMovieFromWatchlist = (movie: Movie) => {
        setWatchlist(watchlist.filter((m) => movie.id !== m.id))
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
            <WatchlistAlert showAlert={showAlert} />
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
