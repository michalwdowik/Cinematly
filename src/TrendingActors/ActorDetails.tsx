import { Box } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { colorWhite } from '../ComponentStyles/NavbarStyles'
import {
    actorDetailsSx,
    actorImageSx,
    actorNameSx,
    fontSize14px,
    knownForBoxSx,
} from '../ComponentStyles/TrendingActorsStyles'
import {
    Actor,
    ActorImageProps,
    ActorKnownForProps,
    ActorNameProps,
    ActorRatingProps,
    ActorRoleOverviewProps,
} from '../types/TrendingActorsTypes'
import cutText from '../Helpers/cutText'

const ActorDetails = ({
    name,
    vote_average,
    known_for,
    overview,
    profile_path,
}: Actor) => {
    return (
        <Box sx={actorDetailsSx}>
            <ActorName name={name} />
            <Box
                sx={{
                    display: 'flex',
                    alignContent: 'center',
                    gap: '5px',
                    fontStyle: 'italic',
                }}
            >
                <ActorRating vote_average={vote_average} />
                <ActorKnownFor known_for={known_for} />
            </Box>
            <ActorRoleOverview overview={overview} />
            <ActorImage profile_path={profile_path} />
        </Box>
    )
}

const ActorName = ({ name }: ActorNameProps) => {
    return <Box sx={actorNameSx}>{name}</Box>
}

const ActorKnownFor = ({ known_for }: ActorKnownForProps) => {
    return (
        <Box sx={knownForBoxSx}>{known_for[0].title || known_for[0].name}</Box>
    )
}

const ActorRoleOverview = ({ overview }: ActorRoleOverviewProps) => {
    return (
        <Box sx={{ color: 'white', marginBottom: '10px' }}>
            {cutText(overview, 25)}
        </Box>
    )
}

const ActorRating = ({ vote_average }: ActorRatingProps) => {
    return (
        <Box sx={colorWhite}>
            <span>
                <StarIcon sx={fontSize14px} />
                {vote_average}
            </span>
        </Box>
    )
}

const ActorImage = ({ profile_path }: ActorImageProps) => {
    return <Box sx={actorImageSx(profile_path)} />
}

export default ActorDetails