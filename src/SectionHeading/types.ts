export interface SectionHeadlineProps {
    title: string
    subtitle: string
    leftAligned: boolean
    enableParallax: boolean
    loaded: boolean
}

export type HeadlineProps = Omit<SectionHeadlineProps, 'enableParallax'>
