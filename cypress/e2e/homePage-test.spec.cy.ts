describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the homepage with header, intro, and footer', () => {
    cy.get('header').should('exist'); // assuming Header renders a <header>
    cy.contains('Latest Blogs').should('exist');
    cy.get('footer').should('exist'); // assuming Footer renders a <footer>
  });

  it('should display blog cards if blogs are fetched successfully', () => {
    cy.intercept('GET', '/api/blogs').as('fetchBlogs');
    cy.wait('@fetchBlogs');
    
    // Wait for blogs to load
    cy.get('h3').should('have.length.at.least', 1); // blog titles
    cy.get('a').contains('Read More →').should('exist');
  });

  it('should navigate to blogs page when clicking "Explore Blogs"', () => {
    cy.contains('Explore Blogs').click();
    cy.url().should('include', '/blogs');
  });

  it.skip('should display blog content with title and image if available', () => {
    cy.get('.grid > div').each(($el) => {
      cy.wrap($el).find('h3').should('exist');
      cy.wrap($el).find('p').should('exist');
      //cy.wrap($el).find('a').contains('Read More →').should('exist');
    });
  });
});
