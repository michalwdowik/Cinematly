import Typography from '@mui/material/Typography'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useContext } from 'react'
import { Box } from '@mui/material'
import { ThemeContext } from './ThemeContext'

const SectionHeading = ({
    heading,
    subheading,
    leftAligned,
    enableParallax = true,
}: SectionHeadingProps) => {
    const xMove = leftAligned ? -5 : 5
    const contents = (
        <>
            <Heading heading={heading} leftAligned={leftAligned} />
            <GradientDivider leftAligned={leftAligned} />
            <Subheading subheading={subheading} leftAligned={leftAligned} />
        </>
    )

    return enableParallax ? (
        <ParallaxProvider>
            <Parallax speed={-8} translateX={[0, xMove]}>
                <Box sx={sectionHeadingStyles}>{contents}</Box>
            </Parallax>
        </ParallaxProvider>
    ) : (
        <Box sx={sectionHeadingStyles}>{contents}</Box>
    )
}

export default SectionHeading

const Heading = ({ heading, leftAligned }: HeadingProps) => {
    const { textColor } = useContext(ThemeContext)

    return (
        <Typography sx={headingStyles(leftAligned, textColor)}>
            {heading}
        </Typography>
    )
}

const GradientDivider = ({ leftAligned }: GradientDividerProps) => {
    return <Box sx={gradientDividerStyles(leftAligned)} />
}

const Subheading = ({ subheading, leftAligned }: SubheadingProps) => {
    const { mainThemeColor } = useContext(ThemeContext)
    return (
        <Box sx={subheadingBoxStyles(leftAligned)}>
            <Typography sx={subheadingStyles(leftAligned, mainThemeColor)}>
                {subheading}
            </Typography>
        </Box>
    )
}

/* --------------------------------- STYLES --------------------------------- */
const headingStyles = (leftAligned: boolean, textColor: string) => ({
    color: textColor,
    fontSize: { xs: '40px', sm: '55px', md: '80px' },
    fontWeight: 'bold',
    alignSelf: `${leftAligned ? 'flex-start' : 'flex-end'}`,
    textAlign: `${leftAligned ? 'left' : 'right'} `,
    marginBottom: '-5px',
    textShadow: '1px 2px 2px rgba(66, 68, 90, 1)',
})

const gradientDividerStyles = (leftAligned: boolean) => ({
    background: `${
        leftAligned
            ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,169,0,1) 90%)'
            : 'linear-gradient(90deg, rgba(255,169,0,1) 0%, rgba(255,255,255,1) 90%)'
    }`,
    height: '3px',
    width: '100%',
    boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.2)',
})

const subheadingBoxStyles = (leftAligned: boolean) => ({
    display: 'flex',
    justifyContent: `${leftAligned ? 'right' : 'left'}`,
    alignSelf: `${leftAligned ? 'flex-end' : 'flex-start'}`,
    textShadow: '1px 1px 1px rgba(66, 68, 90, 1)',
})

const subheadingStyles = (leftAligned: boolean, mainThemeColor: string) => ({
    color: mainThemeColor,
    fontSize: { xs: '12px', md: '15px' },
    width: { xs: '75%', sm: '55%', md: '60%' },
    textAlign: `${leftAligned ? 'right' : 'left'}`,
    fontWeight: 'bold',
    alignSelf: `${leftAligned ? 'flex-end' : 'flex-start'}`,
})

const sectionHeadingStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '80vw',
    marginBottom: '5rem',
}

/* --------------------------------- TYPES --------------------------------- */
interface SectionHeadingProps {
    heading: string
    subheading: string
    leftAligned: boolean
    enableParallax: boolean
}

type HeadingProps = Pick<SectionHeadingProps, 'heading' | 'leftAligned'>
type GradientDividerProps = Pick<SectionHeadingProps, 'leftAligned'>
type SubheadingProps = Pick<SectionHeadingProps, 'subheading' | 'leftAligned'>
