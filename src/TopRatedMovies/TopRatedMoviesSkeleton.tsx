import { Box, Skeleton } from '@mui/material'

const TopRatedMovieSkeleton = () => {
    return (
        <Box className="topRatedMovie">
            <Skeleton
                className="topRatedMovieSkeleton"
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
