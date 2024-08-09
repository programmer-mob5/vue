describe('Example E2E Testing', () => {
  it('should visit page and display hello world', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Hello World!');
  });
});
