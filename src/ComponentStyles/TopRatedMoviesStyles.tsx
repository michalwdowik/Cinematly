export const topRatedPageBoxSx = {
    marginTop: '3rem',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
}

export const topRatedMovieCardsSx = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    alignContent: 'center',
}

export const topRatedMovieRatingSx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
    right: '0',
    fontSize: '1.3rem',
    padding: '1rem',
    fontWeight: '900',
}

export const topRatedMovieTitleSx = (title: string) => ({
    fontFamily: 'Roboto Slab, serif',
    fontWeight: '500',
    color: 'black',
    fontSize: title.length > 23 ? '1.7rem' : '2rem',
})

export const topRatedMovieReleaseDateSx = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
}

export const topRatedMovieHeadingsSx = {
    height: '30%',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    padding: '1rem',
    backgroundColor: 'white',
}

export const detailsDividerSx = {
    backgroundColor: 'white',
    width: '30%',
    margin: 'auto',
    opacity: '30%',
    height: '1px',
}
