import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import {
    CardDetailsProps,
    TrendingMovieCardsProps,
} from './trendingMoviesTypes'

const TrendingMovieCard = ({
    id,
    title,
    theme,
    backdrop_path,
    vote_average,
}: TrendingMovieCardsProps) => (
    <li className={`zoom-on-hover card ${theme}`}>
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
            <CardImage backdrop_path={backdrop_path} id={id} />
            <CardDetails id={id} vote_average={vote_average} title={title} />
        </motion.div>
        <Link to={id} className="card-open-link" />
    </li>
)
export default TrendingMovieCard

const CardImage = ({ id, backdrop_path }: CardImageProps) => {
    return (
        <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
        >
            <img
                className="card_image"
                src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                alt=""
            />
        </motion.div>
    )
}

const CardDetails = ({ id, title, vote_average }: CardDetailsProps) => {
    return (
        <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
        >
            <MovieTitle title={title} />
            <MovieRating vote_average={vote_average} />
        </motion.div>
    )
}

const MovieTitle = ({ title }: MovieTitleProps) => {
    return <h1>{title}</h1>
}

const MovieRating = ({ vote_average }: MovieRatingProps) => {
    return (
        <Box component="span" sx={{ display: 'flex' }} className="category">
            <StarIcon sx={{ fontSize: '14px' }} />
            {vote_average}
        </Box>
    )
}

type CardImageProps = Pick<TrendingMovieCardsProps, 'id' | 'backdrop_path'>

type MovieTitleProps = Pick<TrendingMovieCardsProps, 'title'>

type MovieRatingProps = Pick<TrendingMovieCardsProps, 'vote_average'>
