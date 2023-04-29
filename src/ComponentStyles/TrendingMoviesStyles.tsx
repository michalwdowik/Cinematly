import { MAIN_THEME_COLOR_SECONDARY } from '../Helpers/colors'

export const watchLaterButtonSx = {
    transitionDuration: '0.3s',
    backgroundColor: 'orange',
    borderRadius: '30px',
    margin: 'auto',
    width: 'auto',
    fontSize: '11px',
    zIndex: '1',
    overflow: 'visible',
    '&:hover': {
        backgroundColor: MAIN_THEME_COLOR_SECONDARY,
    },
}

export const watchLaterButtonSxAbsolute = {
    position: 'absolute',
    top: '-32px',
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
}
