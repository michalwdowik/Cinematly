/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skeleton } from '@mui/material'
import { useContext } from 'react'
import {
    Divider,
    Title,
    Subtitle,
    dividerStyles,
    titleStyles,
    subtitleStyles,
} from './Headline'
import { ThemeContext } from '../Contexts/ThemeContext'
import { HeadlineProps } from './types'

const HeadlineSkeleton = ({ leftAligned, title, subtitle }: HeadlineProps) => {
    const { mainThemeColor, textColor } = useContext(ThemeContext)
    return (
        <>
            <SkeletonWrapper
                variant="heading"
                styles={titleStyles(leftAligned, textColor)}
            >
                <Title
                    title={title}
                    leftAligned={leftAligned}
                    textColor={textColor}
                />
            </SkeletonWrapper>
            <SkeletonWrapper
                variant="divider"
                styles={dividerStyles(leftAligned)}
            >
                <Divider leftAligned={leftAligned} />
            </SkeletonWrapper>

            <SkeletonWrapper
                variant="subheading"
                styles={subtitleStyles(leftAligned, mainThemeColor)}
            >
                <Subtitle subtitle={subtitle} leftAligned={leftAligned} />
            </SkeletonWrapper>
        </>
    )
}

export default HeadlineSkeleton

const SkeletonWrapper = ({
    styles,
    children,
    variant,
}: SkeletonWrapperProps) => {
    return variant !== 'divider' ? (
        <Skeleton
            sx={{
                backgroundColor: 'grey.900',
                ...styles,
            }}
        >
            {children}
        </Skeleton>
    ) : (
        <Skeleton
            width="100%"
            height="15px"
            sx={{
                marginBottom: '-15px',
                backgroundColor: 'grey.900',
            }}
        >
            {children}
        </Skeleton>
    )
}

/* --------------------------------- TYPES --------------------------------- */

type SkeletonWrapperProps = {
    styles: any
    children: JSX.Element
    variant: SkeletonWrapperVariant
}

type SkeletonWrapperVariant = 'heading' | 'divider' | 'subheading'
