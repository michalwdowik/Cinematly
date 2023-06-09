describe('Upcoming', () => {
    beforeEach(() => {
        cy.viewport(1280, 800)
        cy.visit('http://localhost:3000/upcoming')
    })

    it('should add all upcoming or just released movies to watchlist', () => {
        cy.get('.vertical-timeline').each(($timeline) => {
            cy.wrap($timeline)
                .find('.vertical-timeline-element')
                .each(($element) => {
                    cy.wrap($element).find('.watch-later-button').click()
                })
        })

        cy.get('[data-testid=AccessAlarmIcon]').click()
    })
})
export {}
