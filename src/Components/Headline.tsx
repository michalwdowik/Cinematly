/* eslint-disable react/no-unused-prop-types */
import { Box, Typography } from '@mui/material'
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
                <Box sx={sectionHeadlineStyles}>{content}</Box>
            </Parallax>
        </ParallaxProvider>
    ) : (
        <Box sx={sectionHeadlineStyles}>{content}</Box>
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
        <Typography sx={titleStyles(leftAligned, textColor)}>
            {title}
        </Typography>
    )
}

export const Divider = ({ leftAligned }: DividerProps) => {
    return <Box sx={dividerStyles(leftAligned)} />
}

export const Subtitle = ({ subtitle, leftAligned }: SubtitleProps) => {
    const { mainThemeColor } = useContext(ThemeContext)
    return (
        <Typography sx={subtitleStyles(leftAligned, mainThemeColor)}>
            {subtitle}
        </Typography>
    )
}

/* --------------------------------- STYLES --------------------------------- */
export const titleStyles = (leftAligned: boolean, textColor: string) => ({
    color: textColor,
    fontSize: { xs: '2.5rem', sm: '3.438rem', md: '5rem' },
    fontWeight: 'bold',
    alignSelf: `${leftAligned ? 'flex-start' : 'flex-end'}`,
    textAlign: `${leftAligned ? 'left' : 'right'} `,
    marginBottom: '-0.313rem',
    textShadow: '0.063rem 0.125rem 0.125rem rgba(66, 68, 90, 1)',
})

export const dividerStyles = (leftAligned: boolean) => ({
    background: `${
        leftAligned
            ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,169,0,1) 90%)'
            : 'linear-gradient(90deg, rgba(255,169,0,1) 0%, rgba(255,255,255,1) 90%)'
    }`,

    height: '0.313rem',
    width: '100%',
    boxShadow: '0.125rem 0.125rem 0.125rem 0rem rgba(0, 0, 0, 0.2)',
})

export const subtitleStyles = (
    leftAligned: boolean,
    mainThemeColor: string
) => ({
    color: mainThemeColor,
    fontSize: { xs: '0.75rem', md: '0.938rem' },
    width: { xs: '75%', sm: '55%', md: '60%' },
    textAlign: `${leftAligned ? 'right' : 'left'}`,
    fontWeight: 'bold',
    alignSelf: `${leftAligned ? 'flex-end' : 'flex-start'}`,
})

const sectionHeadlineStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.313rem',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '80vw',
    marginBottom: '5rem',
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
