import StarIcon from '@mui/icons-material/Star'
import { useContext } from 'react'
import { Box } from '@mui/material'
import { ThemeContext } from '../Components/ThemeContext'
import { Actor } from './types'
import shortenOverview from '../Helpers/cutText'

const ActorDetails = ({
    name,
    vote_average,
    known_for,
    overview,
    profile_path,
}: Actor) => {
    return (
        <Box sx={actorDetailsStyles}>
            <ActorName name={name} />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
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
    const { textColor } = useContext(ThemeContext)
    return (
        <Box color={textColor} sx={actorNameStyles}>
            {name}
        </Box>
    )
}

const ActorKnownFor = ({ known_for }: ActorKnownForProps) => {
    return (
        <Box sx={knownForStyles}>{known_for[0].title || known_for[0].name}</Box>
    )
}

const ActorRoleOverview = ({ overview }: ActorRoleOverviewProps) => {
    const { textColor } = useContext(ThemeContext)
    return (
        <Box sx={{ color: textColor, marginBottom: '10px' }}>
            {shortenOverview(overview, 25)}
        </Box>
    )
}

const ActorRating = ({ vote_average }: ActorRatingProps) => {
    const { textColor } = useContext(ThemeContext)

    return (
        <Box
            sx={{
                color: textColor,
                display: 'flex',
                fontSize: '16px',
            }}
        >
            <span>
                <StarIcon sx={{ fontSize: '14px' }} />
                {vote_average}
            </span>
        </Box>
    )
}

const ActorImage = ({ profile_path }: ActorImageProps) => {
    return <Box sx={actorImageStyles(profile_path)} />
}

export default ActorDetails

/* --------------------------------- STYLES --------------------------------- */
const actorDetailsStyles = {
    width: '100%',
    height: '100%',
    padding: '70px 100px',
}

const actorNameStyles = {
    fontSize: { xs: '24px', md: '32px', lg: '40px' },
    fontWeight: 'bold',
}

const knownForStyles = {
    fontSize: '16px',
    color: '#fc7b03',
    fontWeight: 'bold',
}

const actorImageStyles = (url: string) => ({
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '50px',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${url})`,
    boxShadow: '8px 8px 12px -5px rgba(0, 0, 0, 1)',
})

/* --------------------------------- TYPES --------------------------------- */
type ActorNameProps = Pick<Actor, 'name'>
type ActorKnownForProps = Pick<Actor, 'known_for'>
type ActorRatingProps = Pick<Actor, 'vote_average'>
type ActorImageProps = Pick<Actor, 'profile_path'>
type ActorRoleOverviewProps = Pick<Actor, 'overview'>
