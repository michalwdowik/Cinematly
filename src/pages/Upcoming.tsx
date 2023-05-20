import 'react-vertical-timeline-component/style.min.css'
import { lazy } from 'react'
import TimelineHeadline from '../Components/TimelineHeadline'
import Headline from '../Components/Headline'
import useFetchMovie from '../Hooks/useFetchMovies'

const LazyUpcomingMovies = lazy(
    () => import('../UpcomingMovies/UpcomingMovies')
)
const Upcoming = () => {
    const upcomingMovies = useFetchMovie('upcoming')
    const justReleasedMovies = useFetchMovie('justReleased')

    return (
        <div className=" page">
            <Headline
                title="Upcoming Movies"
                subtitle="From highly-anticipated sequels to exciting new releases, stay in the loop with our Upcoming Movies section"
                leftAligned
                enableParallax={false}
            />
            <TimelineHeadline label="Just released" />
            <LazyUpcomingMovies movies={justReleasedMovies} />
            <TimelineHeadline label="Upcoming" />
            <LazyUpcomingMovies movies={upcomingMovies} />
            <TimelineHeadline label="Stay tuned!" />
        </div>
    )
}

export default Upcoming
