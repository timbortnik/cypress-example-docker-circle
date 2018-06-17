import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('a-spec', () => {
  describe('page', () => {
    beforeEach(() => {
      debugger
      cy.visit(Cypress.env('HOST') || 'index.html')
    })

    it('has h2', () => {
      cy.contains('h2', 'A test')
    })

    it('has paragraph', () => {
      cy.contains('p')
    })

    it('paragraph text color', () => {
      cy.contains('p')
        .should('have.css', 'color')
        .and('be.colored', 'rgb(0, 0, 255)')
    })
  })
})
