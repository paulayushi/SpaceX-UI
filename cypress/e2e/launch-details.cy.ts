describe('Launch Details', () => {

    it('Launch details diplayed', () => {
        cy.visit('/');
        cy.get('input[name="username"]').type('superuser');
        cy.get('input[name="password"]').type('Password@2023');
        cy.get('.btn-success').click();
        cy.get('.tdlink').contains('td', 4).click();
        cy.url().should('eq', 'http://localhost:4200/launch-details/4');
        cy.get("h2").should('contain', 'Launch Details');
        cy.get('table').find('tr').eq(1).find('td').eq(1).should('contain', 'RatSat');
        cy.get('table').find('tr').eq(1).find('td').eq(3).should('contain', '29/09/2008');
        cy.get('table > tbody > tr > td:nth-child(2)').each(($elm, index, $list) => {
            const rocketName = $elm.text();
            if (rocketName.includes('Falcon 1')) {
                cy.get('table > tbody > tr > td:nth-child(2)')
                    .eq(index).next().then(function (rocketType) {
                        const r = rocketType.text()
                        expect(r).to.contains('Merlin C');
                    })
            }
        })
    });

    it('Back button to Past and Upcoming Launces page', () => {
        cy.visit('/');
        cy.get('input[name="username"]').type('superuser');
        cy.get('input[name="password"]').type('Password@2023');
        cy.get('.btn-success').click();
        cy.visit('http://localhost:4200/launch-details/4');
        cy.get('.fa-arrow-left').click();
        cy.url().should('eq', 'http://localhost:4200/launches')
    });
})
