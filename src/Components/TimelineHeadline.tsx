import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import useScreenType from 'react-screentype-hook'
import { ThemeContext } from '../Contexts/ThemeContext'

const TimelineHeadline = ({ label }: HeadingProps) => {
    const { textColor } = useContext(ThemeContext)
    const screenType = useScreenType()

    return (
        <ParallaxProvider>
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
        </ParallaxProvider>
    )
}
export default TimelineHeadline

/* --------------------------------- TYPES --------------------------------- */
type HeadingProps = {
    label: string
}
