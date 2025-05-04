describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it.only('should render the Header, Intro, and Footer components', () => {
    cy.get('header').should('exist');
    cy.contains('Latest Blogs').should('be.visible');
    cy.get('footer').should('exist');
  });

  it.only('should navigate to the blogs listing page when Explore Blogs is clicked', () => {
    cy.contains('Explore Blogs').click();
    cy.url().should('include', '/blogs');
  });
});
