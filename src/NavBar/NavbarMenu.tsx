import { Box, Tab, Tabs } from '@mui/material'
import { Link } from 'react-router-dom'
import WebsiteLogo from '../Components/WebsiteLogo'
import pages from '../Helpers/pages'
import {
    Page,
    NavbarMenuProps,
    NavbarTabProps,
    NavbarTabsProps,
} from '../types/NavbarTypes'
import { navbarMenuBoxSx, navbarTabSx } from '../ComponentStyles/NavbarStyles'

const NavbarMenu = ({ pageLabel, setPageLabel }: NavbarMenuProps) => {
    return (
        <Box sx={navbarMenuBoxSx}>
            <WebsiteLogo />
            <NavbarTabs pageLabel={pageLabel} setPageLabel={setPageLabel} />
        </Box>
    )
}

const NavbarTabs = ({ pageLabel, setPageLabel }: NavbarTabsProps) => {
    return (
        <Tabs
            value={pageLabel}
            onChange={(_, label) => setPageLabel(label)}
            textColor="secondary"
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
