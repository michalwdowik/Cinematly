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
            <Box
                sx={{
                    // border: '2px green solid',
                    width: '50%',
                    padding: '0.3rem',
                }}
            >
                <ActorName name={name} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontStyle: 'italic',
                        // border: '2px blue solid',
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
                fontSize: '1rem',
                // border: '2px yellow solid',
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
                padding: '0.3rem',
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
const actorDetailsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '500px',
    border: '2px #fc7703 solid',
    padding: '1rem',
    borderImage: 'linear-gradient(45deg, #fc7703 1%, transparent 12%) 2',
    marginTop: '1.5rem',
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

// const actorImageStyles = (url: string) => ({
//     width: '100%',
//     height: '100%',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center center',
//     borderRadius: '50px',
//     backgroundImage: `url(https://image.tmdb.org/t/p/w300/${url})`,
//     boxShadow: '8px 8px 12px -5px rgba(0, 0, 0, 1)',
// })

/* --------------------------------- TYPES --------------------------------- */
type ActorNameProps = Pick<Actor, 'name'>
type ActorKnownForProps = Pick<Actor, 'known_for'>
type ActorRatingProps = Pick<Actor, 'vote_average'>
type ActorImageProps = Pick<Actor, 'profile_path'>
type ActorRoleOverviewProps = Pick<Actor, 'overview'>
