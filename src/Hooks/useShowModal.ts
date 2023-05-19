/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useModalLogic() {
    const [showModal, setShowModal] = useState(false)
    const [isInitialRender, setIsInitialRender] = useState(true)
    const location = useLocation()

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        if (!isInitialRender) {
            closeModal()
        } else {
            setIsInitialRender(false)
        }
    }, [location.pathname])

    return { showModal, openModal, closeModal }
}
