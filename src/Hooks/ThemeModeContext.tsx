import React, { ReactNode, useCallback, useMemo, useState } from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import { ColorMode, ColorModeContext } from './useToggleMode'

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

type ThemeModeContextProps = {
    children: ReactNode
}

const ThemeModeContext = ({ children }: ThemeModeContextProps) => {
    const [colorMode, setColorMode] = useState<ColorMode>('light')

    const toggleColorMode = useCallback(() => {
        setColorMode((prevMode: ColorMode) =>
            prevMode === 'light' ? 'dark' : 'light'
        )
    }, [])

    const theme = createTheme(colorMode === 'light' ? lightTheme : darkTheme)
    const colorModeContextValue = useMemo(
        () => ({ colorMode, toggleColorMode }),
        [colorMode, toggleColorMode]
    )
    return (
        <ColorModeContext.Provider value={colorModeContextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default ThemeModeContext
