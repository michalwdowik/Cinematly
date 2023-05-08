import { useEffect, useRef, useState } from 'react'
import { Movie } from '../MovieCard/types'

const useWatchlistButtonAnimation = (watchlist: Movie[]): boolean => {
    const [animateAdd, setAnimateAdd] = useState(false)
    const prevLengthRef = useRef(watchlist.length)

    useEffect(() => {
        if (watchlist.length > prevLengthRef.current) {
            setAnimateAdd(true)
            setTimeout(() => {
                setAnimateAdd(false)
            }, 1000)
        }
        prevLengthRef.current = watchlist.length
    }, [watchlist.length])

    return animateAdd
}

export default useWatchlistButtonAnimation
