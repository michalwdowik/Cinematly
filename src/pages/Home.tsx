import { Grid } from '@mui/material'
import CarouselMovies from '../Carousel/Carousel'
import Quote from '../Quote'

const Home = () => (
    <Grid container item>
        <CarouselMovies />
        <Quote />
    </Grid>
)

export default Home
