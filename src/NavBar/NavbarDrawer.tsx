import Button from '@mui/material/Button'
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
            <Button
                sx={navbarDrawerButtonStyles}
                onClick={toggleDrawer(true)}
                aria-label="Toggle drawer menu"
            >
                <MenuIcon sx={{ color: 'white' }} />
            </Button>
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

/* --------------------------------- STYLES --------------------------------- */

const navbarDrawerButtonStyles = { padding: '0', marginLeft: '-16px' }
