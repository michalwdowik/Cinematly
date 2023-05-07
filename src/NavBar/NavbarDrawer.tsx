import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Box, ListItem, Tab, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import pages from '../Helpers/pages'
import WebsiteLogo from '../Components/WebsiteLogo'
import SearchMovies from '../pages/SearchMovies'

const NavbarDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open)
    }
    return (
        <>
            <Button
                sx={{ padding: '0', marginLeft: '-16px' }}
                onClick={toggleDrawer(true)}
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

const DrawerList = ({
    toggleDrawer,
    isDrawerOpen,
    setIsDrawerOpen,
}: DrawerListProps) => {
    const [isSearchClicked, setIsSearchClicked] = useState(false)

    const handleClick = (pageLabel?: string) => {
        setIsDrawerOpen(false)
        if (pageLabel === 'SEARCH') {
            setIsSearchClicked(!isSearchClicked)
        }
    }

    return (
        <>
            <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{ sx: drawerPaperStyles }}
            >
                {Object.values(pages).map((page) => (
                    <ListItem
                        sx={{
                            padding: '0',
                            margin: '0',
                        }}
                        key={page.label}
                    >
                        <Tab
                            onClick={() => handleClick(page.label)}
                            key={page.label}
                            label={
                                <Box
                                    sx={{
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                    }}
                                >
                                    {page.icon}
                                    <Typography
                                        sx={{ opacity: '1', color: 'white' }}
                                        variant="body2"
                                    >
                                        {page.label}
                                    </Typography>
                                </Box>
                            }
                            component={Link}
                            to={
                                page.label === 'SEARCH'
                                    ? (undefined as any)
                                    : page.link
                            }
                            sx={drawerLinkStyles}
                        />
                    </ListItem>
                ))}
            </Drawer>
            {isSearchClicked && <SearchMovies handleClick={handleClick} />}
        </>
    )
}

const drawerPaperStyles = {
    backgroundColor: '#fc9803',
}

const drawerLinkStyles = {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
        opacity: 0.8,
    },
}

type DrawerListProps = {
    toggleDrawer: (open: boolean) => () => void
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    isDrawerOpen: boolean
}
