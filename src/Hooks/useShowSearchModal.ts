import { useState } from 'react'

const useShowSearchModal = () => {
    const [showSearchModal, setShowSearchModal] = useState(false)

    const handleShowSearchModal = (
        pageName: string,
        hideDrawer?: () => void
    ) => {
        const searchPage = pageName === 'SEARCH'

        if (hideDrawer) hideDrawer()
        if (searchPage) {
            setShowSearchModal(!showSearchModal)
        } else {
            setShowSearchModal(false)
        }
    }

    return {
        showSearchModal,
        handleShowSearchModal,
    }
}

export default useShowSearchModal
