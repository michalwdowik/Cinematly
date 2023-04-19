import { ReactNode } from 'react'

export type DrawerListProps = {
    toggleDrawer: (open: boolean) => () => void
    isDrawerOpen: boolean
}

export type NavbarMenuProps = {
    pageLabel: string
    setPageLabel: (pageLabel: string) => void
}

export type NavbarTabsProps = {
    pageLabel: string
    setPageLabel: (pageLabel: string) => void
}

export type NavbarTabProps = {
    page: Page
}

export type Page = {
    label: string
    icon: ReactNode
    link: string
}
