import { useState } from 'react'

export default function useShowWatchlist() {
    const [showWatchlist, setShowWatchlist] = useState(false)

    const toggleWatchlist = () => {
        setShowWatchlist(!showWatchlist)
    }

    return { toggleWatchlist, showWatchlist, setShowWatchlist }
}
