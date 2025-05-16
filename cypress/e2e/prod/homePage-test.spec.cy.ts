describe.skip('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the header and intro sections', () => {
    cy.get('header').should('exist');
    cy.contains('Read our blog').should('be.visible');
  });

  it('should display the "View All" button and navigate on click', () => {
    cy.contains('button', 'View All').should('be.visible').click();
    cy.url().should('include', '/blogs');
  });

  it('should render exactly 4 blog cards', () => {
    cy.get('section').contains('Read our blog'); // ensure we’re inside the correct section
    cy.get('section')
      .find('div.rounded-lg.border')
      .should('have.length', 4);
  });

  it('should validate each blog card has title, like icon, and read more link', () => {
    cy.get('div.rounded-lg.border').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('h3').should('exist');
        cy.get('svg').should('exist'); // Heart icon
        cy.contains('Read more').should('have.attr', 'href');
      });
    });
  });
});
