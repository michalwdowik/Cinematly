/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
    Badge,
    Box,
    Checkbox,
    Collapse,
    Fab,
    FormControlLabel,
    List,
    ThemeProvider,
    Tooltip,
    Typography,
    Zoom,
    createTheme,
} from '@mui/material'
import { TransitionGroup } from 'react-transition-group'
import { useEffect, useRef, useState } from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { Movie } from '../types/MoviesTypes'
import '../Styles/speeddial.css'
import cutText from '../Helpers/cutText'
import { useWatchlistContext } from '../Helpers/Watchlist'
import useThemeColors from '../Hooks/useThemeColors'
import AddToWatchlistButton from '../TrendingMovies/AddToWatchlistButton'

const SpeedDial = () => {
    const { mainThemeColor, mainThemeColorSecondary } = useThemeColors()
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: mainThemeColor,
            },
        },
    })

    const { watchlist, removeMovieFromWatchlist } = useWatchlistContext()

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
            <Tooltip
                placement="left-start"
                TransitionComponent={Zoom}
                title="Add, remove, and mark movies as watched."
            >
                <Badge
                    className={animateAdd ? 'animateAdd' : ''}
                    showZero
                    sx={{
                        right: '10px',
                        zIndex: '9999',
                        transition: '0.4s all ease-in-out',
                        '&:hover': {
                            scale: '1.2',
                        },
                    }}
                    color="warning"
                    badgeContent={watchlist.length}
                >
                    <Fab
                        sx={{
                            backgroundColor: mainThemeColor,
                            color: 'white',
                            zIndex: '-1',
                            transition: '0.4s all ease-in-out',
                            '&:hover': {
                                backgroundColor: mainThemeColorSecondary,
                            },
                        }}
                        onClick={toggleOpen}
                        aria-label="watchlist"
                    >
                        <AccessAlarmIcon />
                    </Fab>
                </Badge>
            </Tooltip>

            {open && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '55px',
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                    }}
                    onClick={toggleOpen}
                />
            )}
            <div className={`speed-dial-list ${open ? 'open' : 'hide'}`}>
                <Typography
                    sx={{
                        fontWeight: '600',
                        fontSize: '3rem',
                        paddingTop: '1rem',
                        paddingLeft: '2.6rem',
                        zIndex: '100',
                        color: `black`,
                        opacity: '85%',
                        width: '100%',
                    }}
                >
                    Watchlist
                </Typography>
                <AccessAlarmIcon
                    sx={{
                        position: 'fixed',
                        top: '0',
                        right: '0',
                        margin: '2rem',
                        fontSize: '2rem',
                    }}
                />

                <List>
                    <TransitionGroup>
                        {watchlist.map((movie: Movie) => (
                            <Collapse key={movie.id}>
                                <Box
                                    key={movie.id}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignContent: 'center',
                                    }}
                                >
                                    <div className="speed-dial-item">
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
                                                            flexDirection:
                                                                'column',
                                                        }}
                                                    >
                                                        {movie.backdrop_path ? (
                                                            <img
                                                                src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                                                                alt={
                                                                    movie.title
                                                                }
                                                            />
                                                        ) : (
                                                            <img
                                                                src="https://heuft.com/upload/image/400x267/no_image_placeholder.png"
                                                                alt="empty img placeholder"
                                                            />
                                                        )}

                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                flexDirection:
                                                                    'column',
                                                                transition:
                                                                    '0.2s ease-in-out all',
                                                                ':hover': {
                                                                    opacity:
                                                                        '40%',
                                                                },
                                                            }}
                                                        >
                                                            <div className="speed-dial-item-title">
                                                                {movie.title}
                                                            </div>
                                                            <div className="speed-dial-item-release-date ">
                                                                {movie.release_date ||
                                                                    movie.release}
                                                            </div>
                                                        </Box>
                                                    </Box>
                                                    <Typography
                                                        sx={{
                                                            alignSelf: 'start',
                                                            justifyContent:
                                                                'start',
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
                                                        {cutText(
                                                            movie.overview,
                                                            20
                                                        )}
                                                        ..
                                                    </Typography>
                                                </div>
                                            }
                                        />
                                    </div>
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
                            </Collapse>
                        ))}
                    </TransitionGroup>
                </List>
                {watchlist.length === 0 && (
                    <Typography
                        sx={{
                            color: 'black',
                            opacity: '50%',
                            marginTop: '2rem',
                        }}
                    >
                        Add some movies...
                    </Typography>
                )}
            </div>
        </div>
    )
}

export default SpeedDial
