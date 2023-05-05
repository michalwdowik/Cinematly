import { CSSProperties } from 'react'

// export const upcomingPageBoxSx = () => {
//     return {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignContent: 'center',
//         alignItems: 'center',
//         marginTop: '4rem',
//     }
// }

export const upcomingMovieHeadingSx = {
    top: '30px',
    left: '0',
    minWidth: '150px',
    minHeight: '70px',
    backgroundColor: '#ffa500',
    opacity: '92%',
    borderBottomRightRadius: '15px',
    borderTopRightRadius: '15px',
    position: 'absolute',
    maxWidth: '300px',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignContent: 'center',
}

export const upcomingMovieImageSx = {
    overflow: 'hidden',
    // height: '65%',
}

export const timelineWrapperSx: CSSProperties = {
    borderRadius: '4rem',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: '0',
    boxShadow: '8px 8px 24px -5px rgba(66, 68, 90, 1)',
}

export const timelineWrapperIconSx = (mainThemeColor: string) => {
    return {
        background: mainThemeColor,
        color: '#fff',
    }
}
