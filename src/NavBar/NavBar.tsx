import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScreenType from 'react-screentype-hook'
import { useContext, useState } from 'react'
// import SwitchMode from '../Components/SwitchMode'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import NavbarDrawer from './NavbarDrawer'
import NavbarMenu from './NavbarMenu'
import pages from '../Helpers/pages'
import { appBarSx, toolbarSx } from '../ComponentStyles/NavbarStyles'
import useThemeColors from '../Hooks/useThemeColors'
import { ColorModeContext } from '../Hooks/useToggleMode'
import SearchButton from '../SearchedMovies/SearchButton'

const NavBar = () => {
    const { mainThemeColor } = useThemeColors()
    const screenType = useScreenType()
    const [isDarkMode, setDarkMode] = useState(false)

    const { colorMode, toggleColorMode } = useContext(ColorModeContext)

    const handleColorModeToggle = () => {
        setDarkMode(!isDarkMode)
        toggleColorMode()
    }
    const [pageLabel, setPageLabel] = useState<string>(
        Object.values(pages)[0].label
    )

    return (
        <AppBar sx={appBarSx(mainThemeColor, colorMode)}>
            <Toolbar sx={toolbarSx}>
                {screenType.isMobile ? (
                    <NavbarDrawer />
                ) : (
                    <NavbarMenu
                        setPageLabel={setPageLabel}
                        pageLabel={pageLabel}
                    />
                )}

                <SearchButton />
                <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={handleColorModeToggle}
                    sunColor="white"
                    moonColor="black"
                    size={screenType.isMobile ? 30 : 40}
                />
            </Toolbar>
        </AppBar>
    )
}
export default NavBar
