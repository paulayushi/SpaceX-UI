describe('Past and upcoming launches test', () => {

  it('Past Launches details', () => {
    cy.visit('/');
    cy.get('input[name="username"]').type('superuser');
    cy.get('input[name="password"]').type('Password@2023');
    cy.get('.btn-success').click();
    cy.url().should('eq', 'http://localhost:4200/launches');
    cy.get("h1").should("contain", "SpaceX Past and Upcoming Launches");
    cy.get("h3").should("contain", "Past Launches");
    cy.get('table').find('tr').eq(1).find('td').eq(1).should('contain', 'FalconSat');
    cy.get('table').find('tr').eq(2).find('td').eq(1).should('contain', 'DemoSat');
    cy.get('table > tbody > tr > td:nth-child(2)').each(($elm, index, $list) => {
      const missionName = $elm.text();
      if (missionName.includes('FalconSat')) {
        cy.get('table > tbody > tr > td:nth-child(2)')
          .eq(index).next().then(function (launchDate) {
            const r = launchDate.text()
            expect(r).to.contains('24/03/2006');
          })
      }
    })
  });

  it('Upcoming Launches details', () => {
    cy.visit('/');
    cy.get('input[name="username"]').type('superuser');
    cy.get('input[name="password"]').type('Password@2023');
    cy.get('.btn-success').click();
    cy.url().should('eq', 'http://localhost:4200/launches')
    cy.get("h1").should("contain", "SpaceX Past and Upcoming Launches");
    cy.get("h3").should("contain", "Upcoming Launches");
    cy.get('table').find('tr').eq(1).find('td').eq(1).should('contain', 'CRS-21');
    cy.get('table').find('tr').eq(2).find('td').eq(1).should('contain', 'SXM-7');
    cy.get('table > tbody > tr > td:nth-child(2)').each(($elm, index, $list) => {
      const missionName = $elm.text();
      if (missionName.includes('CRS-21')) {
        cy.get('table > tbody > tr > td:nth-child(2)')
          .eq(index).next().then(function (launchDate) {
            const r = launchDate.text()
            expect(r).to.contains('06/12/2020');
          })
      }
    })
  });
})
