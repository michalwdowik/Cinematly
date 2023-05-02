import React from 'react'

export type ColorMode = 'light' | 'dark'

interface ColorModeContextProps {
    colorMode: ColorMode
    toggleColorMode: () => void
}

export const ColorModeContext = React.createContext<ColorModeContextProps>({
    colorMode: 'light',
    toggleColorMode: () => {},
})
