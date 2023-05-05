/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, createContext, useMemo, useState } from 'react'

interface ThemeContextProps {
    isDarkMode: boolean
    toggleDarkMode: () => void
    backgroundColor: string
    textColor: string
    mainThemeColor: string
}

export const ThemeContext = createContext<ThemeContextProps>({
    isDarkMode: false,
    toggleDarkMode: () => {},
    backgroundColor: 'black',
    textColor: 'white',
    mainThemeColor: '#fc9803',
})

type ThemeProviderProps = {
    children: ReactNode
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const theme = useMemo(
        () => ({
            isDarkMode,
            toggleDarkMode,
            backgroundColor: isDarkMode ? '#F3F3F3' : '#0d0d0d',
            textColor: isDarkMode ? '#0d0d0d' : '#F3F3F3',
            mainThemeColor: '#fc9803',
        }),
        [isDarkMode]
    )

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider
