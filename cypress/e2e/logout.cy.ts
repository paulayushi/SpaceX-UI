describe('Logout Test', () => {
    it('Successful Logout', () => {
        cy.visit('/');
        cy.get('input[name="username"]').type('superuser');
        cy.get('input[name="password"]').type('Password@2023');
        cy.get('.btn-success').click();
        cy.url().should('eq', 'http://localhost:4200/launches')
        cy.get('.fa-sign-out').click();
        cy.url().should('eq', 'http://localhost:4200/')
        cy.get('.toast-message').should('be.visible').should('contain', 'Logged out successfully.')
        cy.get("h1").should("contain", "Login To Fetch Launch Details");
    });
})