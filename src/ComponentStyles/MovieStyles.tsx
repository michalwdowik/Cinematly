export const movieTitleSx = {
    color: 'white',
    fontWeight: '900',
    marginBottom: '0.4rem',
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
    bottom: '0',
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
    marginLeft: '1rem',
    fontSize: {
        xs: '12px',
        sm: '12px',
        md: '15px',
        lg: '20px',
        xl: '22px',
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
    transition: 'opacity .3s',
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
    marginBottom: '1rem',
    color: 'white',
    fontSize: {
        xs: '17px',
        sm: '21px',
        md: '27px',
        lg: '33px',
    },
    marginLeft: {
        xs: '13px',
        sm: '0px',
        md: '0px',
    },
}
