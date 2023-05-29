describe('Navigation', () => {
    beforeEach(() => {
        cy.viewport(1280, 800)
        cy.visit('http://localhost:3000/')
    })

    it('should navigate through all menu and footer tabs', () => {
        cy.get(':nth-child(3) > .MuiButtonBase-root').click()
        cy.get(':nth-child(2) > .MuiButtonBase-root').click()
        cy.get(':nth-child(3) > .MuiButtonBase-root').click()
        cy.get('.footer-menu-button:nth-child(1)').click()
        cy.get('.footer-menu-button:nth-child(2)').click()
        cy.get('.footer-menu-button:nth-child(3)').click()
        cy.get('.navbar-menu path').click({ force: true })
    })
    it('should navigate through drawer tabs', () => {
        cy.viewport(600, 800)

        cy.get('[data-testid=MenuIcon]').click()
        cy.get('.MuiListItem-root:nth-child(3) .drawer-list-row-name').click()
        cy.get('[data-testid="MenuIcon"] > path').click()
        cy.get('.MuiListItem-root:nth-child(4) .drawer-list-row-name').click()
        cy.get('[data-testid=MenuIcon]').click()
        cy.get('.MuiListItem-root:nth-child(1) .drawer-list-row-name').click()
    })
})
export {}
