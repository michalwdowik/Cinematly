import { Box, Skeleton } from '@mui/material'

const ActorDetailsSkeleton = () => {
    return (
        <Box className="actor-details">
            <Box className="actor-info">
                <ActorNameSkeleton />
                <ActorRoleSkeleton />
                <ActorOverviewSkeleton />
            </Box>
            <ActorImageSkeleton />
        </Box>
    )
}

export default ActorDetailsSkeleton

const ActorImageSkeleton = () => {
    return (
        <Skeleton
            width="185px"
            height="278px"
            variant="rectangular"
            className="actor-image"
            sx={{ bgcolor: 'grey.900' }}
        />
    )
}

const ActorNameSkeleton = () => {
    return (
        <Skeleton
            variant="text"
            height="75px"
            className="actor-name"
            sx={{ bgcolor: 'grey.900' }}
        />
    )
}

const ActorRoleSkeleton = () => {
    return (
        <Skeleton
            variant="text"
            height="30px"
            className="knownFor"
            sx={{ bgcolor: 'grey.900' }}
        />
    )
}

const ActorOverviewSkeleton = () => {
    return (
        <>
            <Skeleton
                variant="text"
                className="actor-role-overview"
                sx={{ bgcolor: 'grey.900', marginTop: '1rem' }}
            />
            <Skeleton
                variant="text"
                className="actor-role-overview"
                sx={{ bgcolor: 'grey.900' }}
            />
            <Skeleton
                variant="text"
                width="75%"
                className="actor-role-overview"
                sx={{ bgcolor: 'grey.900' }}
            />
            <Skeleton
                variant="text"
                width="30%"
                className="actor-role-overview"
                sx={{ bgcolor: 'grey.900' }}
            />
        </>
    )
}
