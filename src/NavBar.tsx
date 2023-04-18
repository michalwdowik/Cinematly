import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import AnimationIcon from '@mui/icons-material/Animation'
import { createTheme, Tab, Tabs, ThemeProvider } from '@mui/material'
import useScreenType from 'react-screentype-hook'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SwitchMode from './SwitchMode'
import TemporaryDrawer from './TemporaryDrawer'

const pages: string[] = ['Home', 'Upcoming', 'Top Rated', 'Favourites']

const NavBar = () => {
    const screenType = useScreenType()

    const theme = createTheme({
        palette: {
            primary: {
                main: '#fc9803',
            },
            secondary: {
                main: '#000000',
            },
        },
    })
    const [value, setValue] = useState<string>(pages[0])
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" sx={{ bgcolor: '#fc9803' }}>
                <Container maxWidth="xl">
                    <Toolbar
                        sx={{ height: '50px', padding: '0px' }}
                        disableGutters
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                padding: 0,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <AnimationIcon
                                sx={{ fontSize: '55px', color: 'white' }}
                            />
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            {screenType.isMobile || screenType.isTablet ? (
                                <TemporaryDrawer pages={pages} />
                            ) : (
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Typography textAlign="center">
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            )}
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <AnimationIcon
                                sx={{ fontSize: '55px', color: 'white' }}
                            />
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            <Tabs
                                value={1}
                                onChange={(e, val) => setValue(val)}
                                textColor="secondary"
                                indicatorColor="secondary"
                                sx={{
                                    '.MuiTabs-indicator': {
                                        bottom: 8,
                                    },
                                }}
                            >
                                {pages.map(
                                    (page) =>
                                        !(page === 'Home') && (
                                            <Tab
                                                sx={{
                                                    my: 2,
                                                    color: 'white',
                                                    display: 'block',
                                                    transition:
                                                        'opacity 0.2s ease-in-out',
                                                    '&:hover': {
                                                        opacity: 0.4,
                                                    },
                                                }}
                                                key={page}
                                                label={page}
                                                component={Link}
                                                to={
                                                    page === 'Home'
                                                        ? '/'
                                                        : `/${page
                                                              .split(' ')
                                                              .join('')
                                                              .toLowerCase()}`
                                                }
                                            />
                                        )
                                )}
                            </Tabs>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <SwitchMode />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}
export default NavBar
