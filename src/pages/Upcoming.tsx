import 'react-vertical-timeline-component/style.min.css'
import TimelineHeadline from '../Components/TimelineHeadline'
import Headline from '../Components/Headline'
import useFetchMovie from '../Hooks/useFetchMovies'
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies'

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
            <UpcomingMovies movies={justReleasedMovies} />
            <TimelineHeadline label="Upcoming" />
            <UpcomingMovies movies={upcomingMovies} />
            <TimelineHeadline label="Stay tuned!" />
        </div>
    )
}

export default Upcoming
