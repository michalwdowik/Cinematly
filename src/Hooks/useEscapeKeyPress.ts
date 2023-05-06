import { useEffect } from 'react'

const useEscapeKeyPress = (
    showWatchlist: boolean,
    setOpen: (value: boolean) => void
): void => {
    useEffect(() => {
        const handleEscapeKeyPress = (event: KeyboardEvent): void => {
            if (event.key === 'Escape' && showWatchlist) {
                setOpen(false)
            }
        }

        document.addEventListener('keydown', handleEscapeKeyPress)

        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress)
        }
    }, [showWatchlist, setOpen])
}

export default useEscapeKeyPress
