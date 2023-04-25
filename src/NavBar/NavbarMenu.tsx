import { Box, Tab, Tabs } from '@mui/material'
import { Link } from 'react-router-dom'
import WebsiteLogo from '../Components/WebsiteLogo'
import pages from '../Helpers/pages'
import { Page, NavbarProps, NavbarTabProps } from '../types/NavbarTypes'
import { navbarMenuBoxSx, navbarTabSx } from '../ComponentStyles/NavbarStyles'

const NavbarMenu = ({ pageLabel, setPageLabel }: NavbarProps) => {
    return (
        <Box sx={navbarMenuBoxSx}>
            <WebsiteLogo />
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
                    !(page.label === 'Home') && (
                        <NavbarTab page={page} key={page.label} />
                    )
            )}
        </Tabs>
    )
}

const NavbarTab = ({ page }: NavbarTabProps) => {
    return (
        <Tab
            sx={navbarTabSx}
            label={page.label}
            component={Link}
            to={page.link}
        />
    )
}

export default NavbarMenu
