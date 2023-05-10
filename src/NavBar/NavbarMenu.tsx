import { Box, Tab, Tabs } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import WebsiteLogo from '../Components/WebsiteLogo'
import pages, { Page } from '../Helpers/pages'
import SearchMovies from '../pages/SearchMovies'

const NavbarMenu = ({ pageLabel, setPageLabel }: NavbarProps) => {
    return (
        <Box sx={navbarMenuStyles}>
            <WebsiteLogo navbarLogo />
            <NavbarTabs pageLabel={pageLabel} setPageLabel={setPageLabel} />
        </Box>
    )
}

const NavbarTabs = ({ pageLabel, setPageLabel }: NavbarProps) => {
    return (
        <Tabs
            value={pageLabel}
            onChange={(_, label) => setPageLabel(label)}
            textColor="primary"
            indicatorColor="secondary"
        >
            {Object.values(pages).map(
                (page: Page) =>
                    !(page.label === 'HOME') && (
                        <NavbarTab page={page} key={page.label} />
                    )
            )}
        </Tabs>
    )
}

const NavbarTab = ({ page }: NavbarTabProps) => {
    const [isSearchClicked, setIsSearchClicked] = useState(false)

    const handleClick = () => {
        if (page.label === 'SEARCH') {
            setIsSearchClicked(!isSearchClicked)
        }
    }
    return (
        <>
            <Tab
                sx={navbarTabStyles}
                label={page.label}
                component={Link}
                to={page.label === 'SEARCH' ? (undefined as any) : page.link}
                onClick={handleClick}
            />

            <Box>
                {isSearchClicked && <SearchMovies handleClick={handleClick} />}
            </Box>
        </>
    )
}

export default NavbarMenu

/* --------------------------------- STYLES --------------------------------- */
const navbarTabStyles = {
    color: 'white',
    opacity: 1,
    transition: 'opacity 0.2s ease-in-out',
    '&:hover': {
        opacity: 0.4,
    },
}

const navbarMenuStyles = {
    display: 'flex',
    alignItems: 'center',
}
/* --------------------------------- TYPES --------------------------------- */
type NavbarProps = {
    pageLabel: string
    setPageLabel: (pageLabel: string) => void
}

type NavbarTabProps = {
    page: Page
}
