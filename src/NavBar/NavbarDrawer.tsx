import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Link, ListItem } from '@mui/material'
import pages from '../Helpers/pages'
import WebsiteLogo from '../Components/WebsiteLogo'
import {
    colorWhite,
    drawerLinkSx,
    drawerListSx,
    drawerPaperSx,
} from '../Styles/ComponentSXS'
import { DrawerListProps } from '../types/NavbarTypes'

const NavbarDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open)
    }
    return (
        <>
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon sx={colorWhite} />
            </Button>
            <DrawerList
                toggleDrawer={toggleDrawer}
                isDrawerOpen={isDrawerOpen}
            />
            <WebsiteLogo />
        </>
    )
}

export default NavbarDrawer

const DrawerList = ({ toggleDrawer, isDrawerOpen }: DrawerListProps) => {
    return (
        <Drawer
            anchor="top"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{ sx: drawerPaperSx }}
        >
            <List sx={drawerListSx}>
                {Object.values(pages).map((page) => (
                    <ListItem key={page.label}>
                        <Link href={page.link} sx={drawerLinkSx}>
                            {page.icon} {page.label}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
