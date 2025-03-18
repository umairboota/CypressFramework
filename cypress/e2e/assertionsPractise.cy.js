// const { describe } = require("mocha");

describe("practise assertions in cypress", () => {

    it("implicit Assertion", () => {

        cy.visit("/");
        // assertion (AND, Should)

        cy.url().should('include', 'saucedemo');
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.url().should('contain', 'com');


    })
    it("implicit Assertion for the page", () => {
        cy.visit("/");

        cy.get('.login_logo').should('contain', 'Swag Labs')

    })

})