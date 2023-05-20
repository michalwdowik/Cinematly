import { Box } from '@mui/material'
import MemoizedTopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import Headline from '../Components/Headline'
import '../Styles/topRatedMovies.css'

const TopRated = () => {
    return (
        <div className="page">
            <Box className="topRatedPageBox">
                <Headline
                    title="Top Rated Movies"
                    subtitle="Revisit the Legends of the Silver Screen - Our Curated Collection of Timeless Classics"
                    leftAligned
                    enableParallax={false}
                />
            </Box>
            <MemoizedTopRatedMovies />
        </div>
    )
}

export default TopRated
