/* eslint-disable @typescript-eslint/no-explicit-any */
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import WebsiteLogo from '../Components/WebsiteLogo'
import { websitePages, Page } from '../Helpers/pages'
import SearchMoviesPanel from '../SearchedMovies/SearchMoviesPanel'
import useModalLogic from '../Hooks/useShowModal'

const NavbarMenu = () => {
    return (
        <Box className="navbarMenu">
            <WebsiteLogo navbarLogo />
            <NavbarTabs />
        </Box>
    )
}

const NavbarTabs = () => {
    const isHomePage = (page: Page) => page.name === 'HOME'

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
                    !isHomePage(page) && (
                        <NavbarTab page={page} key={page.label} />
                    )
            )}
        </Tabs>
    )
}

const NavbarTab = ({ page }: NavbarTabProps) => {
    const isSearchPage = page.name === 'SEARCH'
    const pageLink = isSearchPage ? (undefined as any) : page.link
    const { showModal, closeModal, openModal } = useModalLogic()

    return (
        <>
            <Tab
                value={page.label}
                onClick={isSearchPage ? openModal : () => null}
                label={page.name}
                component={Link}
                to={pageLink}
                className="navbarTab"
            />
            <SearchMoviesPanel showModal={showModal} closeModal={closeModal} />
        </>
    )
}

export default NavbarMenu

/* --------------------------------- TYPES --------------------------------- */
type NavbarTabProps = {
    page: Page
}
