describe('Search', () => {
    beforeEach(() => {
        cy.viewport(1280, 800)
        cy.visit('http://localhost:3000/')
    })

    it('should open search movie panel, search for movie: Shrek, add it to watchlist, dismiss search panel, and remove movie from Watchlist', () => {
        cy.get(':nth-child(1) > .MuiButtonBase-root').realClick()
        cy.get('.MuiFormControl-root').click().type('Shrek')
        cy.wait(1000)
        cy.get('.searched-movie:nth-child(1) .watch-later-button').click({
            force: true,
        })
        cy.get('.MuiBackdrop-root').click({ force: true })
        cy.get('[data-testid=AccessAlarmIcon]').click()
        cy.get('.watchlist-movie-overview').click()
        cy.get('.MuiBackdrop-root').click()
    })
})
export {}
