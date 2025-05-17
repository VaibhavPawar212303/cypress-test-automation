describe('Blog Page Validation', () => {
  it('should load the blog page correctly', () => {
    cy.visit("/");

    // Check page title
    cy.title().should('include', Cypress.env("title"));
    cy.get("span[class*='text-xl font-bold']").should('have.text', Cypress.env("header"));
    
    cy.visit("/blogs/how-cypress-testing-improves-devops-workflows-7-benefits");

    // Check for main blog heading
    cy.get('h1').should('contain.text', 'How Cypress Testing Improves DevOps Workflows: 7 Benefits');

    // Check if author or metadata is present
    cy.get('body').then(($body) => {
      if ($body.text().includes('by')) {
        cy.contains('by').should('exist');
      }
    });
  });
});
