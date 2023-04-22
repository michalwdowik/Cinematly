export const movieTitleSx = {
    color: 'white',
    fontWeight: '900',
    marginBottom: '1rem',
    textAlign: 'left',
    width: '55%',
    fontSize: {
        xs: '24px',
        sm: '32px',
        md: '45px',
        lg: '55px',
    },
    marginLeft: {
        xs: '13px',
        sm: '0px',
        md: '0px',
    },
}

export const movieOverviewSx = {
    color: 'white',
    fontStyle: 'italic',
    fontSize: '1rem',
    marginRight: '10px',
    display: 'flex',
    textAlign: 'left',
    width: {
        xs: '70vh',
        sm: '70vh',
        md: '60vh',
        lg: '50vh',
    },
}

export const starIconSx = {
    color: 'white',
    fontSize: {
        xs: '14px',
        md: '16px',
        lg: '20px',
    },
}

export const carouselOverlaySx = {
    position: 'absolute',
    bottom: '0px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundImage: 'linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1))',
    opacity: '0.9',
    transition: 'opacity 0.3s',
    padding: {
        xs: '0rem',
        sm: '3rem',
        md: '4rem',
        lg: '5rem',
    },
    ':hover': {
        opacity: '1',
    },
}

export const movieReleaseDateSx = {
    display: 'flex',
    gap: '25px',
    marginBottom: '1rem',
    alignItems: 'center',
    color: 'white',
    fontSize: {
        xs: '14px',
        sm: '18px',
        lg: '18px',
    },
    marginLeft: {
        xs: '13px',
        sm: '0px',
        md: '0px',
    },
}

export const movieDetailsSx = {
    position: 'absolute',
    bottom: {
        lg: '15%',
        md: '10%',
    },
}

export const movieRatingSx = {
    display: 'flex',
    padding: '0',
    alignItems: 'center',
    justifyContent: 'center',
}

// TOP RATED PAGE

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
}

export const detailsDividerSx = {
    backgroundColor: 'white',
    width: '30%',
    margin: 'auto',
    opacity: '30%',
    height: '1px',
}
