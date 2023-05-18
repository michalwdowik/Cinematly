/* eslint-disable @typescript-eslint/no-explicit-any */
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import WebsiteLogo from '../Components/WebsiteLogo'
import { websitePages, Page } from '../Helpers/pages'
import Search from '../SearchedMovies/Search'
import useShowSearchModal from '../Hooks/useShowSearchModal'
import Portal from '../Components/Portal'

const NavbarMenu = () => {
    return (
        <Box className="navbarMenu">
            <WebsiteLogo navbarLogo />
            <NavbarTabs />
        </Box>
    )
}

const NavbarTabs = () => {
    return (
        <Tabs
            value={0}
            textColor="primary"
            TabIndicatorProps={{
                style: { display: 'none' },
                color: 'none',
            }}
        >
            {websitePages.map(
                (page) =>
                    !(page.name === 'HOME') && (
                        <NavbarTab page={page} key={page.label} />
                    )
            )}
        </Tabs>
    )
}

const NavbarTab = ({ page }: NavbarTabProps) => {
    const { showSearchModal, handleShowSearchModal } = useShowSearchModal()
    const pageLink = page.name === 'SEARCH' ? (undefined as any) : page.link
    return (
        <>
            <Tab
                value={page.label}
                onClick={() => handleShowSearchModal(page.name)}
                sx={navbarTabStyles}
                label={page.name}
                component={Link}
                to={pageLink}
            />
            {showSearchModal && (
                <Portal id="searchMovie">
                    <Search handleShowSearchModal={handleShowSearchModal} />
                </Portal>
            )}
        </>
    )
}

export default NavbarMenu

/* --------------------------------- STYLES --------------------------------- */
const navbarTabStyles = {
    color: 'white',
    opacity: '1',
    transition: 'opacity 0.2s ease-in-out',
    '&:hover': { opacity: '0.4' },
}

/* --------------------------------- TYPES --------------------------------- */
type NavbarTabProps = {
    page: Page
}
