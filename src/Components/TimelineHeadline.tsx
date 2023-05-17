import Typography from '@mui/material/Typography'
import { Parallax } from 'react-scroll-parallax'
import { useContext } from 'react'
import useScreenType from 'react-screentype-hook'
import { ThemeContext } from '../Contexts/ThemeContext'

const TimelineHeadline = ({ label }: HeadingProps) => {
    const { textColor } = useContext(ThemeContext)
    const screenType = useScreenType()

    return (
        <Parallax speed={-10} opacity={[2.5, 0]}>
            <Typography
                color={textColor}
                fontWeight={700}
                padding="2rem"
                variant={screenType.isMobile ? 'h4' : 'h2'}
            >
                {label}
            </Typography>
        </Parallax>
    )
}
export default TimelineHeadline

/* --------------------------------- TYPES --------------------------------- */
type HeadingProps = {
    label: string
}
