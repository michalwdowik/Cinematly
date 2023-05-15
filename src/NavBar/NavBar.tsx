import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScreenType from 'react-screentype-hook'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import NavbarDrawer from './NavbarDrawer'
import NavbarMenu from './NavbarMenu'
import useModeToggle from '../Hooks/useModeToggle'

const NavBar = () => {
    const screenType = useScreenType()
    const { isDarkMode, handleColorModeToggle, mainThemeColor } =
        useModeToggle()

    return (
        <AppBar sx={appBarStyles}>
            <Toolbar sx={toolbarStyles(mainThemeColor)}>
                {screenType.isMobile ? <NavbarDrawer /> : <NavbarMenu />}

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
const appBarStyles = { border: 'none', position: 'sticky' }
const toolbarStyles = (mainThemeColor: string) => {
    return {
        bgcolor: mainThemeColor,
        justifyContent: 'space-between',
        height: '70px',
    }
}
