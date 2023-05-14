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
    const { mainThemeColorSecondary } = useContext(ThemeContext)
    return (
        <Box sx={actorDetailsStyles(mainThemeColorSecondary)}>
            <Box
                sx={{
                    width: '60%',
                    padding: '0.3rem',
                    marginRight: '1.5rem',
                }}
            >
                <ActorName name={name} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontStyle: 'italic',
                        marginY: '0.5rem',
                    }}
                >
                    <ActorRating vote_average={vote_average} />
                    <ActorKnownFor known_for={known_for} />
                </Box>
                <ActorRoleOverview overview={overview} />
            </Box>
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
        <Box sx={{ color: textColor, marginBottom: '10px', opacity: '70%' }}>
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
                fontSize: '1rem',
                display: 'flex',
                minWidth: '30px',
            }}
        >
            <span>
                <StarIcon sx={{ fontSize: '0.9rem' }} />
                {vote_average}
            </span>
        </Box>
    )
}

const ActorImage = ({ profile_path }: ActorImageProps) => {
    return (
        <img
            style={{
                borderRadius: '50px',
                boxShadow: '8px 8px 12px -5px rgba(0, 0, 0, 1)',
                height: 'auto',
                alignSelf: 'center',
                objectPosition: 'center top',
            }}
            width="278px"
            height="185px"
            src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
            alt="actor"
        />
    )
}

export default ActorDetails

/* --------------------------------- STYLES --------------------------------- */
const actorDetailsStyles = (mainThemeColorSecondary: string) => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        width: '550px',
        border: `2px ${mainThemeColorSecondary} solid`,
        padding: '2rem',
        borderImage: `linear-gradient(45deg, ${mainThemeColorSecondary} 1%, transparent 12%) 2`,
        marginTop: '1.5rem',
    }
}

const actorNameStyles = {
    fontSize: { xs: '24px', md: '32px', lg: '40px' },
    fontWeight: 'bold',
}

const knownForStyles = {
    fontSize: '1rem',
    color: '#fc7b03',
    fontWeight: 'bold',
}

/* --------------------------------- TYPES --------------------------------- */
type ActorNameProps = Pick<Actor, 'name'>
type ActorKnownForProps = Pick<Actor, 'known_for'>
type ActorRatingProps = Pick<Actor, 'vote_average'>
type ActorImageProps = Pick<Actor, 'profile_path'>
type ActorRoleOverviewProps = Pick<Actor, 'overview'>
