import { Skeleton } from '@mui/material'
import { CSSProperties } from 'react'

export const NotFoundImageSkeleton = () => {
    return (
        <Skeleton
            sx={{
                bgcolor: 'grey.900',
                borderRadius: '2rem',
                margin: 'auto',
            }}
            width={300}
            height={300}
            variant="rectangular"
        />
    )
}

export const NotFoundMessageSkeleton = () => {
    return (
        <div style={notFoundContainerStyles}>
            <Skeleton
                sx={{
                    bgcolor: 'grey.900',
                }}
                width={260}
                height={50}
            />

            <Skeleton
                sx={{
                    bgcolor: 'grey.900',
                }}
                width={440}
                height={20}
            />

            <Skeleton
                sx={{
                    bgcolor: 'grey.900',
                }}
                width={70}
                height={20}
            />
        </div>
    )
}

export const notFoundContainerStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    justifyContent: 'center',
}
