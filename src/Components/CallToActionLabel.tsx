import { Box } from '@mui/material'

const CallToActionLabel = ({
    message,
    textSize,
    textColor,
}: CallToActionLabelProps) => {
    return (
        <Box sx={callToActionLabelStyles(textSize, textColor)}>{message}</Box>
    )
}
export default CallToActionLabel

const callToActionLabelStyles = (textSize: string, textColor: string) => {
    return {
        color: textColor,
        fontSize: textSize,
        marginTop: '4rem',
        opacity: '50%',
    }
}
type CallToActionLabelProps = {
    message: string
    textSize: string
    textColor: string
}
