import {
    Animator,
    FadeIn,
    ScrollContainer,
    ScrollPage,
    StickyIn,
    ZoomIn,
    batch,
} from 'react-scroll-motion'
import { Box, Typography } from '@mui/material'
import SectionHeading from '../Components/SectionHeading'
import {
    upcomingMoviesFromFuture,
    upcomingMoviesUpToToday,
} from '../Helpers/fetchUpcomingMovies'
import { Movie } from '../types/MoviesTypes'

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())

const Testowanie = () => {
    return (
        <ScrollContainer>
            <SectionHeading
                leftAligned
                heading="hrshsfhs"
                subheading="hsfhshd"
                enableParallax={false}
            />
            {upcomingMoviesFromFuture.map((movie: Movie) => {
                return (
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'white',
                                width: 'auto',
                                margin: '10%',
                                height: 'auto',
                                borderRadius: '5rem',
                            }}
                        >
                            <Box
                                component="image"
                                sx={{
                                    overflow: 'hidden',
                                    height: '60%',
                                    borderTopLeftRadius: '5rem',
                                    borderTopRightRadius: '5rem',
                                }}
                            >
                                <img
                                    alt={movie.title}
                                    src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                                />
                            </Box>
                            <Typography
                                variant="h2"
                                sx={{ fontWeight: '600', color: 'black' }}
                            >
                                {movie.title}
                            </Typography>
                            <Typography variant="body1">
                                {movie.release_date}
                            </Typography>
                            <Typography variant="subtitle2">
                                {movie.overview}
                            </Typography>
                        </Box>

                        <ScrollPage>
                            <Animator animation={ZoomInScrollOut}>
                                <span
                                    style={{ fontSize: '40px', color: 'white' }}
                                >
                                    April
                                </span>
                            </Animator>
                        </ScrollPage>
                    </>
                )
            })}
            <h1>PAST PREMIERES</h1>

            {upcomingMoviesUpToToday.map((movie: Movie) => {
                return (
                    <>
                        <h1>{movie.title}</h1>
                        <h2>{movie.release_date}</h2>
                        <img
                            alt={movie.title}
                            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                        />
                    </>
                )
            })}
        </ScrollContainer>
    )
}
export default Testowanie
