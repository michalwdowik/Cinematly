import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { Box } from '@mui/material'

import { Suspense, lazy } from 'react'
import HeadlineSkeleton from './HeadlineSkeleton'
import { SectionHeadlineProps } from './types'

const LazyHeadline = lazy(() => import('./Headline'))
const SectionHeadline = ({
    title,
    subtitle,
    leftAligned,
    enableParallax = true,
}: SectionHeadlineProps) => {
    const xMove = leftAligned ? -5 : 5
    const content = (
        <Suspense
            fallback={
                <HeadlineSkeleton
                    title={title}
                    subtitle={subtitle}
                    leftAligned={leftAligned}
                />
            }
        >
            <LazyHeadline
                title={title}
                subtitle={subtitle}
                leftAligned={leftAligned}
            />
        </Suspense>
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
