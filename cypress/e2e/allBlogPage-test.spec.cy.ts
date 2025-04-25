describe('All Blogs Page - Real API', () => {
  it('loads blogs from API and displays them', () => {
    // Navigate to the actual AllBlogs page route
    cy.visit('/blogs');

    // Wait for blogs to load
    cy.get('h1').should('contain.text', 'All Blogs');

    // Confirm blog cards exist
    cy.get('.rounded-lg').should('have.length.at.least', 1);

    // Validate structure inside each blog card
    cy.get('.rounded-lg').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('h3').should('not.be.empty'); // Blog title
        cy.get('p').should('exist');         // Blog preview
        cy.get('a')
          .contains('Read More')
          .should('have.attr', 'href')
          .and('include', '/blogs/');
      });
    });
  });
});
