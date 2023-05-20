import '@mui/material/transitions/transition'
import { useContext, useState } from 'react'
import { Backdrop, Box, Fade, Modal } from '@mui/material'
import SearchedMovies from './SearchedMovies'
import SearchMovieInput from './SearchMovieInput'
import { ThemeContext } from '../Contexts/ThemeContext'
import useFetchMovies from '../Hooks/useFetchMovies'
import '../Styles/searchedMovies.css'

const Search = ({ closeModal, showModal }: SearchProps) => {
    const { backgroundColor } = useContext(ThemeContext)
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }

    const searchedMovies = useFetchMovies('searched', searchQuery)

    return (
        <Modal
            open={showModal}
            onClose={closeModal}
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
                <div>
                    <Box className="searchMovies" bgcolor={backgroundColor}>
                        <SearchMovieInput
                            searchQuery={searchQuery}
                            handleSearchChange={handleSearchChange}
                        />
                        <SearchedMovies searchedMovies={searchedMovies} />
                    </Box>
                </div>
            </Fade>
        </Modal>
    )
}

export default Search

type SearchProps = {
    closeModal: () => void
    showModal: boolean
}
