/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
    Alert,
    Box,
    Checkbox,
    Fab,
    FormControlLabel,
    Snackbar,
    ThemeProvider,
    Tooltip,
    Typography,
    Zoom,
    createTheme,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Movie } from '../types/MoviesTypes'
import '../Styles/speeddial.css'
import cutText from '../Helpers/cutText'
import { MAIN_THEME_COLOR, MAIN_THEME_COLOR_SECONDARY } from '../Helpers/colors'
import { useWatchlistContext } from '../Helpers/Watchlist'

const SpeedDial = () => {
    const [open, setOpen] = useState(false)
    const [animationParent] = useAutoAnimate()

    const toggleOpen = () => {
        setOpen(!open)
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: MAIN_THEME_COLOR,
            },
        },
    })

    const { watchlist, removeMovieFromWatchlist, showAlert } =
        useWatchlistContext()

    const [animateAdd, setAnimateAdd] = useState(false)

    const prevLengthRef = useRef(watchlist.length)

    useEffect(() => {
        const handleEscapeKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && open) {
                setOpen(false)
            }
        }

        document.addEventListener('keydown', handleEscapeKeyPress)

        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress)
        }
    }, [open])

    useEffect(() => {
        if (watchlist.length > prevLengthRef.current) {
            setAnimateAdd(true)
            setTimeout(() => {
                setAnimateAdd(false)
            }, 1000)
        }
        prevLengthRef.current = watchlist.length
    }, [watchlist.length])

    return (
        <div className="speed-dial">
            {/* <Snackbar open={animateAdd} autoHideDuration={6000}>
                <Alert severity="warning" sx={{ width: '50%' }}>
                    Movie already added to watchlist
                </Alert>
            </Snackbar> */}

            <Tooltip
                placement="left-start"
                TransitionComponent={Zoom}
                title="Watchlist"
            >
                <Fab
                    className={animateAdd ? 'animateAdd' : ''}
                    sx={{
                        backgroundColor: MAIN_THEME_COLOR,
                        color: 'white',
                        transition: '0.4s all ease-in-out',
                        '&:hover': {
                            scale: '1.2',
                            backgroundColor: MAIN_THEME_COLOR_SECONDARY,
                        },
                    }}
                    onClick={toggleOpen}
                    aria-label="edit"
                >
                    <AccessAlarmIcon />
                </Fab>
            </Tooltip>

            <div className={`speed-dial-list ${open ? 'open' : 'hide'}`}>
                <Typography
                    sx={{
                        fontWeight: '600',
                        fontSize: '3rem',
                        paddingTop: '1rem',
                        paddingLeft: '2.6rem',
                        zIndex: '100',
                        color: `black`,
                        opacity: '65%',
                        width: '100%',
                    }}
                >
                    Watchlist:
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{
                        alignSelf: 'flex-start',
                        paddingLeft: '2.8rem',
                        color: 'black',
                        opacity: '50%',
                        marginTop: '-10px',
                        marginBottom: '20px',
                    }}
                >
                    Track, add, remove, and mark movies as watched.
                </Typography>

                <ul ref={animationParent}>
                    {watchlist.map((movie: Movie) => (
                        <Box
                            key={movie.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'center',
                            }}
                        >
                            <li key={movie.id} className="speed-dial-item">
                                <FormControlLabel
                                    control={
                                        <ThemeProvider theme={theme}>
                                            <Checkbox
                                                onChange={() =>
                                                    removeMovieFromWatchlist(
                                                        movie
                                                    )
                                                }
                                            />
                                        </ThemeProvider>
                                    }
                                    label={
                                        <div className="speed-dial-item-details">
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}
                                            >
                                                <img
                                                    src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                                                    alt={movie.title}
                                                />

                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        transition:
                                                            '0.2s ease-in-out all',
                                                        ':hover': {
                                                            opacity: '40%',
                                                        },
                                                    }}
                                                >
                                                    <div className="speed-dial-item-title">
                                                        {movie.title}
                                                    </div>
                                                    <div className="speed-dial-item-release-date">
                                                        {movie.release_date ||
                                                            movie.release}
                                                    </div>
                                                </Box>
                                            </Box>
                                            <Typography
                                                sx={{
                                                    alignSelf: 'start',
                                                    justifyContent: 'start',
                                                    overflow: 'scroll',
                                                    color: 'black',
                                                    fontSize: '0.75rem',
                                                    transition:
                                                        '0.2s ease-in-out all',
                                                    ':hover': {
                                                        opacity: '40%',
                                                    },
                                                }}
                                            >
                                                {cutText(movie.overview, 10)}..
                                            </Typography>
                                        </div>
                                    }
                                />
                            </li>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '0.5px',
                                    color: 'black',
                                    border: '1px black solid',
                                    textAlign: 'center',
                                    alignSelf: 'center',
                                    opacity: '5%',
                                    marginY: '0.4rem',
                                }}
                            />
                        </Box>
                    ))}
                </ul>
                {watchlist.length === 0 && (
                    <Typography
                        variant="h4"
                        sx={{ color: 'black', opacity: '50%' }}
                    >
                        Add some movies...
                    </Typography>
                )}
            </div>
        </div>
    )
}

export default SpeedDial
