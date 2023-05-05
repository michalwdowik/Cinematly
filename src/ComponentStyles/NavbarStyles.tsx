export const toolbarSx = (mainThemeColor: string) => {
    return {
        bgcolor: mainThemeColor,
        justifyContent: 'space-between',
        height: '70px',
    }
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
