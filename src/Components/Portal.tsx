import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }: PortalProps) => {
    const modal = document.getElementById('modal')
    return modal && createPortal(children, modal)
}

export default Portal

/* --------------------------------- TYPES --------------------------------- */
type PortalProps = {
    children: ReactNode
}
