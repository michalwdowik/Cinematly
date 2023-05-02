import { useState } from 'react'

const useThemeColors = () => {
    const [mainThemeColor, setMainThemeColor] = useState('#fc9803')
    const [mainThemeColorSecondary, setMainThemeColorSecondary] =
        useState('#fc7703')

    return {
        mainThemeColor,
        setMainThemeColor,
        mainThemeColorSecondary,
        setMainThemeColorSecondary,
    }
}
export default useThemeColors
