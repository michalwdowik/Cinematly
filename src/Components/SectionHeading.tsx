import { Box, Typography } from '@mui/material'

interface SectionHeadingProps {
    heading: string
    subheading: string
    leftAligned: boolean
}

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

type HeadingProps = Pick<SectionHeadingProps, 'heading' | 'leftAligned'>
const Heading = ({ heading, leftAligned }: HeadingProps) => {
    return (
        <Typography
            variant="h1"
            sx={{
                fontSize: { xs: '40px', md: '70px' },
                fontWeight: 'bold',
                textAlign: `${leftAligned ? 'left' : 'right'} `,
                [`${leftAligned ? 'marginLeft' : 'marginRight'}`]: '80px',
            }}
        >
            {heading}
        </Typography>
    )
}

type GradientDividerProps = Pick<SectionHeadingProps, 'leftAligned'>
const GradientDivider = ({ leftAligned }: GradientDividerProps) => {
    return (
        <Box
            sx={{
                background: `${
                    leftAligned
                        ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,169,0,1) 90%)'
                        : 'linear-gradient(90deg, rgba(255,169,0,1) 0%, rgba(255,255,255,1) 90%)'
                }`,
                height: '3px',
                marginLeft: '80px',
                marginRight: '80px',
                marginBottom: '5px',
                marginTop: '5px',
            }}
        />
    )
}

type SubheadingProps = Pick<SectionHeadingProps, 'subheading' | 'leftAligned'>
const Subheading = ({ subheading, leftAligned }: SubheadingProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: `${leftAligned ? 'right' : 'left'}`,
                marginBottom: '50px',
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    color: '#fc9803',
                    fontSize: { xs: '12px', md: '15px' },
                    width: { xs: '60%', md: '33%' },
                    textAlign: `${leftAligned ? 'right' : 'left'}`,
                    [`${leftAligned ? 'marginRight' : 'marginLeft'}`]: '80px',
                    fontWeight: 'bold',
                }}
            >
                {subheading}
            </Typography>
        </Box>
    )
}
