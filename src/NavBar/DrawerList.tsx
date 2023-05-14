/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Drawer, ListItem, Tab, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchMovies from '../SearchedMovies/SearchMovies'
import { ThemeContext } from '../Components/ThemeContext'
import pages, { Page } from '../Helpers/pages'

const DrawerList = ({
    toggleDrawer,
    isDrawerOpen,
    setIsDrawerOpen,
}: DrawerListProps) => {
    const [isSearchClicked, setIsSearchClicked] = useState(false)
    const { mainThemeColor } = useContext(ThemeContext)
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
                PaperProps={{ sx: { backgroundColor: mainThemeColor } }}
            >
                {Object.values(pages).map((page) => (
                    <ListItem sx={drawerListItemStyles} key={page.name}>
                        <Tab
                            onClick={() => handleClick(page.name)}
                            key={page.label}
                            label={<DrawerListItemRow page={page} />}
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

export default DrawerList

type DrawerListItemRowProps = {
    page: Page
}

const DrawerListItemRow = ({ page }: DrawerListItemRowProps) => {
    return (
        <Box sx={drawerListItemRowStyles}>
            {page.icon}
            <Typography variant="body2">{page.name}</Typography>
        </Box>
    )
}

/* --------------------------------- STYLES --------------------------------- */

const drawerLinkStyles = {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
        opacity: 0.8,
    },
}

const drawerListItemStyles = {
    padding: '0',
    margin: '0',
}

const drawerListItemRowStyles = {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
}
/* --------------------------------- TYPES --------------------------------- */
type DrawerListProps = {
    toggleDrawer: (open: boolean) => () => void
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    isDrawerOpen: boolean
}
