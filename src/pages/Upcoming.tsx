/* eslint-disable react/jsx-key */
import CelebrationIcon from '@mui/icons-material/Celebration'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Box, Typography } from '@mui/material'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import SectionHeading from '../Components/SectionHeading'
import { Movie } from '../types/MoviesTypes'
import {
    upcomingMoviesFromFuture,
    upcomingMoviesUpToToday,
} from '../Helpers/fetchUpcomingMovies'
import MAIN_THEME_COLOR from '../Helpers/colors'
import {
    movieDetailsModalSx,
    movieModalDetailsSx,
} from '../ComponentStyles/TrendingMoviesStyles'
import AddToWatchlistButton from '../TrendingMovies/AddToWatchlistButton'
import {
    MovieHeadingModalProps,
    MovieOriginalLanguageModalProps,
    MovieOverviewModalProps,
    MovieReleaseDateProps,
    MovieTitleModalProps,
} from '../types/TrendingMoviesTypes'
import { fontSize14px } from '../ComponentStyles/TrendingActorsStyles'
import { colorBlack } from '../ComponentStyles/NavbarStyles'
import cutText from '../Helpers/cutText'

const Upcoming = () => {
    return (
        <ParallaxProvider>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: '4rem',
                }}
            >
                <SectionHeading
                    heading="Upcoming Movies"
                    subheading="From highly-anticipated sequels to exciting new releases, stay in the loop with our Upcoming Movies section"
                    leftAligned
                    enableParallax={false}
                />
                <Parallax opacity={[2.5, 0]}>
                    <Typography
                        variant="h2"
                        sx={{ fontWeight: '700', padding: '2rem' }}
                    >
                        Just released
                    </Typography>
                </Parallax>

                <VerticalTimeline lineColor={MAIN_THEME_COLOR}>
                    <Cards movies={upcomingMoviesUpToToday} />
                </VerticalTimeline>

                <Parallax speed={-10} opacity={[2.5, 0]}>
                    <Typography
                        variant="h2"
                        sx={{ fontWeight: '700', paddingY: '2rem' }}
                    >
                        Upcoming
                    </Typography>
                </Parallax>
                <VerticalTimeline lineColor={MAIN_THEME_COLOR}>
                    <Cards movies={upcomingMoviesFromFuture} />
                </VerticalTimeline>
            </Box>
        </ParallaxProvider>
    )
}
export default Upcoming

export type CardsProps = {
    movies: Movie[]
}
const Cards = ({ movies }: CardsProps) => {
    return movies.map((movie: Movie) => {
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    height: '400px',
                    backgroundColor: 'white',
                    borderRadius: '4rem',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    padding: '0',
                }}
                contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                }}
                // date="2011 - present"
                iconStyle={{
                    background: MAIN_THEME_COLOR,
                    color: '#fff',
                }}
                icon={
                    movies === upcomingMoviesUpToToday ? (
                        <CelebrationIcon />
                    ) : (
                        <AccessTimeIcon />
                    )
                }
            >
                <MovieHeadingModal
                    id={movie.id}
                    voteAverage={movie.vote_average}
                    title={movie.title}
                />
                <Box
                    sx={{
                        overflow: 'hidden',
                        height: '65%',
                    }}
                >
                    <img
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                        alt="x"
                        src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                    />
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem',
                    }}
                >
                    <Box sx={{ ...movieModalDetailsSx, ...colorBlack }}>
                        <AddToWatchlistButton absolute />
                        <MovieTitleModal
                            title={movie.title}
                            originTitle={movie.original_title}
                        />
                        <MovieReleaseDateModal
                            releaseDate={movie.release_date}
                        />
                        <MovieOriginalLanguageModal
                            originLanguage={movie.original_language}
                        />
                        <MovieOverviewModal overview={movie.overview} />
                    </Box>
                </Box>
            </VerticalTimelineElement>
        )
    })
}

const MovieTitleModal = ({ title, originTitle }: MovieTitleModalProps) => {
    return (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={movieDetailsModalSx}>
                Original title:
            </Box>
            {originTitle ? (
                <Typography variant="subtitle1" display="inline">
                    &nbsp; {originTitle}
                </Typography>
            ) : (
                <Typography variant="subtitle1" display="inline">
                    &nbsp; {title}
                </Typography>
            )}
        </Box>
    )
}

const MovieReleaseDateModal = ({ releaseDate }: MovieReleaseDateProps) => {
    return releaseDate ? (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={movieDetailsModalSx}>
                Release date:
            </Box>
            <Typography variant="subtitle1" display="inline">
                &nbsp; {releaseDate}
            </Typography>
        </Box>
    ) : (
        <Typography variant="subtitle1" display="inline">
            No release date
        </Typography>
    )
}

const MovieOriginalLanguageModal = ({
    originLanguage,
}: MovieOriginalLanguageModalProps) => {
    return originLanguage ? (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={movieDetailsModalSx}>
                Language:
            </Box>
            <Typography variant="subtitle1" display="inline">
                &nbsp; {originLanguage}
            </Typography>
        </Box>
    ) : (
        <p>No language</p>
    )
}

const MovieOverviewModal = ({ overview }: MovieOverviewModalProps) => {
    return (
        <Typography variant="subtitle2">
            {cutText(overview) || 'No overview'}
        </Typography>
    )
}

const MovieHeadingModal = ({ voteAverage, title }: MovieHeadingModalProps) => {
    return (
        <Box
            sx={{
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
            }}
        >
            <Box component="span" sx={{ display: 'flex' }} className="category">
                <CelebrationIcon sx={fontSize14px} />
                {voteAverage}
            </Box>
            <Typography variant="h6">{title}</Typography>
        </Box>
    )
}
