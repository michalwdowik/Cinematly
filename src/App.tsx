import { Box, Container, TextField } from '@mui/material';
import ButtonAppBar from './AppBar';
import CarouselMovies from './CarouselMovies';

function App() {
  return (
    <Box sx={{ width: '100vw' }}>
      <ButtonAppBar />
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      {/* <Container sx={{}}> */}
      <CarouselMovies />
      {/* </Container> */}
      {/* <TrendingMovies /> */}
    </Box>
  );
}

export default App;
