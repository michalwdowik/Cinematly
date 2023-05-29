import { Box } from '@mui/material'
import MemoizedTopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import Headline from '../Components/Headline'
import '../Styles/top-rated-movies.css'

const TopRated = () => {
    return (
        <>
            <Box className="top-rated-page">
                <Headline
                    title="Top Rated Movies"
                    subtitle="Revisit the Legends of the Silver Screen - Our Curated Collection of Timeless Classics"
                    leftAligned
                    enableParallax={false}
                />
            </Box>
            <MemoizedTopRatedMovies />
        </>
    )
}

export default TopRated
