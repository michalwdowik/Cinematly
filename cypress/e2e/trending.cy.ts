describe('Trending', () => {
    beforeEach(() => {
        cy.viewport(1280, 800)
        cy.visit('http://localhost:5173/')
    })

    it('should open trending movie modal, add it to watchlist, then remove', () => {
        cy.get('.zoom-on-hover:nth-child(1)').click()
        cy.get('.watchLaterButton').click()
        cy.get('.trendingMovieModalOverlay').click({ force: true })
        cy.get('.MuiFab-root').click()
        cy.get('.watchlistMovieOverview').click()
        cy.get('.PrivateSwitchBase-input').click()
        cy.get('.MuiBackdrop-root').click()
    })
})
export {}
