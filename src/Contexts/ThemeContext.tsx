/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, createContext, useMemo, useState } from 'react'

export const ThemeContext = createContext<ThemeContextProps>({
    isDarkTheme: false,
    toggleDarkTheme: () => {},
    backgroundColor: '',
    textColor: '',
})

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    const theme = useMemo(
        () => ({
            isDarkTheme,
            toggleDarkTheme,
            backgroundColor: isDarkTheme ? '#F3F3F3' : '#121212',
            textColor: isDarkTheme ? '#121212' : '#F3F3F3',
        }),
        [isDarkTheme]
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
    isDarkTheme: boolean
    toggleDarkTheme: () => void
    backgroundColor: string
    textColor: string
}
