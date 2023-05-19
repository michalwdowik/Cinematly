import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import WebsiteLogo from '../Components/WebsiteLogo'
import DrawerList from './DrawerList'

const NavbarDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const showDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }
    const hideDrawer = () => setIsDrawerOpen(false)

    return (
        <>
            <button
                type="button"
                className="drawerButton"
                onClick={showDrawer}
                aria-label="Toggle drawer menu"
            >
                <MenuIcon sx={{ color: 'white' }} />
            </button>
            <DrawerList hideDrawer={hideDrawer} isDrawerOpen={isDrawerOpen} />
            <WebsiteLogo navbarLogo />
        </>
    )
}

export default NavbarDrawer
