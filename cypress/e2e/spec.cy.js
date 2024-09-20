describe('Sample Test', () => {
  it('should visit the home page', () => {
    cy.visit('/')
    cy.title().should('eq', 'Landing Page Sample') // Adjust the text to match your home page
  })
})
