import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import StarIcon from '@mui/icons-material/Star'
import { ThemeContext } from '../Contexts/ThemeContext'
import shortenOverview from '../Helpers/cutText'
import {
    ActorDetailsType,
    ActorImageType,
    ActorKnownForType,
    ActorNameType,
    ActorRatingType,
    ActorRoleOverviewType,
    ActorRoleType,
} from './types'

export const ActorDetails = ({
    name,
    profile_path,
    vote_average,
    onLoad,
    known_for,
    overview,
}: ActorDetailsType) => {
    return (
        <Box className="actorDetails">
            <Box className="actorInfo">
                <ActorName name={name} />
                <ActorRole vote_average={vote_average} known_for={known_for} />
                <ActorRoleOverview overview={overview} />
            </Box>
            <ActorImage onLoad={onLoad} profile_path={profile_path} />{' '}
        </Box>
    )
}

export const ActorName = ({ name }: ActorNameType) => {
    const { textColor } = useContext(ThemeContext)
    return (
        <Box color={textColor} className="actorName">
            {name}
        </Box>
    )
}

const ActorKnownFor = ({ known_for }: ActorKnownForType) => {
    return (
        <Box className="knownFor">
            {known_for[0].title || known_for[0].name}
        </Box>
    )
}

const ActorRating = ({ vote_average }: ActorRatingType) => {
    const { textColor } = useContext(ThemeContext)

    return (
        <Box className="actorRating">
            <Box component="span" color={textColor}>
                <StarIcon sx={{ fontSize: '0.9rem' }} />
                {vote_average}
            </Box>
        </Box>
    )
}

export const ActorRoleOverview = ({ overview }: ActorRoleOverviewType) => {
    const { textColor } = useContext(ThemeContext)
    return (
        <Box className="actorRoleOverview">
            <Typography color={textColor}>
                {shortenOverview(overview, 25)}
            </Typography>
        </Box>
    )
}

export const ActorImage = ({ profile_path, onLoad }: ActorImageType) => {
    return (
        <img
            className="actorImage"
            alt="actor"
            width="185px"
            src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
            height="278px"
            onLoad={onLoad}
        />
    )
}

export const ActorRole = ({ known_for, vote_average }: ActorRoleType) => {
    return (
        <Box className="knownForWrapper">
            <ActorRating vote_average={vote_average} />
            <ActorKnownFor known_for={known_for} />
        </Box>
    )
}
