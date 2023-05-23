describe('TopRated', () => {
    beforeEach(() => {
        cy.viewport(1000, 2600)
    })

    describe('Theme', () => {
        it('should change theme to light and get back to dark', () => {
            cy.visit('http://localhost:5173/top-rated')
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
            cy.visit('http://localhost:5173/top-rated')
        })

        it('should display animation of TopRatedMovie hovering and adding to watchlist', () => {
            cy.get('.topRatedMovie:nth-child(1) .watchLaterButton')
                .realHover()
                .click({ force: true })

            cy.get('.MuiFab-root').click()
            cy.get('.watchlistMovieOverview').click()
            cy.get('.PrivateSwitchBase-input').click()
            cy.get('.MuiBackdrop-root').click()
        })

        it('should add and remove all TopRatedMovies from Watchlist', () => {
            cy.get('.topRatedMovies')
                .find('.topRatedMovie .watchLaterButton')
                .each(($movie) => {
                    cy.wrap($movie).click({ force: true })
                })

            cy.get('[data-testid=AccessAlarmIcon]').click({ force: true })
            cy.get('.MuiBackdrop-root').click()
        })
    })
})
