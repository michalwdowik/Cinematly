import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import MenuIcon from '@mui/icons-material/Menu'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import { useState } from 'react'
import getPageLink from './Helpers/getPageLink'

type Anchor = 'top'
const pages: { [key: string]: React.ReactNode } = {
    Home: <HomeIcon />,
    Upcoming: <AccessTimeIcon />,
    'Top Rated': <EmojiEventsIcon />,
    Favourites: <FavoriteIcon />,
}
const NavbarDrawer = () => {
    const [state, setState] = useState({
        top: false,
    })

    const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
        setState({ ...state, [anchor]: open })
    }
    return (
        <>
            <Button onClick={toggleDrawer('top', true)}>
                <MenuIcon sx={{ color: 'white' }} />
            </Button>
            <DrawerMenu toggleDrawer={toggleDrawer} state={state} />
        </>
    )
}

export default NavbarDrawer

type DrawerMenuProps = {
    toggleDrawer: (anchor: Anchor, open: boolean) => () => void
    state: {
        top: boolean
    }
}

const DrawerMenu = ({ toggleDrawer, state }: DrawerMenuProps) => {
    return (
        <Drawer
            anchor="top"
            open={state.top}
            onClose={toggleDrawer('top', false)}
            PaperProps={{
                sx: {
                    backgroundColor: '#fc9803',
                    color: 'white',
                },
            }}
        >
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {Object.entries(pages).map(([page, icon]) => (
                    <ListItem key={page} disablePadding>
                        <ListItemButton
                            href={page === 'Home' ? '/' : getPageLink(page)}
                        >
                            <ListItemIcon sx={{ color: 'white' }}>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={page} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
