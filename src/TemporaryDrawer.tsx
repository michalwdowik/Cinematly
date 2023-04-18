import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import MenuIcon from '@mui/icons-material/Menu'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import { Fragment, useState } from 'react'

type Anchor = 'top'

type DrawerProps = {
    pages: string[]
}

const TemporaryDrawer = ({ pages }: DrawerProps) => {
    const [state, setState] = useState({
        top: false,
    })

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            setState({ ...state, [anchor]: open })
        }

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {pages.map((page: string) => (
                    <ListItem key={page} disablePadding>
                        <ListItemButton
                            href={
                                page === 'Home'
                                    ? '/'
                                    : `/${page
                                          .split(' ')
                                          .join('')
                                          .toLowerCase()}`
                            }
                        >
                            <ListItemIcon sx={{ color: 'white' }}>
                                {page === 'Home' && <HomeIcon />}
                                {page === 'Upcoming' && <AccessTimeIcon />}
                                {page === 'Top Rated' && <EmojiEventsIcon />}
                                {page === 'Favourites' && <FavoriteIcon />}
                            </ListItemIcon>
                            <ListItemText primary={page} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <div>
            <Fragment key="top">
                <Button onClick={toggleDrawer('top', true)}>
                    <MenuIcon sx={{ color: 'white' }} />
                </Button>
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
                    {list('top')}
                </Drawer>
            </Fragment>
        </div>
    )
}

export default TemporaryDrawer
