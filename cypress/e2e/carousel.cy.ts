describe('Carousel', () => {
    beforeEach(() => {
        cy.viewport(1280, 800)
        cy.visit('http://localhost:5173/')
    })

    it('should navigate to next and previous slides', () => {
        cy.get('.control-next').click()
        cy.get('.control-prev').click()
    })
})
