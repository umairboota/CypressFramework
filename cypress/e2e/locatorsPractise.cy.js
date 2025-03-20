describe("", ()=>{

    it('TC003-first selector', ()=>{
        cy.visit('/');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();

    })

    it('TC004-first selector', ()=>{
        cy.visit('/');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.title').contains("Products");

    })
    
})