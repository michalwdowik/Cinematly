/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, createContext, useMemo, useState } from 'react'

export const ThemeContext = createContext<ThemeContextProps>({
    isDarkMode: false,
    toggleDarkMode: () => {},
    backgroundColor: 'black',
    textColor: 'white',
    mainThemeColor: '#fc9803',
    mainThemeColorSecondary: '#fc7703',
})

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const theme = useMemo(
        () => ({
            isDarkMode,
            toggleDarkMode,
            backgroundColor: isDarkMode ? '#F3F3F3' : '#121212',
            textColor: isDarkMode ? '#121212' : '#F3F3F3',
            mainThemeColor: '#fc9803',
            mainThemeColorSecondary: '#fc7703',
        }),
        [isDarkMode]
    )

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider

/* --------------------------------- TYPES --------------------------------- */
type ThemeProviderProps = {
    children: ReactNode
}

interface ThemeContextProps {
    isDarkMode: boolean
    toggleDarkMode: () => void
    backgroundColor: string
    textColor: string
    mainThemeColor: string
    mainThemeColorSecondary: string
}
