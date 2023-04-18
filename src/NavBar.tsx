import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Tab, Tabs } from '@mui/material'
import useScreenType from 'react-screentype-hook'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SwitchMode from './SwitchMode'
import NavbarDrawer from './NavbarDrawer'
import WebsiteLogo from './WebsiteLogo'
import pages from './Helpers/pages'
import getPageLink from './Helpers/getPageLink'
import MAIN_THEME_COLOR from './Helpers/colors'

const NavBar = () => {
    const screenType = useScreenType()

    const [value, setValue] = useState<string>(pages[0])
    return (
        <AppBar
            position="sticky"
            sx={{
                bgcolor: MAIN_THEME_COLOR,
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Toolbar
                sx={{
                    height: '50px',
                    justifyContent: 'space-between',
                }}
            >
                {screenType.isMobile ? (
                    <>
                        <NavbarDrawer />
                        <WebsiteLogo />
                    </>
                ) : (
                    <NavbarTabs setValue={setValue} value={value} />
                )}
                <Box>
                    <SwitchMode />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar

type NavbarTabsProps = {
    value: string
    setValue: (value: string) => void
}

const NavbarTabs = ({ value, setValue }: NavbarTabsProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <WebsiteLogo />
            <Tabs
                value={value}
                onChange={(_, val) => setValue(val)}
                textColor="secondary"
                indicatorColor="secondary"
            >
                {pages.map(
                    (page) =>
                        !(page === 'Home') && (
                            <Tab
                                sx={{
                                    color: 'white',
                                    transition: 'opacity 0.2s ease-in-out',
                                    '&:hover': {
                                        opacity: 0.4,
                                    },
                                }}
                                key={page}
                                label={page}
                                component={Link}
                                to={page === 'Home' ? '/' : getPageLink(page)}
                            />
                        )
                )}
            </Tabs>
        </Box>
    )
}
