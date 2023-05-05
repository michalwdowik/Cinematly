export const watchLaterButtonSx = (mainThemeColorSecondary: string) => {
    return {
        transitionDuration: '0.3s',
        backgroundColor: 'orange',
        borderRadius: '30px',
        margin: 'auto',
        width: 'auto',
        fontSize: '11px',
        zIndex: '1',
        overflow: 'visible',
        '&:hover': {
            backgroundColor: mainThemeColorSecondary,
        },
    }
}

export const watchLaterButtonSxAbsolute = {
    position: 'absolute',
    top: '-2rem',
    right: '0px',
    alignSelf: 'end',
}

export const movieDetailsModalSx = {
    fontWeight: 'bold',
    display: 'inline',
}

export const movieModalDetailsSx = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem',
    paddingTop: '0',
}
