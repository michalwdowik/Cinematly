import { Box, Skeleton } from '@mui/material'

const TopRatedMovieSkeleton = () => {
    return (
        <Box className="top-rated-movie">
            <Skeleton
                className="top-rated-movie-skeleton"
                sx={{
                    bgcolor: 'grey.900',
                }}
                width={400}
                height={400}
                variant="rectangular"
            />
        </Box>
    )
}

export default TopRatedMovieSkeleton
