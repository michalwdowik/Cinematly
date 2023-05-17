/* eslint-disable react/no-unused-prop-types */
import { Box } from '@mui/material'
import { useContext } from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { ThemeContext } from '../Contexts/ThemeContext'

const Headline = ({
    title,
    subtitle,
    leftAligned,
    enableParallax = true,
}: HeadlineProps) => {
    const xMove = leftAligned ? -5 : 5
    const content = (
        <HeadlineElements
            title={title}
            subtitle={subtitle}
            leftAligned={leftAligned}
            enableParallax={enableParallax}
        />
    )
    return enableParallax ? (
        <ParallaxProvider>
            <Parallax speed={-8} translateX={[0, xMove]}>
                <Box className="sectionHeadline">{content}</Box>
            </Parallax>
        </ParallaxProvider>
    ) : (
        <Box className="sectionHeadline">{content}</Box>
    )
}

const HeadlineElements = ({ title, subtitle, leftAligned }: HeadlineProps) => {
    const { textColor } = useContext(ThemeContext)

    return (
        <>
            <Title
                title={title}
                leftAligned={leftAligned}
                textColor={textColor}
            />
            <Divider leftAligned={leftAligned} />
            <Subtitle subtitle={subtitle} leftAligned={leftAligned} />
        </>
    )
}

export default Headline

export const Title = ({ title, leftAligned, textColor }: TitleProps) => {
    return (
        <Box
            component="span"
            alignSelf={`${leftAligned ? 'flex-start' : 'flex-end'}`}
            textAlign={`${leftAligned ? 'left' : 'right'}`}
            color={textColor}
            className="headlineTitle"
        >
            {title}
        </Box>
    )
}

export const Divider = ({ leftAligned }: DividerProps) => {
    return (
        <Box
            className="headlineDivider"
            sx={{
                background: `${
                    leftAligned
                        ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,169,0,1) 90%)'
                        : 'linear-gradient(90deg, rgba(255,169,0,1) 0%, rgba(255,255,255,1) 90%)'
                }`,
            }}
        />
    )
}

export const Subtitle = ({ subtitle, leftAligned }: SubtitleProps) => {
    return (
        <Box
            component="span"
            textAlign={`${leftAligned ? 'right' : 'left'}`}
            alignSelf={`${leftAligned ? 'flex-end' : 'flex-start'}`}
            className="headlineSubtitle"
        >
            {subtitle}
        </Box>
    )
}

/* --------------------------------- TYPES --------------------------------- */

type TitleProps = Omit<HeadlineProps, 'subtitle' | 'enableParallax'> & {
    textColor: string
}
type DividerProps = Pick<TitleProps, 'leftAligned'>
type SubtitleProps = Omit<HeadlineProps, 'title' | 'enableParallax'>

type HeadlineProps = {
    title: string
    subtitle: string
    leftAligned: boolean
    enableParallax?: boolean
}