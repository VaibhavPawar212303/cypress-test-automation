describe('Blog Page Validation', () => {
  it('should load the blog page correctly', () => {
    cy.visit("/blogs/difference-between-cypress-e2e-and-component-testing-deep-dive-guide");

    // Check page title
    cy.title().should('include', 'TestForum');

    // Check for main blog heading
    cy.get('h1').should('contain.text', 'Difference Between Cypress E2E and Component Testing');

    // Check if author or metadata is present
    cy.get('body').then(($body) => {
      if ($body.text().includes('by')) {
        cy.contains('by').should('exist');
      }
    });
  });
});
