import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScreenType from 'react-screentype-hook'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import NavbarDrawer from './NavbarDrawer'
import NavbarMenu from './NavbarMenu'
import useBackgroundThemeToggle from '../Hooks/useBackgroundThemeToggle'
import '../Styles/navbar.css'

const NavBar = () => {
    const screenType = useScreenType()
    const { isDarkMode, handleColorModeToggle } = useBackgroundThemeToggle()

    return (
        <AppBar sx={{ border: 'none', position: 'fixed' }}>
            <Toolbar className="toolbar">
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
