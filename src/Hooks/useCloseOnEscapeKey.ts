/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

const useCloseOnEscapeKey = ({ closeModal }: UseCloseOnEscapeKeyProps) => {
    useEffect(() => {
        const closeModalOnEscapeKey = (event: KeyboardEvent) => {
            const escapeClicked = event.key === 'Escape'
            if (escapeClicked) {
                const modal = document.getElementById(
                    'trendingMovie'
                ) as HTMLInputElement | null

                if (modal) modal.checked = false
                closeModal()
            }
        }
        document.addEventListener('keydown', closeModalOnEscapeKey)
        return () => {
            document.removeEventListener('keydown', closeModalOnEscapeKey)
        }
    }, [])
}

export default useCloseOnEscapeKey

type UseCloseOnEscapeKeyProps = {
    closeModal: () => void
}
