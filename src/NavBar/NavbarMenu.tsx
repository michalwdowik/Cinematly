import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import WebsiteLogo from '../Components/WebsiteLogo'
import pages, { Page } from '../Helpers/pages'

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
            TabIndicatorProps={{
                style: { display: 'none' },
                color: 'none',
            }}
        >
            {Object.values(pages).map(
                (page: Page) =>
                    !(page.name === 'HOME') && (
                        <NavbarTab page={page} key={page.label} />
                    )
            )}
        </Tabs>
    )
}

const NavbarTab = ({ page }: NavbarTabProps) => {
    return (
        <Tab
            sx={navbarTabStyles}
            label={page.name}
            component={Link}
            to={page.link}
        />
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
    pageLabel: number
    setPageLabel: (pageLabel: number) => void
}

type NavbarTabProps = {
    page: Page
}
