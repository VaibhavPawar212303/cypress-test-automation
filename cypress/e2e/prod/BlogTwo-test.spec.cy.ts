describe('Blog Page Validation', () => {
  it('should load the blog page correctly', () => {
    cy.visit("/blogs/top-25-cypress-commands-for-efficient-test-automation");

    // Check page title
    cy.title().should('include', 'TestForum');

    // Check for main blog heading
    cy.get('h1').should('contain.text', 'Top 25 Cypress Commands for Efficient Test Automation');

    // Check if author or metadata is present
    cy.get('body').then(($body) => {
      if ($body.text().includes('by')) {
        cy.contains('by').should('exist');
      }
    });
  });
});
