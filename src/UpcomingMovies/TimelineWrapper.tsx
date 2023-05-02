import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import CelebrationIcon from '@mui/icons-material/Celebration'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { upcomingMoviesUpToToday } from '../Helpers/fetchUpcomingMovies'
import { TimelineWrapperProps } from '../types/UpcomingMoviesTypes'
import {
    timelineWrapperIconSx,
    timelineWrapperSx,
} from '../ComponentStyles/UpcomingStyles'
import useThemeColors from '../Hooks/useThemeColors'

const TimelineWrapper = ({ movies, movie, children }: TimelineWrapperProps) => {
    const { mainThemeColor } = useThemeColors()
    return (
        <VerticalTimelineElement
            contentStyle={timelineWrapperSx}
            date={movie.release_date}
            iconStyle={timelineWrapperIconSx(mainThemeColor)}
            icon={
                movies === upcomingMoviesUpToToday ? (
                    <CelebrationIcon />
                ) : (
                    <AccessTimeIcon />
                )
            }
        >
            {children}
        </VerticalTimelineElement>
    )
}

export default TimelineWrapper
