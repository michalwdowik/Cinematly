import Typography from '@mui/material/Typography'
import { Parallax } from 'react-scroll-parallax'
import { useContext } from 'react'
import useScreenType from 'react-screentype-hook'
import { ThemeContext } from './ThemeContext'

const Heading = ({ label }: HeadingProps) => {
    const { textColor } = useContext(ThemeContext)
    const screenType = useScreenType()

    return (
        <Parallax speed={-10} opacity={[2.5, 0]}>
            <Typography
                variant={screenType.isMobile ? 'h4' : 'h2'}
                sx={headingStyles(textColor)}
            >
                {label}
            </Typography>
        </Parallax>
    )
}
export default Heading

/* --------------------------------- STYLES --------------------------------- */

const headingStyles = (textColor: string) => {
    return { fontWeight: '700', padding: '2rem', color: textColor }
}

/* --------------------------------- TYPES --------------------------------- */
type HeadingProps = {
    label: string
}
