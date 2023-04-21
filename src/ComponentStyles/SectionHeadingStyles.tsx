export const headingSx = (leftAligned: boolean) => ({
    fontSize: { xs: '40px', sm: '55px', md: '80px' },
    fontWeight: 'bold',
    alignSelf: `${leftAligned ? 'flex-start' : 'flex-end'}`,
    textAlign: `${leftAligned ? 'left' : 'right'} `,
    marginBottom: '-5px',
})

export const gradientDividerSx = (leftAligned: boolean) => ({
    background: `${
        leftAligned
            ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,169,0,1) 90%)'
            : 'linear-gradient(90deg, rgba(255,169,0,1) 0%, rgba(255,255,255,1) 90%)'
    }`,
    height: '3px',
    width: '100%',
})

export const subheadingBoxSx = (leftAligned: boolean) => ({
    display: 'flex',
    justifyContent: `${leftAligned ? 'right' : 'left'}`,
    alignSelf: `${leftAligned ? 'flex-end' : 'flex-start'}`,
})

export const subheadingSx = (leftAligned: boolean) => ({
    color: '#fc9803',
    fontSize: { xs: '12px', md: '15px' },
    width: { xs: '75%', sm: '55%', md: '60%' },
    textAlign: `${leftAligned ? 'right' : 'left'}`,
    fontWeight: 'bold',
    alignSelf: `${leftAligned ? 'flex-end' : 'flex-start'}`,
})

export const sectionHeadingSx = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '80vw',
    marginBottom: '5rem',
}
