import { Container, TextField } from '@mui/material';
import ButtonAppBar from './AppBar';
import CarouselMovies from './CarouselMovies';

function App() {
  return (
    <div>
      <ButtonAppBar />
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      {/* <Container sx={{}}> */}
      <CarouselMovies />
      {/* </Container> */}
      {/* <TrendingMovies /> */}
    </div>
  );
}

export default App;
