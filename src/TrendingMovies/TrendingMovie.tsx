import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import { TrendingMovieDetailsProps, TrendingMovieProps } from './types'

const TrendingMovie = ({
    id,
    title,
    backdrop_path,
    vote_average,
}: TrendingMovieProps) => (
    <li className="zoom-on-hover card">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
            <TrendingMovieImage backdrop_path={backdrop_path} id={id} />
            <TrendingMovieDetails
                id={id}
                vote_average={vote_average}
                title={title}
            />
        </motion.div>
        <Link
            to={id}
            className="card-open-link"
            aria-label="Trending movie card"
        />
    </li>
)
export default TrendingMovie

const TrendingMovieImage = ({ id, backdrop_path }: MovieImageProps) => {
    const getImageUrl = (size: string) => {
        const baseUrl = 'https://image.tmdb.org/t/p/'
        return `${baseUrl}${size}${backdrop_path}`
    }

    return (
        <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
        >
            <img
                style={{
                    height: '439px',
                    width: '780px',
                    objectFit: 'cover',
                }}
                className="card_image"
                srcSet={`
            ${getImageUrl('w300')} 300w,
            ${getImageUrl('w780')} 780w,
            ${getImageUrl('w1280')} 1280w
          `}
                sizes="
            (max-width: 600px) 300px,
            (max-width: 1200px) 780px,
            1280px
          "
                src={getImageUrl('w780')}
                alt=""
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
    return <h1>{title}</h1>
}

const TrendingMovieRating = ({ vote_average }: MovieRatingProps) => {
    return (
        <Box
            component="span"
            sx={{ display: 'flex' }}
            className="trendingMovieRating"
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
