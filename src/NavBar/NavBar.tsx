import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScreenType from 'react-screentype-hook'
import { useContext, useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import NavbarDrawer from './NavbarDrawer'
import NavbarMenu from './NavbarMenu'
import pages from '../Helpers/pages'
import useThemeColors from '../Hooks/useThemeColors'
import { ThemeContext } from '../Components/ThemeContext'

const NavBar = () => {
    const { toggleDarkMode, backgroundColor } = useContext(ThemeContext)
    const { mainThemeColor } = useThemeColors()
    const screenType = useScreenType()
    const [isDarkMode, setDarkMode] = useState(true)

    const handleColorModeToggle = () => {
        setDarkMode(!isDarkMode)
        toggleDarkMode()
    }
    const [pageLabel, setPageLabel] = useState<string>(
        Object.values(pages)[0].label
    )

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]
        body.style.backgroundColor = backgroundColor
    }, [backgroundColor])

    return (
        <AppBar sx={{ border: 'none', position: 'sticky' }}>
            <Toolbar sx={toolbarStyles(mainThemeColor)}>
                {screenType.isMobile ? (
                    <NavbarDrawer />
                ) : (
                    <NavbarMenu
                        setPageLabel={setPageLabel}
                        pageLabel={pageLabel}
                    />
                )}

                <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={handleColorModeToggle}
                    size={30}
                    moonColor="white"
                    sunColor="white"
                />
            </Toolbar>
        </AppBar>
    )
}
export default NavBar

/* --------------------------------- STYLES --------------------------------- */
const toolbarStyles = (mainThemeColor: string) => {
    return {
        bgcolor: mainThemeColor,
        justifyContent: 'space-between',
        height: '70px',
    }
}
