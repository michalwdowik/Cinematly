import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useRedirectToError404 = (isMovie: boolean, isRootPath: boolean) => {
    const history = useNavigate()

    useEffect(() => {
        if (!isMovie && !isRootPath) {
            history('/error404')
        }
    }, [isMovie, isRootPath, history])
}

export default useRedirectToError404
