/* eslint-disable react/jsx-key */
import StarIcon from '@mui/icons-material/Star'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Box, Typography } from '@mui/material'

import SectionHeading from '../Components/SectionHeading'
import { Movie } from '../types/MoviesTypes'
import {
    upcomingMoviesFromFuture,
    upcomingMoviesUpToToday,
} from '../Helpers/fetchUpcomingMovies'
import MAIN_THEME_COLOR from '../Helpers/colors'

const Upcoming = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
            }}
        >
            <SectionHeading
                heading="Upcoming Movies"
                subheading="From highly-anticipated sequels to exciting new releases, stay in the loop with our Upcoming Movies section"
                leftAligned
                enableParallax={false}
            />
            <VerticalTimeline lineColor={MAIN_THEME_COLOR}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(33, 150, 243)',
                    }}
                    date="2011 - present"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Creative Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Miami, FL
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Art Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        San Francisco, CA
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO,
                        Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Web Designer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Los Angeles, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Web Designer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        San Francisco, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{
                        background: 'rgb(233, 30, 99)',
                        color: '#fff',
                    }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Content Marketing for Web, Mobile and Social Media
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Online Course
                    </h4>
                    <p>Strategy, Social Media</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{
                        background: 'rgb(233, 30, 99)',
                        color: '#fff',
                    }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Agile Development Scrum Master
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Certification
                    </h4>
                    <p>Creative Direction, User Experience, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{
                        background: 'rgb(233, 30, 99)',
                        color: '#fff',
                    }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Bachelor of Science in Interactive Digital Media Visual
                        Imaging
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor Degree
                    </h4>
                    <p>Creative Direction, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{
                        background: 'rgb(16, 204, 82)',
                        color: '#fff',
                    }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
            <Cards />
        </Box>
    )
}
export default Upcoming

const Cards = () => {
    return upcomingMoviesFromFuture.map((movie: Movie) => {
        return (
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
                <Typography variant="body1">{movie.release_date}</Typography>
                <Typography variant="subtitle2">{movie.overview}</Typography>
            </Box>
        )
    })
}
