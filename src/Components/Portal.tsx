import { createPortal } from 'react-dom'
import { ReactNode } from 'react'

const Portal = ({ children, id }: PortalProps) => {
    const modal = document.getElementById(id)
    return modal && createPortal(children, modal)
}

export default Portal

/* --------------------------------- TYPES --------------------------------- */
type PortalProps = {
    children: ReactNode
    id: string
}
