import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

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
