import MAIN_THEME_COLOR from '../Helpers/colors'

export const appBarSx = {
    bgcolor: MAIN_THEME_COLOR,
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
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
