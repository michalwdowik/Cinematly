import { Box } from '@mui/material'
import SectionHeading from '../Components/SectionHeading'
import '../Styles/toprated.css'
import { topRatedPageBoxSx } from '../ComponentStyles/MovieStyles'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'

const TopRated = () => {
    return (
        <>
            <Box sx={topRatedPageBoxSx}>
                <SectionHeading
                    heading="Top Rated Movies"
                    subheading="Revisit the Legends of the Silver Screen - Our Curated Collection of Timeless Classics"
                    leftAligned
                    enableParallax={false}
                />
            </Box>
            <TopRatedMovies />
        </>
    )
}

export default TopRated
