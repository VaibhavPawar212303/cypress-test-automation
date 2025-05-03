describe('All Blogs Page', () => {
  beforeEach(() => {
    cy.visit('/blogs'); // Replace with actual route if different
    cy.wait(5000);
  });

  it('renders the header and shows blog list', () => {
    cy.contains('All Posts').should('exist');
    cy.get('input[placeholder="Search...."]').should('exist');
    cy.get('div').contains('Categories').should('exist');
  });

  it('filters blogs by category', () => {
    // cy.get('div').contains('Categories').click();
    cy.get('input[type="checkbox"]').first().check({ force: true });
    cy.wait(300); // wait for effect to apply
    cy.get('h2').contains(/All Posts \(\d+\)/);
  });

  it('searches blogs using input', () => {
    cy.get('input[placeholder="Search...."]').type('design');
    cy.wait(300); // debounce or update delay
    cy.get('h2').contains(/All Posts \(\d+\)/);
  });

  it('paginates blogs correctly', () => {
    cy.get('button').contains('Next →').click();
    cy.get('button').contains('← Previous').should('not.be.disabled');
  });

  it('toggles Show More/Show Less in categories', () => {
    cy.contains('Show more').click();
    cy.contains('Show less').should('exist').click();
    cy.contains('Show more').should('exist');
  });

  it('opens individual blog post page', () => {
    cy.get('a').contains('Read more →').first().should('have.attr', 'href').then(($link) => {
      if ($link) {
        cy.visit(`${$link}`);
        cy.url().should('include', $link);
      }
    });
  });

  it('renders recent blogs section', () => {
    cy.contains('Recent blog posts').should('exist');
    cy.get('h3').first().should('exist');
  });
});
