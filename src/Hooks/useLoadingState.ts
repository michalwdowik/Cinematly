import { useState } from 'react'

type LoadingStateHook = () => [boolean, () => void]

const useLoadingState: LoadingStateHook = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    const onLoad: () => void = () => {
        setIsLoaded(true)
    }

    return [isLoaded, onLoad]
}

export default useLoadingState
