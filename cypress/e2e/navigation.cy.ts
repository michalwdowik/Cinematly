describe('Navigation', () => {
    beforeEach(() => {
        cy.viewport(1280, 800)
        cy.visit('http://localhost:5173/')
    })

    it('should navigate through all menu and footer tabs', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.MuiButtonBase-root:nth-child(3)').click()
        cy.get('.MuiButtonBase-root:nth-child(2)').click()
        cy.get('.MuiButtonBase-root:nth-child(3)').click()
        cy.get('.footerMenuButton:nth-child(1)').click()
        cy.get('.footerMenuButton:nth-child(2)').click()
        cy.get('.footerMenuButton:nth-child(3)').click()
        cy.get('.navbarMenu path').click({ force: true })
    })
    it('should navigate through drawer tabs', () => {
        cy.viewport(600, 800)

        cy.get('[data-testid=MenuIcon]').click()
        cy.get('.MuiListItem-root:nth-child(3) .drawerListRowName').click()
        cy.get('[data-testid="MenuIcon"] > path').click()
        cy.get('.MuiListItem-root:nth-child(4) .drawerListRowName').click()
        cy.get('[data-testid=MenuIcon]').click()
        cy.get('.MuiListItem-root:nth-child(1) .drawerListRowName').click()
    })
})
export {}
