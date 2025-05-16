describe('Blog Page Validation', () => {
  it('should load the blog page correctly', () => {
    cy.visit("/blogs/sequential-vs-parallel-testing-in-cypress-which-is-right-for-you");

    // Check page title
    cy.title().should('include', 'TestForum');

    // Check for main blog heading
    cy.get('h1').should('contain.text', 'Sequential vs. Parallel Testing in Cypress: Which is Right for You?');

    // Check if author or metadata is present
    cy.get('body').then(($body) => {
      if ($body.text().includes('by')) {
        cy.contains('by').should('exist');
      }
    });
  });
});
