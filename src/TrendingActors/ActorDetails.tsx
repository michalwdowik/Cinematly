import StarIcon from '@mui/icons-material/Star'
import { useContext } from 'react'
import { Box, Skeleton } from '@mui/material'
import { ThemeContext } from '../Components/ThemeContext'
import { Actor } from './types'
import shortenOverview from '../Helpers/cutText'
import useLoadingState from '../Hooks/useLoadingState'

const ActorDetails = ({
    name,
    vote_average,
    known_for,
    overview,
    profile_path,
}: Actor) => {
    const { mainThemeColorSecondary } = useContext(ThemeContext)
    const [isLoaded, onLoad] = useLoadingState()

    return (
        <Box sx={actorDetailsStyles(mainThemeColorSecondary)}>
            <Box sx={actorInfoStyles}>
                {isLoaded ? (
                    <>
                        <ActorName name={name} />
                        <Box sx={knownForWrapperStyles}>
                            <ActorRating vote_average={vote_average} />
                            <ActorKnownFor known_for={known_for} />
                        </Box>
                        <ActorRoleOverview overview={overview} />
                    </>
                ) : (
                    <>
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
                        <Skeleton
                            variant="text"
                            height="30px"
                            sx={{
                                ...knownForStyles,
                                bgcolor: 'grey.900',
                            }}
                        >
                            <Box sx={knownForWrapperStyles}>
                                <ActorRating vote_average={vote_average} />
                                <ActorKnownFor known_for={known_for} />
                            </Box>
                        </Skeleton>
                        <Skeleton
                            variant="text"
                            sx={{
                                ...actorRoleOverviewStyles,
                                bgcolor: 'grey.900',
                            }}
                        >
                            <ActorRoleOverview overview={overview} />
                        </Skeleton>
                    </>
                )}
            </Box>
            {isLoaded ? (
                <ActorImage onLoad={onLoad} profile_path={profile_path} />
            ) : (
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
            )}
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
        <Box sx={actorRoleOverviewStyles(textColor)}>
            {shortenOverview(overview, 25)}
        </Box>
    )
}

const ActorRating = ({ vote_average }: ActorRatingProps) => {
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

const ActorImage = ({ profile_path, onLoad }: ActorImageProps) => {
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

const actorInfoStyles = {
    width: '60%',
    padding: '0.3rem',
    marginRight: '1.5rem',
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
const knownForWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontStyle: 'italic',
    marginY: '.5rem',
}

const actorRoleOverviewStyles = (textColor: string) => {
    return {
        color: textColor,
        marginBottom: '10px',
        opacity: '70%',
    }
}

const actorRatingStyles = (textColor: string) => {
    return {
        color: textColor,
        fontSize: '1rem',
        display: 'flex',
        minWidth: '40px',
    }
}

const actorImageStyles = {
    borderRadius: '50px',
    boxShadow: '8px 8px 12px -5px rgba(0, 0, 0, 1)',
    height: 'auto',
    alignSelf: 'center',
    objectPosition: 'center top',
}
/* --------------------------------- TYPES --------------------------------- */
type ActorNameProps = Pick<Actor, 'name'>
type ActorKnownForProps = Pick<Actor, 'known_for'>
type ActorRatingProps = Pick<Actor, 'vote_average'>
type ActorImageProps = Pick<Actor, 'profile_path'> & { onLoad: () => void }
type ActorRoleOverviewProps = Pick<Actor, 'overview'>
