import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('a-spec', () => {
  describe('page', () => {
    before(() => {
      debugger
      cy.visit(Cypress.env('HOST') || '/')
    })

    it('has navbar', () => {
      cy.contains('.navbar', 'cypress.io')
    })

    it('has banner', () => {
      cy.contains('.banner', 'Kitchen Sink')
    })

    it('banner text color is green', () => {
      cy.get('.banner')
        .should('have.css', 'background-color')
        .and('be.colored', '#00bf88')
    })

    it('has paragraph', () => {
      cy.contains('p')
    })
  })
})
