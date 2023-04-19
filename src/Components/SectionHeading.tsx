import { Box, Typography } from '@mui/material'
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
} from '../ComponentStyles/SectionHeadingStyles'

const SectionHeading = ({
    heading,
    subheading,
    leftAligned,
}: SectionHeadingProps) => {
    return (
        <>
            <Heading heading={heading} leftAligned={leftAligned} />
            <GradientDivider leftAligned={leftAligned} />
            <Subheading subheading={subheading} leftAligned={leftAligned} />
        </>
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
