import { Box, Skeleton } from '@mui/material'

const ActorDetailsSkeleton = () => {
    return (
        <Box className="actorDetails">
            <Box className="actorInfo">
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
            className="actorImage"
            sx={{ bgcolor: 'grey.900' }}
        />
    )
}

const ActorNameSkeleton = () => {
    return (
        <Skeleton
            variant="text"
            height="75px"
            className="actorName"
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
                className="actorRoleOverview"
                sx={{ bgcolor: 'grey.900', marginTop: '1rem' }}
            />
            <Skeleton
                variant="text"
                className="actorRoleOverview"
                sx={{ bgcolor: 'grey.900' }}
            />
            <Skeleton
                variant="text"
                width="75%"
                className="actorRoleOverview"
                sx={{ bgcolor: 'grey.900' }}
            />
            <Skeleton
                variant="text"
                width="30%"
                className="actorRoleOverview"
                sx={{ bgcolor: 'grey.900' }}
            />
        </>
    )
}
