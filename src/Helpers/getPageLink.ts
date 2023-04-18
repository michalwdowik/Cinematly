const getPageLink = (page: string) =>
    `/${page.split(' ').join('').toLowerCase()}`

export default getPageLink
