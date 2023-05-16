describe('Testing Launches Api', () => {
    beforeEach(() => {
        login('superuser', 'Password@2023');
    });

    //Testing past launches
    it('Past launches api returns 200 status and list of past launches in response', () => {
        const token = Cypress.env('token');
        const authorization = `bearer ${token}`;
        const options = {
            method: 'GET',
            url: `https://localhost:7071/spacex/launches/api/past-launches`,
            headers: {
                authorization,
            }
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.not.null;
                expect(response.body).to.be.an('Array');
                expect(response.body).to.have.length.of.at.least(1);
            })
    });

    it('Past launches api returns 401 status when token is null', () => {
        const options = {
            method: 'GET',
            url: `https://localhost:7071/spacex/launches/api/past-launches`,
            failOnStatusCode: false
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body).to.eq('');
            })
    });

    it('Past launches api returns 404 status when api url is wrong', () => {
        const options = {
            method: 'GET',
            url: `https://localhost:7071/spacex/invalid/api/past-launches`,
            failOnStatusCode: false
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.eq('');
            })
    });

    //Testing upcoming launches
    it('Upcoming launches api returns 200 status and list of upcoming launches in response', () => {
        const token = Cypress.env('token');
        const authorization = `bearer ${token}`;
        const options = {
            method: 'GET',
            url: `https://localhost:7071/spacex/launches/api/upcoming-launches`,
            headers: {
                authorization,
            }
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.not.null;
                expect(response.body).to.be.an('Array');
                expect(response.body).to.have.length.of.at.least(1);
            })
    });

    it('Upcoming launches api returns 401 status when token is null', () => {
        const options = {
            method: 'GET',
            url: `https://localhost:7071/spacex/launches/api/upcoming-launches`,
            failOnStatusCode: false
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body).to.eq('');
            })
    });

    it('Upcoming launches api returns 404 status when api url is wrong', () => {
        const options = {
            method: 'GET',
            url: `https://localhost:7071/spacex/invalid/api/upcoming-launches`,
            failOnStatusCode: false
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.eq('');
            })
    });

    //Testing launch details api
    it('Launch details api returns 200 status and details of launches in response', () => {
        const token = Cypress.env('token');
        const authorization = `bearer ${token}`;
        const options = {
            method: 'GET',
            url: `https://localhost:7071/spacex/launches/api/2`,
            headers: {
                authorization,
            }
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.not.null;
            })
    });

    it('Launch details api returns 401 status when token is null', () => {
        const options = {
            method: 'GET',
            url: `https://localhost:7071/spacex/launches/api/2`,
            failOnStatusCode: false
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.eq(401);
            })
    });

    it('Launch details api returns 404 status when launch id does not exist', () => {
        const token = Cypress.env('token');
        const authorization = `bearer ${token}`;
        const options = {
            method: 'GET',
            url: `https://localhost:7071/spacex/launches/api/2000`,
            headers: {
                authorization,
            },
            failOnStatusCode: false
        };

        cy.request(options)
            .then((response) => {
                expect(response.status).to.eq(404);
            })
    });
});


export function login(username: any, password: any): void {
    cy.request({
        method: 'POST',
        url: 'https://localhost:7071/spacex/auth/api/login',
        body: {
            username,
            password,
        }
    }).as('auth-token')
        .then((response) => {
            Cypress.env('token', response.body);
            return response;
        })
};