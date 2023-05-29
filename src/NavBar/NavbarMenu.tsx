/* eslint-disable @typescript-eslint/no-explicit-any */
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import WebsiteLogo from '../Components/WebsiteLogo'
import { websitePages, Page } from '../Helpers/pages'
import SearchMoviesPanel from '../SearchedMovies/SearchMoviesPanel'
import useModalLogic from '../Hooks/useShowModal'

const NavbarMenu = () => {
    return (
        <nav className="navbar-menu">
            <WebsiteLogo navbarLogo />
            <NavbarTabs />
        </nav>
    )
}

const NavbarTabs = () => {
    const isHomePage = (page: Page) => page.name === 'HOME'

    return (
        <ul>
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
        </ul>
    )
}

const NavbarTab = ({ page }: NavbarTabProps) => {
    const isSearchPage = page.name === 'SEARCH'
    const pageLink = isSearchPage ? (undefined as any) : page.link
    const { showModal, closeModal, openModal } = useModalLogic()

    return (
        <li>
            <Tab
                value={page.label}
                onClick={isSearchPage ? openModal : () => null}
                label={page.name}
                component={Link}
                to={pageLink}
                sx={{
                    opacity: '1',
                    transition: 'opacity 0.2s',
                    '&:hover': { opacity: '0.5' },
                }}
                className="navbar-tab"
            />
            <SearchMoviesPanel showModal={showModal} closeModal={closeModal} />
        </li>
    )
}

export default NavbarMenu

/* --------------------------------- TYPES --------------------------------- */
type NavbarTabProps = {
    page: Page
}
