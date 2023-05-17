import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import WebsiteLogo from '../Components/WebsiteLogo'
import DrawerList from './DrawerList'

const NavbarDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open)
    }
    return (
        <>
            <button
                type="button"
                className="drawerButton"
                onClick={toggleDrawer(true)}
                aria-label="Toggle drawer menu"
            >
                <MenuIcon sx={{ color: 'white' }} />
            </button>
            <DrawerList
                toggleDrawer={toggleDrawer}
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
            />
            <WebsiteLogo navbarLogo />
        </>
    )
}

export default NavbarDrawer
