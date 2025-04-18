describe('Tesla Clone Homepage', () => {
  it('loads the homepage, checks elements, and opens the menu', () => {
    cy.visit('/', { failOnStatusCode: false });
    cy.wait(5000); // wait for the page to load

    // Check if the page title contains "Tesla"
    cy.title().should('include', 'Tesla');

    // Check for visible text/content on the main screen
    cy.contains('Model S').should('be.visible');
    cy.contains('Custom Order').should('be.visible');
    cy.contains('View Inventory').should('be.visible');

    // Click on the hamburger menu icon (assumed to be a button or div with role or class)
    cy.contains('Menu').click();
    cy.wait(2000); // wait for the menu to open
    // Wait for the menu to appear
    cy.contains('Model Y').should('be.visible').click();
    cy.wait(5000); // wait for the page to load
    cy.contains('order now').should('be.visible');
  });
});
