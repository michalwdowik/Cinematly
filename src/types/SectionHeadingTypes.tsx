export interface SectionHeadingProps {
    heading: string
    subheading: string
    leftAligned: boolean
}

export type HeadingProps = Pick<SectionHeadingProps, 'heading' | 'leftAligned'>
export type GradientDividerProps = Pick<SectionHeadingProps, 'leftAligned'>
export type SubheadingProps = Pick<
    SectionHeadingProps,
    'subheading' | 'leftAligned'
>
