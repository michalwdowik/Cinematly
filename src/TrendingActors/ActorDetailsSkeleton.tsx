import { Box, Skeleton } from '@mui/material'
import { useContext } from 'react'
import {
    ActorImageType,
    ActorNameType,
    ActorRoleOverviewType,
    ActorDetailsType,
    ActorRoleType,
} from './types'
import {
    ActorImage,
    ActorName,
    ActorRole,
    ActorRoleOverview,
} from './ActorDetails'
import { ThemeContext } from '../Contexts/ThemeContext'
import {
    actorDetailsStyles,
    actorImageStyles,
    actorInfoStyles,
    actorNameStyles,
    actorRoleOverviewStyles,
    knownForStyles,
} from './commonStyles'

const ActorDetailsSkeleton = ({
    name,
    profile_path,
    vote_average,
    onLoad,
    known_for,
    overview,
}: ActorDetailsType) => {
    const { mainThemeColorSecondary } = useContext(ThemeContext)
    return (
        <Box sx={actorDetailsStyles(mainThemeColorSecondary)}>
            <Box sx={actorInfoStyles}>
                <ActorNameSkeleton name={name} />
                <ActorRoleSkeleton
                    vote_average={vote_average}
                    known_for={known_for}
                />
                <ActorOverviewSkeleton overview={overview} />
            </Box>
            <ActorImageSkeleton onLoad={onLoad} profile_path={profile_path} />
        </Box>
    )
}

export default ActorDetailsSkeleton

const ActorImageSkeleton = ({ profile_path, onLoad }: ActorImageType) => {
    return (
        <Skeleton
            width="185px"
            height="278px"
            variant="rounded"
            sx={{
                ...actorImageStyles,
                bgcolor: 'grey.900',
            }}
        >
            <ActorImage onLoad={onLoad} profile_path={profile_path} />
        </Skeleton>
    )
}

const ActorNameSkeleton = ({ name }: ActorNameType) => {
    return (
        <Skeleton
            variant="text"
            height="45px"
            sx={{
                ...actorNameStyles,
                bgcolor: 'grey.900',
            }}
        >
            <ActorName name={name} />
        </Skeleton>
    )
}

const ActorRoleSkeleton = ({ known_for, vote_average }: ActorRoleType) => {
    return (
        <Skeleton
            variant="text"
            height="30px"
            sx={{
                ...knownForStyles,
                bgcolor: 'grey.900',
            }}
        >
            <ActorRole known_for={known_for} vote_average={vote_average} />
        </Skeleton>
    )
}

const ActorOverviewSkeleton = ({ overview }: ActorRoleOverviewType) => {
    return (
        <Skeleton
            variant="text"
            sx={{
                ...actorRoleOverviewStyles,
                bgcolor: 'grey.900',
            }}
        >
            <ActorRoleOverview overview={overview} />
        </Skeleton>
    )
}
