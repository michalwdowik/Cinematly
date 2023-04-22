import { Box, Typography } from '@mui/material'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import {
    GradientDividerProps,
    HeadingProps,
    SectionHeadingProps,
    SubheadingProps,
} from '../types/SectionHeadingTypes'
import {
    gradientDividerSx,
    headingSx,
    subheadingBoxSx,
    subheadingSx,
    sectionHeadingSx,
} from '../ComponentStyles/SectionHeadingStyles'

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
                <Box sx={sectionHeadingSx}>{contents}</Box>
            </Parallax>
        </ParallaxProvider>
    ) : (
        <Box sx={sectionHeadingSx}>{contents}</Box>
    )
}

export default SectionHeading

const Heading = ({ heading, leftAligned }: HeadingProps) => {
    return (
        <Typography variant="h1" sx={headingSx(leftAligned)}>
            {heading}
        </Typography>
    )
}

const GradientDivider = ({ leftAligned }: GradientDividerProps) => {
    return <Box sx={gradientDividerSx(leftAligned)} />
}

const Subheading = ({ subheading, leftAligned }: SubheadingProps) => {
    return (
        <Box sx={subheadingBoxSx(leftAligned)}>
            <Typography variant="h5" sx={subheadingSx(leftAligned)}>
                {subheading}
            </Typography>
        </Box>
    )
}
