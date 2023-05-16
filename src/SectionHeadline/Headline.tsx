import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'
import { HeadlineProps } from './types'

const Headline = ({ title, subtitle, leftAligned }: HeadlineProps) => {
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
    fontSize: { xs: '40px', sm: '55px', md: '80px' },
    fontWeight: 'bold',
    alignSelf: `${leftAligned ? 'flex-start' : 'flex-end'}`,
    textAlign: `${leftAligned ? 'left' : 'right'} `,
    marginBottom: '-5px',
    textShadow: '1px 2px 2px rgba(66, 68, 90, 1)',
})

export const dividerStyles = (leftAligned: boolean) => ({
    background: `${
        leftAligned
            ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,169,0,1) 90%)'
            : 'linear-gradient(90deg, rgba(255,169,0,1) 0%, rgba(255,255,255,1) 90%)'
    }`,

    height: '5px',
    width: '100%',
    boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.2)',
})

export const subtitleStyles = (
    leftAligned: boolean,
    mainThemeColor: string
) => ({
    color: mainThemeColor,
    fontSize: { xs: '12px', md: '15px' },
    width: { xs: '75%', sm: '55%', md: '60%' },
    textAlign: `${leftAligned ? 'right' : 'left'}`,
    fontWeight: 'bold',
    alignSelf: `${leftAligned ? 'flex-end' : 'flex-start'}`,
})

/* --------------------------------- TYPES --------------------------------- */

type TitleProps = Omit<HeadlineProps, 'subtitle'> & {
    textColor: string
}
type DividerProps = Pick<TitleProps, 'leftAligned'>
type SubtitleProps = Omit<HeadlineProps, 'title'>
