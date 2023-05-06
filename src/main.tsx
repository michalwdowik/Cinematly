import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/styles.css'
import './Styles/searchedmovies.css'
import './Styles/keyframes.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>
)
