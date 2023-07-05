/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { motion } from 'framer-motion'
import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import {
    LazyLoadComponent,
    LazyLoadImage,
} from 'react-lazy-load-image-component'
import { TrendingMovieDetailsProps, TrendingMovieProps } from './types'
import TrendingMovieModal from './TrendingMovieModal'
import useModalLogic from '../Hooks/useShowModal'
import Portal from '../Components/Portal'
import TrendingMovieSkeleton from './TrendingMovieSkeleton'
import useCloseOnEscapeKey from '../Hooks/useCloseOnEscapeKey'

const TrendingMovie = ({
    id,
    title,
    backdrop_path,
    vote_average,
}: TrendingMovieProps) => {
    const { showModal, closeModal, openModal } = useModalLogic()
    useCloseOnEscapeKey({ closeModal })

    return (
        <>
            <li onClick={openModal} className="zoom-on-hover card">
                <Box className="card-content-container">
                    <motion.div
                        className="card-content"
                        layoutId={`card-container-${id}`}
                    >
                        <TrendingMovieImage
                            backdrop_path={backdrop_path}
                            id={id}
                        />
                        <LazyLoadComponent>
                            <TrendingMovieDetails
                                id={id}
                                vote_average={vote_average}
                                title={title}
                            />
                        </LazyLoadComponent>
                    </motion.div>
                </Box>
            </li>
            {showModal && (
                <Portal id="trendingMovie">
                    <TrendingMovieModal closeModal={closeModal} id={id} />
                </Portal>
            )}
        </>
    )
}
export default TrendingMovie

const TrendingMovieImage = ({ id, backdrop_path }: MovieImageProps) => {
    return (
        <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
        >
            <LazyLoadImage
                placeholder={<TrendingMovieSkeleton />}
                width="800px"
                height="450px"
                className="card-image"
                src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                alt="trending movie"
            />
        </motion.div>
    )
}

const TrendingMovieDetails = ({
    id,
    title,
    vote_average,
}: TrendingMovieDetailsProps) => {
    return (
        <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
        >
            <TrendingMovieTitle title={title} />
            <TrendingMovieRating vote_average={vote_average} />
        </motion.div>
    )
}

const TrendingMovieTitle = ({ title }: MovieTitleProps) => {
    return <p style={{ margin: '0', padding: '0' }}>{title}</p>
}

const TrendingMovieRating = ({ vote_average }: MovieRatingProps) => {
    return (
        <Box
            component="span"
            sx={{ display: 'flex' }}
            className="trending-movie-rating"
        >
            <StarIcon sx={{ fontSize: '14px' }} />
            {vote_average}
        </Box>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type MovieImageProps = Pick<TrendingMovieProps, 'id' | 'backdrop_path'>
type MovieTitleProps = Pick<TrendingMovieProps, 'title'>
type MovieRatingProps = Pick<TrendingMovieProps, 'vote_average'>
