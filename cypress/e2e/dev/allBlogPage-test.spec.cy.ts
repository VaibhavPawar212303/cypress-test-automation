describe('All Blogs Page', () => {
  beforeEach(() => {
    cy.visit('/blogs'); // Replace with actual route if different
    cy.wait(5000);
  });

  it.only('should render the page heading', () => {
    cy.contains('h1', 'All Blogs').should('be.visible');
  });

  it.only('should display blog title and Read More link for each blog', () => {
    cy.get('[class*="shadow-md"]').each(($card) => {
      cy.wrap($card).find('h3').should('exist');
      cy.wrap($card).find('a').contains('Read More').should('have.attr', 'href');
    });
  });

  it.only('should navigate to blog detail page when clicking Read More', () => {
    cy.get('[class*="shadow-md"]')
      .first()
      .find('a')
      .contains('Read More')
      .click();

    // Ensure the URL includes `/blogs/` and loads a new page
    cy.url().should('include', '/blogs/');
  });
});
