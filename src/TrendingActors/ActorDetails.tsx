import { Box } from '@mui/material'
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
import {
    actorDetailsStyles,
    actorImageStyles,
    actorInfoStyles,
    actorNameStyles,
    actorRoleOverviewStyles,
    knownForStyles,
    knownForWrapperStyles,
} from './commonStyles'

export const ActorDetails = ({
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
        <Box color={textColor} sx={actorNameStyles}>
            {name}
        </Box>
    )
}

const ActorKnownFor = ({ known_for }: ActorKnownForType) => {
    return (
        <Box sx={knownForStyles}>{known_for[0].title || known_for[0].name}</Box>
    )
}

const ActorRating = ({ vote_average }: ActorRatingType) => {
    const { textColor } = useContext(ThemeContext)

    return (
        <Box sx={actorRatingStyles(textColor)}>
            <span>
                <StarIcon sx={{ fontSize: '0.9rem' }} />
                {vote_average}
            </span>
        </Box>
    )
}

export const ActorRoleOverview = ({ overview }: ActorRoleOverviewType) => {
    const { textColor } = useContext(ThemeContext)
    return (
        <Box sx={actorRoleOverviewStyles(textColor)}>
            {shortenOverview(overview, 25)}
        </Box>
    )
}

export const ActorImage = ({ profile_path, onLoad }: ActorImageType) => {
    return (
        <img
            style={actorImageStyles}
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
        <Box sx={knownForWrapperStyles}>
            <ActorRating vote_average={vote_average} />
            <ActorKnownFor known_for={known_for} />
        </Box>
    )
}

/* --------------------------------- STYLES --------------------------------- */
const actorRatingStyles = (textColor: string) => {
    return {
        color: textColor,
        fontSize: '1rem',
        display: 'flex',
        minWidth: '40px',
    }
}
