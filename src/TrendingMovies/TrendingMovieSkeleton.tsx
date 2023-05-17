import { Skeleton } from '@mui/material'
import { TrendingMovieProps } from './types'

const TrendingMovieSkeleton = ({
    backdrop_path,
    onLoad,
}: TrendingMovieSkeletonProps) => {
    return (
        <Skeleton
            variant="rounded"
            sx={{
                backgroundColor: 'grey.800',
            }}
        >
            <img
                onLoad={onLoad}
                width="800px"
                height="450px"
                className="card-image"
                src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                alt="trending movie"
            />
        </Skeleton>
    )
}

export default TrendingMovieSkeleton

type TrendingMovieSkeletonProps = Pick<TrendingMovieProps, 'backdrop_path'> & {
    onLoad: () => void
}
