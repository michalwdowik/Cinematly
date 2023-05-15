import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { Box } from '@mui/material'
import Headline from './Headline'
import HeadlineSkeleton from './HeadlineSkeleton'
import { SectionHeadlineProps } from './types'

const SectionHeadline = ({
    title,
    subtitle,
    leftAligned,
    enableParallax = true,
    loaded,
}: SectionHeadlineProps) => {
    const xMove = leftAligned ? -5 : 5
    const content = loaded ? (
        <Headline
            title={title}
            subtitle={subtitle}
            leftAligned={leftAligned}
            loaded={loaded}
        />
    ) : (
        <HeadlineSkeleton
            title={title}
            subtitle={subtitle}
            leftAligned={leftAligned}
            loaded={loaded}
        />
    )

    return enableParallax ? (
        <ParallaxProvider>
            <Parallax speed={-8} translateX={[0, xMove]}>
                <Box sx={sectionHeadlineStyles}>{content}</Box>
            </Parallax>
        </ParallaxProvider>
    ) : (
        <Box sx={sectionHeadlineStyles}>{content}</Box>
    )
}

export default SectionHeadline

const sectionHeadlineStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '80vw',
    marginBottom: '5rem',
}
