import { Skeleton } from '@mui/material'

const TrendingMovieSkeleton = () => {
    return (
        <Skeleton
            variant="rounded"
            sx={{
                backgroundColor: 'grey.800',
            }}
        >
            <img
                width="800px"
                height="450px"
                className="card-image"
                alt="trending movie"
            />
        </Skeleton>
    )
}

export default TrendingMovieSkeleton
