import { CSSProperties } from 'react'
import MAIN_THEME_COLOR from '../Helpers/colors'

export const upcomingPageBoxSx = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '4rem',
    backgroundColor: 'black',
}

export const upcomingMovieHeadingSx = {
    top: '30px',
    left: '0',
    minWidth: '150px',
    minHeight: '70px',
    backgroundColor: '#ffa500',
    opacity: '95%',
    borderBottomRightRadius: '15px',
    borderTopRightRadius: '15px',
    position: 'absolute',
    maxWidth: '300px',
    padding: '5px',
}

export const upcomingMovieImageSx = {
    overflow: 'hidden',
    height: '65%',
}

export const timelineWrapperSx: CSSProperties = {
    height: '400px',
    backgroundColor: 'white',
    borderRadius: '4rem',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: '0',
}

export const timelineWrapperIconSx = {
    background: MAIN_THEME_COLOR,
    color: '#fff',
}
