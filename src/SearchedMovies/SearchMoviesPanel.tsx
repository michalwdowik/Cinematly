import '@mui/material/transitions/transition'
import { useContext, useState } from 'react'
import { Backdrop, Box, Fade, Modal } from '@mui/material'
import SearchedMovies from './SearchedMovies'
import SearchMovieInput from './SearchMovieInput'
import { ThemeContext } from '../Contexts/ThemeContext'
import useFetchMovies from '../Hooks/useFetchMovies'
import '../Styles/searched-movies.css'

const SearchMoviesPanel = ({ closeModal, showModal }: SearchProps) => {
    const { backgroundColor } = useContext(ThemeContext)
    const [searchQuery, setSearchQuery] = useState('')
    const searchedMovies = useFetchMovies('searched', searchQuery)
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }

    return (
        <Modal
            open={showModal}
            onClose={closeModal}
            sx={{ zIndex: '4' }}
            container={() => document.getElementById('searchMoviesPanel')}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    sx: {
                        backdropFilter: 'blur(10px)',
                    },
                },
            }}
        >
            <Fade in={showModal}>
                <Box className="search-movies" bgcolor={backgroundColor}>
                    <SearchMovieInput
                        searchQuery={searchQuery}
                        handleSearchChange={handleSearchChange}
                    />
                    <SearchedMovies searchedMovies={searchedMovies} />
                </Box>
            </Fade>
        </Modal>
    )
}

export default SearchMoviesPanel

type SearchProps = {
    closeModal: () => void
    showModal: boolean
}
