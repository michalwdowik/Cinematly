/* eslint-disable @typescript-eslint/naming-convention */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import { Button } from '@mui/material'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import { items } from './Data'

const Item = ({ id }: { id: string }) => {
    const {
        title,
        backdrop_path,
        overview,
        vote_average,
        release,
        original_title,
        original_language,
    } = items.find((item: Element) => item.id === id)

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: 'auto' }}
                className="overlay"
            >
                <Link to="/" />
            </motion.div>

            <div className="card-content-container open">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <motion.div
                            className="title-container"
                            layoutId={`title-container-${id}`}
                        >
                            <span
                                style={{ display: 'flex' }}
                                className="category"
                            >
                                <StarIcon
                                    sx={{ color: 'white', fontSize: '15px' }}
                                />
                                {vote_average}
                            </span>
                            <h2>{title}</h2>
                        </motion.div>
                        <img
                            className="card-image"
                            src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                            alt=""
                        />
                    </motion.div>

                    <motion.div className=" content-container" animate>
                        {/* <div> */}

                        <div style={{ position: 'relative' }}>
                            <Button
                                variant="contained"
                                startIcon={<WatchLaterIcon />}
                                style={{
                                    position: 'absolute',
                                    transitionDuration: '0.3s',
                                    top: '-32px',
                                    // float: 'inline-end',
                                    // top: '72%',
                                    // top: '320px',
                                    right: '0px',
                                    backgroundColor: 'orange',
                                    borderRadius: '30px',
                                    alignSelf: 'end',
                                    width: 'auto',
                                    fontSize: '11px',
                                    zIndex: '1',
                                    overflow: 'visible',
                                }}
                            >
                                Add to watchlist
                            </Button>
                            {original_title && (
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                        display: 'inline',
                                    }}
                                >
                                    Original title:
                                </span>
                            )}{' '}
                            {original_title}
                            <br />
                            <span
                                style={{
                                    fontWeight: 'bold',
                                    display: 'inline',
                                }}
                            >
                                Release date:
                            </span>{' '}
                            {release}
                            <br />
                            {original_language && (
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                        display: 'inline',
                                    }}
                                >
                                    Language:
                                </span>
                            )}{' '}
                            {original_language}
                        </div>
                        {/* <br /> */}

                        {overview}
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default Item
