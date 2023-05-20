import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

const useBackgroundThemeToggle = () => {
    const { toggleDarkTheme, backgroundColor } = useContext(ThemeContext)
    const [isDarkMode, setDarkMode] = useState(true)

    const handleColorModeToggle = () => {
        setDarkMode(!isDarkMode)
        toggleDarkTheme()
    }

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]
        body.style.backgroundColor = backgroundColor
    }, [backgroundColor])

    return { isDarkMode, handleColorModeToggle }
}

export default useBackgroundThemeToggle
