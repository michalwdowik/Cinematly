import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScreenType from 'react-screentype-hook'
import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import NavbarDrawer from './NavbarDrawer'
import NavbarMenu from './NavbarMenu'
import pages from '../Helpers/pages'
import useModeToggle from '../Hooks/useModeToggle'

const NavBar = () => {
    const screenType = useScreenType()
    const { isDarkMode, handleColorModeToggle, mainThemeColor } =
        useModeToggle()
    const [pageLabel, setPageLabel] = useState<number>(
        Object.values(pages)[0].label
    )

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
