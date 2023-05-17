import { Box, Skeleton } from '@mui/material'
import SearchedMovieDetails from './SearchedMovieDetails'
import { Movie } from '../MovieCard/types'

const SearchedMovie = ({ movie, onLoad }: SearchedMovieProps) => {
    return (
        <Box key={movie.id} className="searchedMovie">
            {movie.poster_path && (
                <SearchedMoviePoster
                    onLoad={onLoad}
                    searchedMovieTitle={movie.title}
                    searchedMoviePoster={movie.poster_path}
                />
            )}
            <SearchedMovieDetails movie={movie} />
        </Box>
    )
}

export default SearchedMovie

const SearchedMoviePoster = ({
    searchedMovieTitle,
    searchedMoviePoster,
    onLoad,
}: SearchedMoviePosterProps) => {
    return searchedMoviePoster ? (
        <img
            alt={`${searchedMovieTitle}`}
            className="searchedMoviePoster"
            src={`https://image.tmdb.org/t/p/w300/${searchedMoviePoster}`}
            onLoad={onLoad}
        />
    ) : (
        <img
            alt="No poster placeholder"
            className="searchedMoviePoster"
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png
            `}
            onLoad={onLoad}
        />
    )
}

export const SearchedMovieSkeleton = ({
    movie,
    onLoad,
}: SearchedMovieProps) => {
    return (
        <Skeleton
            width="15.813rem"
            height="23.75rem"
            sx={{ bgcolor: 'grey.900', borderRadius: '3rem' }}
            variant="rounded"
            key={movie.id}
        >
            <SearchedMovie onLoad={onLoad} key={movie.id} movie={movie} />
        </Skeleton>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type SearchedMoviePosterProps = {
    searchedMovieTitle: string
    searchedMoviePoster: string | null
    onLoad: () => void
}

type SearchedMovieProps = { movie: Movie; onLoad: () => void }
