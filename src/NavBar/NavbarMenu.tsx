import { Box, Tab, Tabs } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import WebsiteLogo from '../Components/WebsiteLogo'
import pages from '../Helpers/pages'
import { Page, NavbarProps, NavbarTabProps } from '../types/NavbarTypes'
import { navbarMenuBoxSx, navbarTabSx } from '../ComponentStyles/NavbarStyles'
import SearchMovies from '../pages/SearchMovies'

const NavbarMenu = ({ pageLabel, setPageLabel }: NavbarProps) => {
    return (
        <Box sx={navbarMenuBoxSx}>
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
                sx={navbarTabSx}
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
