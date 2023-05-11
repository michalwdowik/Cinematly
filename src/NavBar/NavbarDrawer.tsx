/* eslint-disable @typescript-eslint/no-explicit-any */
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import ListItem from '@mui/material/ListItem'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
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

const DrawerList = ({
    toggleDrawer,
    isDrawerOpen,
    setIsDrawerOpen,
}: DrawerListProps) => {
    const [isSearchClicked, setIsSearchClicked] = useState(false)

    const handleClick = (pageName?: string) => {
        setIsDrawerOpen(false)
        if (pageName === 'SEARCH') {
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
                        key={page.name}
                    >
                        <Tab
                            onClick={() => handleClick(page.name)}
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
                                        {page.name}
                                    </Typography>
                                </Box>
                            }
                            component={Link}
                            to={
                                page.name === 'SEARCH'
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

/* --------------------------------- STYLES --------------------------------- */
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
/* --------------------------------- TYPES --------------------------------- */
type DrawerListProps = {
    toggleDrawer: (open: boolean) => () => void
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    isDrawerOpen: boolean
}
