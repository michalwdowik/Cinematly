describe('TopRated', () => {
    beforeEach(() => {
        cy.viewport(1000, 2600)
        cy.visit('http://localhost:3000/top-rated')
    })

    describe('Theme', () => {
        it('should change theme to light and get back to dark', () => {
            cy.get('body').should(
                'have.css',
                'background-color',
                'rgb(18, 18, 18)'
            )
            cy.get('svg > circle').click({ force: true })
            cy.get('body').should(
                'have.css',
                'background-color',
                'rgb(243, 243, 243)'
            )
            cy.get('svg > circle').click({ force: true })
            cy.get('body').should(
                'have.css',
                'background-color',
                'rgb(18, 18, 18)'
            )
        })
    })

    describe('Watchlist', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/top-rated')
        })

        it('should hover Top Rated Movie and add to watchlist', () => {
            cy.get('.top-rated-movie:nth-child(1) .watch-later-button')
                .realHover()
                .click({ force: true })

            cy.get('.MuiFab-root').click()
            cy.get('.watchlist-movie-overview').click()
            cy.get('.PrivateSwitchBase-input').as('switchInput')
            cy.get('@switchInput').click()
            cy.get('.MuiBackdrop-root').click()
        })

        it('should add and remove all TopRatedMovies from Watchlist', () => {
            cy.get('.top-rated-movies')
                .find('.top-rated-movie .watch-later-button')
                .each(($movie) => {
                    cy.wrap($movie).click({ force: true })
                })

            cy.get('[data-testid=AccessAlarmIcon]').click({ force: true })
            cy.get('.MuiBackdrop-root').click()
        })
    })
})

export {}
