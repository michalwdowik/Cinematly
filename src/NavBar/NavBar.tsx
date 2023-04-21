import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScreenType from 'react-screentype-hook'
import { useState } from 'react'
import SwitchMode from '../Components/SwitchMode'
import NavbarDrawer from './NavbarDrawer'
import NavbarMenu from './NavbarMenu'
import pages from '../Helpers/pages'
import { appBarSx, toolbarSx } from '../ComponentStyles/NavbarStyles'

const NavBar = () => {
    const screenType = useScreenType()
    const [pageLabel, setPageLabel] = useState<string>(
        Object.values(pages)[0].label
    )

    return (
        <AppBar sx={appBarSx}>
            <Toolbar sx={toolbarSx}>
                {screenType.isMobile ? (
                    <NavbarDrawer />
                ) : (
                    <NavbarMenu
                        setPageLabel={setPageLabel}
                        pageLabel={pageLabel}
                    />
                )}
                <SwitchMode />
            </Toolbar>
        </AppBar>
    )
}
export default NavBar
