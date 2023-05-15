import { Box, Skeleton } from '@mui/material'

const TopRatedMovieSkeleton = () => {
    return (
        <Box className="topRatedMovie">
            <Skeleton
                sx={{
                    bgcolor: 'grey.900',
                    borderRadius: '2rem',
                    margin: 'auto',
                }}
                width={400}
                height={400}
                variant="rectangular"
            />
        </Box>
    )
}
export default TopRatedMovieSkeleton
