import { Box } from '@mui/material'

const CallToActionLabel = ({
    message,
    textSize,
    textColor,
}: CallToActionLabelProps) => {
    return (
        <Box
            className="call-to-action-label"
            color={textColor}
            fontSize={textSize}
        >
            {message}
        </Box>
    )
}
export default CallToActionLabel

type CallToActionLabelProps = {
    message: string
    textSize: string
    textColor: string
}
