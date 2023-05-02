import { ColorMode } from '../Hooks/useToggleMode'

export const appBarSx = (mainThemeColor: string, colorMode: ColorMode) => {
    return {
        bgcolor: `${colorMode === 'dark' ? mainThemeColor : 'green'}`,
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        width: '100vw',
    }
}

export const toolbarSx = {
    height: '50px',
    justifyContent: 'space-between',
}

export const navbarTabSx = {
    color: 'white',
    opacity: 1,
    transition: 'opacity 0.2s ease-in-out',
    '&:hover': {
        opacity: 0.4,
    },
}

export const navbarMenuBoxSx = {
    display: 'flex',
    alignItems: 'center',
}

export const drawerPaperSx = {
    backgroundColor: '#fc9803',
    color: 'white',
}

export const drawerListSx = {
    display: 'flex',
    flexDirection: 'column',
}

export const drawerLinkSx = {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
        opacity: 0.8,
    },
}

export const colorWhite = { color: 'white' }
export const colorBlack = { color: 'black' }
