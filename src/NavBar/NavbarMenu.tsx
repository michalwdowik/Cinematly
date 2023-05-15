/* eslint-disable @typescript-eslint/no-explicit-any */
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import WebsiteLogo from '../Components/WebsiteLogo'
import { websitePages, Page } from '../Helpers/pages'
import Search from '../pages/Search'
import useShowSearchModal from '../Hooks/useShowSearchModal'
import Portal from '../Components/Portal'

const NavbarMenu = () => {
    return (
        <Box sx={navbarMenuStyles}>
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
    return (
        <>
            <Tab
                value={page.label}
                onClick={() => handleShowSearchModal(page.name)}
                sx={navbarTabStyles}
                label={page.name}
                component={Link}
                to={page.name === 'SEARCH' ? (undefined as any) : page.link}
            />
            <Portal>
                {showSearchModal && (
                    <Search handleShowSearchModal={handleShowSearchModal} />
                )}
            </Portal>
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
type NavbarTabProps = {
    page: Page
}
