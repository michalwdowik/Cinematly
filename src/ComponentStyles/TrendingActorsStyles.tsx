import { SpringValue } from '@react-spring/web'

export const fontSize14px = { fontSize: '14px' }

export const knownForBoxSx = {
    fontSize: '16px',
    color: '#fc7b03',
    fontWeight: 'bold',
}

export const actorImageSx = (url: string) => ({
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '50px',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${url})`,
    boxShadow: '8px 8px 12px -5px rgba(0, 0, 0, 1)',
})

export const actorDetailsSx = {
    width: '100%',
    height: '100%',
    padding: '70px 100px',
}

export const infiniteSliderBoxSx = {
    position: 'relative',
    height: '100%',
    width: '100%',
    touchAction: 'none',
}

export const springBoxStyle = (x: SpringValue<number>) => ({
    position: 'absolute' as const,
    height: '100%',
    willChange: 'transform',
    width: 600,
    x,
})

export const actorNameSx = {
    fontSize: { xs: '24px', md: '32px', lg: '40px' },
    fontWeight: 'bold',
}

export const trendingActorsBoxSx = {
    background: 'transparent',
    height: '400px',
    width: '100%',
    marginBottom: '200px',
    marginTop: '-20px',
}
