/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    //should fail
    cy.get('DOESNOTEXIST')
      .should('not.be.empty')
  })
})
