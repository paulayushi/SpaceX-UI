describe('Route Guard', () => {

    it('Protect route from un-authrized access', () => {
        cy.visit('http://localhost:4200/launches');
        cy.url().should('eq', 'http://localhost:4200/')
        cy.get('.toast-message').should('be.visible').should('contain', 'You are not allowed to navigate to this page. Please login to navigate!')
    });
})
