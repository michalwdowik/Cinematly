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

const ActorDetails = ({
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
export default ActorDetails

const ActorName = ({ name }: ActorNameType) => {
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

const ActorRoleOverview = ({ overview }: ActorRoleOverviewType) => {
    const { textColor } = useContext(ThemeContext)
    return (
        <Box className="actorRoleOverview">
            <Typography color={textColor}>
                {shortenOverview(overview, 25)}
            </Typography>
        </Box>
    )
}

const ActorImage = ({ profile_path, onLoad }: ActorImageType) => {
    return profile_path ? (
        <img
            className="actorImage"
            alt="actor"
            width="185px"
            src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
            height="278px"
            onLoad={onLoad}
        />
    ) : (
        <NoActorImagePlaceholder onLoad={onLoad} />
    )
}

const NoActorImagePlaceholder = ({ onLoad }: NoActorImagePlaceholderProps) => {
    return (
        <img
            className="actorImage"
            onLoad={onLoad}
            src="https://1fid.com/wp-content/uploads/2022/06/no-profile-picture-4-1024x1024.jpg
            "
            alt="no actor img"
            width="185px"
            height="278px"
        />
    )
}

const ActorRole = ({ known_for, vote_average }: ActorRoleType) => {
    return (
        <Box className="knownForWrapper">
            <ActorRating vote_average={vote_average} />
            <ActorKnownFor known_for={known_for} />
        </Box>
    )
}

type NoActorImagePlaceholderProps = {
    onLoad: () => void
}
