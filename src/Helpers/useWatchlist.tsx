import { useState } from 'react'

export default function useWatchlist() {
    const [showWatchlist, setShowWatchlist] = useState(false)

    const openWatchlist = () => {
        setShowWatchlist(true)
    }

    const closeWatchlist = () => {
        setShowWatchlist(false)
    }

    return { showWatchlist, openWatchlist, closeWatchlist }
}
