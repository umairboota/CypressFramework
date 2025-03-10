describe('My First Test', () => {


    it('TC001-positive test Case', () => {
        cy.visit('/');
        cy.title().should('eq', 'Swag Labs');
    });


    it('TC002 - positive test Case', () => {
        cy.title().should('not.equal', 'Swab Labs');
    });

})