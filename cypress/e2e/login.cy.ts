describe('Login Test', () => {
    it('Visits the login page', () => {
        cy.visit('/');
        cy.contains('Login To Fetch Launch Details');
    });

    it('Succefull login with valid credential', () => {
        cy.visit('/');
        cy.get('input[name="username"]').type('superuser');
        cy.get('input[name="password"]').type('Password@2023');
        cy.get('.btn-success').click();
        cy.get('.toast-message').should('be.visible').should('contain', 'Logged in successfully.')        
        cy.url().should('eq', 'http://localhost:4200/launches')
    });

    it('Login failure with invalid credential', () => {
        cy.visit('/');
        cy.get('input[name="username"]').type('superuser');
        cy.get('input[name="password"]').type('Invaild');
        cy.get('.btn-success').click();
        cy.get('.toast-message').should('be.visible').should('contain', 'Please enter your valid credential!')        
        cy.url().should('eq', 'http://localhost:4200/')
    });
})
