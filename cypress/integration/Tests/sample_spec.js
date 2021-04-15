describe('Testing in Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    
    it('Testing by id', () => {
        cy.get('#firstName').type("John");
    });
    it('Testing by class', () => {
        cy.get('.lastName').type("Doe");
    });
    it('Testing by element', () => {
        cy.get('button').click();
        // asserstion
        cy.get('h2').should('have.text', "Login");
    });
    it('Use of within', () => {
        // Useful when working within a particular group of elements
        cy.get('form').within(() => {
            cy.get('#firstName').type("John");
            cy.get('.lastName').type("Doe");
            cy.get('button').click();
        });
    });
});
