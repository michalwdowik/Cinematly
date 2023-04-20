import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
    children: ReactNode
}

const Portal = ({ children }: PortalProps) => {
    const modal = document.getElementById('modal')
    return modal && createPortal(children, modal)
}

export default Portal
