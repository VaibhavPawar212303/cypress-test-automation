describe('Blog Page Validation', () => {
  it('should load the blog page correctly', () => {
    cy.visit("/blogs/advanced-guide-to-react-components-testing-using-playwright");

    // Check page title
    cy.title().should('include', 'TestForum');

    // Check for main blog heading
    cy.get('h1').should('contain.text', 'Advanced Guide to React Components Testing Using Playwright');

    // Check if author or metadata is present
    cy.get('body').then(($body) => {
      if ($body.text().includes('by')) {
        cy.contains('by').should('exist');
      }
    });
  });
});
