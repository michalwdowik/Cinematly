describe('Search', () => {
    beforeEach(() => {
        cy.viewport(1280, 800)
        cy.visit('http://localhost:5173/')
    })

    it('should open search movie panel, search for movie: Shrek, add it to watchlist, dismiss search panel, and remove movie from Watchlist', () => {
        cy.get('.MuiTab-root:nth-child(1)').click()
        cy.get('.MuiFormControl-root').click().type('Shrek')
        cy.wait(1000)
        cy.get('.searchedMovie:nth-child(1) .watchLaterButton').click({
            force: true,
        })
        cy.get('.MuiBackdrop-root').click({ force: true })
        cy.get('[data-testid=AccessAlarmIcon]').click()
        cy.get('.watchlistMovieOverview').click()
        cy.get('.MuiBackdrop-root').click()
    })
})
export {}
