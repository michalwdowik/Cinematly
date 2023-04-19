export const headingSx = (leftAligned: boolean) => ({
    fontSize: { xs: '40px', md: '70px' },
    fontWeight: 'bold',
    textAlign: `${leftAligned ? 'left' : 'right'} `,
    [`${leftAligned ? 'marginLeft' : 'marginRight'}`]: '80px',
})

export const gradientDividerSx = (leftAligned: boolean) => ({
    background: `${
        leftAligned
            ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,169,0,1) 90%)'
            : 'linear-gradient(90deg, rgba(255,169,0,1) 0%, rgba(255,255,255,1) 90%)'
    }`,
    height: '3px',
    marginLeft: '80px',
    marginRight: '80px',
    marginBottom: '5px',
    marginTop: '5px',
})

export const subheadingBoxSx = (leftAligned: boolean) => ({
    display: 'flex',
    justifyContent: `${leftAligned ? 'right' : 'left'}`,
    marginBottom: '50px',
})

export const subheadingSx = (leftAligned: boolean) => ({
    color: '#fc9803',
    fontSize: { xs: '12px', md: '15px' },
    width: { xs: '60%', md: '33%' },
    textAlign: `${leftAligned ? 'right' : 'left'}`,
    fontWeight: 'bold',
    [`${leftAligned ? 'marginRight' : 'marginLeft'}`]: '80px',
})
